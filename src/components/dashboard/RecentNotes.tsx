import React, { useState } from 'react';
import { FileText, Plus, X, Check } from 'lucide-react';
import { StudentDashboardNote } from '../../types';

interface RecentNotesProps {
  notes?: StudentDashboardNote[];
}

export const RecentNotes: React.FC<RecentNotesProps> = ({
  notes = [
    {
      id: 'note-1',
      text: 'مراجعة أقسام الكلام قبل الدرس القادم.',
      courseTitle: 'النحو من الصفر إلى الإتقان',
      date: 'اليوم',
    },
    {
      id: 'note-2',
      text: 'المبتدأ والخبر يحتاجان إلى مراجعة.',
      courseTitle: 'النحو من الصفر إلى الإتقان',
      date: 'أمس',
    },
  ],
}) => {
  const [allNotes, setAllNotes] = useState<StudentDashboardNote[]>(notes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    const newNote: StudentDashboardNote = {
      id: `note-${Date.now()}`,
      text: newNoteText.trim(),
      courseTitle: 'النحو من الصفر إلى الإتقان',
      date: 'الآن',
    };

    setAllNotes([newNote, ...allNotes]);
    setNewNoteText('');
  };

  return (
    <>
      <div 
        id="dashboard-recent-notes"
        className="p-5 sm:p-6 rounded-2xl bg-[#121110] border border-[#292521] space-y-4 select-none text-right flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#292521] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h4 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              ملاحظاتك الأخيرة
            </h4>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs font-semibold text-[#D6B978] hover:text-[#E7D29A] transition-colors cursor-pointer"
          >
            عرض كل الملاحظات
          </button>
        </div>

        {/* Notes Stream */}
        {allNotes && allNotes.length > 0 ? (
          <div className="space-y-3">
            {allNotes.slice(0, 2).map((note) => (
              <div
                key={note.id}
                onClick={() => setIsModalOpen(true)}
                className="p-3.5 rounded-xl bg-[#0C0B0A]/70 hover:bg-[#151311] border border-[#292521] hover:border-[#D6B978]/30 transition-all space-y-1.5 cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#D6B978]">
                    {note.courseTitle}
                  </span>
                  <span className="font-mono text-[10px] text-[#777169]">
                    {note.date}
                  </span>
                </div>

                <p className="text-xs text-[#F5F1E8] font-light leading-relaxed">
                  «{note.text}»
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-xs text-[#777169]">
            لا توجد ملاحظات مدونة بعد.
          </div>
        )}

        {/* Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-2.5 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>عرض كل الملاحظات</span>
        </button>
      </div>

      {/* Notes Full Modal */}
      {isModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="دفتر الملاحظات التعليمية"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
        >
          <div className="relative w-full max-w-lg bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-right">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-[#292521] flex items-center justify-between bg-[#151311]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#D6B978]/15 border border-[#D6B978]/30 flex items-center justify-center text-[#D6B978]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                    ملاحظاتك الأخيرة
                  </h3>
                  <p className="text-xs text-[#AAA39A]">سجل الملاحظات والفوائد اللغوية</p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Add Note Form */}
            <form onSubmit={handleAddNote} className="p-4 border-b border-[#292521] bg-[#0C0B0A] space-y-3">
              <textarea
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="اكتب ملاحظة أو فائدة لغوية جديدة..."
                className="w-full h-20 rounded-xl bg-[#121110] border border-[#292521] focus:border-[#D6B978] p-3 text-xs text-[#F5F1E8] placeholder-[#777169] resize-none outline-none"
              />

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  disabled={!newNoteText.trim()}
                  className="px-4 py-1.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] disabled:opacity-40 text-[#070707] font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>حفظ الملاحظة</span>
                </button>
              </div>
            </form>

            {/* Notes List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {allNotes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 rounded-xl bg-[#151311] border border-[#292521] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#D6B978]">{note.courseTitle}</span>
                    <span className="font-mono text-[11px] text-[#777169]">{note.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F1E8] font-light leading-relaxed">
                    «{note.text}»
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
