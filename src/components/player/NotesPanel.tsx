import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Clock, 
  Check, 
  Sparkles,
  Edit2
} from 'lucide-react';
import { LessonNote } from '../../types';

interface NotesPanelProps {
  lessonId: string;
  initialNotes: LessonNote[];
  currentTimeFormatted?: string;
  currentTimeSeconds?: number;
}

export const NotesPanel: React.FC<NotesPanelProps> = ({
  lessonId,
  initialNotes,
  currentTimeFormatted = '08:09',
  currentTimeSeconds = 489,
}) => {
  const [notes, setNotes] = useState<LessonNote[]>(initialNotes);
  const [newNoteText, setNewNoteText] = useState<string>('');
  const [includeTimestamp, setIncludeTimestamp] = useState<boolean>(true);
  const [isSavedToast, setIsSavedToast] = useState<boolean>(false);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    const newNote: LessonNote = {
      id: `note-${Date.now()}`,
      lessonId,
      text: newNoteText.trim(),
      timestampLabel: includeTimestamp ? currentTimeFormatted : undefined,
      timestampSeconds: includeTimestamp ? currentTimeSeconds : undefined,
      createdAt: 'الآن',
    };

    setNotes([newNote, ...notes]);
    setNewNoteText('');
    setIsSavedToast(true);
    setTimeout(() => setIsSavedToast(false), 2500);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div 
      id="tab-lesson-notes"
      className="space-y-6 text-right select-none animate-fadeIn"
    >
      
      {/* 1. Add Note Input Card */}
      <div className="rounded-2xl bg-[#121110] border border-[#292521] p-5 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#D6B978]" />
            <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              ملاحظاتي الخاصة
            </h3>
          </div>
          <span className="text-xs text-[#AAA39A]">مساحتك التعليمية الشخصية</span>
        </div>

        <form onSubmit={handleAddNote} className="space-y-3">
          <textarea
            id="new-note-textarea"
            rows={3}
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            placeholder="اكتب ملاحظتك حول هذا المفهوم أو الشاهد هنا..."
            className="w-full rounded-xl bg-[#151311] border border-[#292521] focus:border-[#D6B978] focus:ring-1 focus:ring-[#D6B978] p-3.5 text-sm text-[#F5F1E8] placeholder-[#777169] resize-none outline-none transition-all"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            {/* Timestamp Toggle */}
            <label className="flex items-center gap-2 cursor-pointer text-xs text-[#AAA39A] hover:text-[#F5F1E8]">
              <input 
                type="checkbox"
                checked={includeTimestamp}
                onChange={(e) => setIncludeTimestamp(e.target.checked)}
                className="w-4 h-4 rounded bg-[#181614] border-[#292521] text-[#D6B978] focus:ring-0 accent-[#D6B978]"
              />
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#D6B978]" />
                إرفاق توقيت الفيديو الحالي ({currentTimeFormatted})
              </span>
            </label>

            {/* Save Note Button */}
            <button
              id="save-note-btn"
              type="submit"
              disabled={!newNoteText.trim()}
              className="px-5 py-2 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] disabled:opacity-40 disabled:cursor-not-allowed text-[#070707] font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#D6B978]/10 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>حفظ الملاحظة</span>
            </button>
          </div>
        </form>

        {isSavedToast && (
          <div className="mt-3 p-2 rounded-lg bg-[#D6B978]/15 border border-[#D6B978]/30 text-xs text-[#D6B978] flex items-center gap-2">
            <Check className="w-3.5 h-3.5" />
            <span>تم حفظ الملاحظة بنجاح في سجل دراستك!</span>
          </div>
        )}
      </div>

      {/* 2. Notes List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[#777169] px-1">
          <span>الملاحظات المحفوظة ({notes.length})</span>
          <span>ترتيب زمني</span>
        </div>

        {notes.length === 0 ? (
          <div className="p-8 rounded-2xl bg-[#121110]/50 border border-[#292521] text-center text-xs text-[#777169]">
            لا توجد ملاحظات مسجلة بعد. ابدأ بكتابة أول ملاحظة لك أثناء متابعة الدرس.
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-[#292521] hover:border-[#292521]/90 transition-all flex items-start justify-between gap-4 group"
            >
              <div className="space-y-2 flex-1 min-w-0">
                <div className="flex items-center gap-2.5">
                  {note.timestampLabel && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#181614] border border-[#D6B978]/30 text-[11px] font-mono text-[#D6B978]">
                      <Clock className="w-3 h-3" />
                      <span>{note.timestampLabel}</span>
                    </span>
                  )}
                  <span className="text-[11px] text-[#777169]">{note.createdAt}</span>
                </div>

                <p className="text-sm text-[#F5F1E8] font-light leading-relaxed font-['Cairo',_sans-serif]">
                  {note.text}
                </p>
              </div>

              {/* Action */}
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="w-8 h-8 rounded-lg bg-[#151311] hover:bg-[#651F2A]/30 border border-[#292521] hover:border-[#651F2A]/60 flex items-center justify-center text-[#777169] hover:text-[#F5F1E8] transition-colors shrink-0 opacity-80 group-hover:opacity-100"
                title="حذف الملاحظة"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
};
