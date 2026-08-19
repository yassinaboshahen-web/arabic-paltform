import React, { useEffect } from 'react';
import { X, MessageSquare, User, Send, Check } from 'lucide-react';
import { StudentNotification } from '../../types';

interface TeacherMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  notification: StudentNotification | null;
}

export const TeacherMessageModal: React.FC<TeacherMessageModalProps> = ({
  isOpen,
  onClose,
  notification,
}) => {
  const [replyText, setReplyText] = React.useState('');
  const [isSent, setIsSent] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setReplyText('');
      setIsSent(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !notification) return null;

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="teacher-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
    >
      <div 
        className="relative w-full max-w-lg bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Golden top accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D6B978] to-transparent" />

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#292521] flex items-center justify-between bg-[#151311]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#651F2A]/30 border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 id="teacher-modal-title" className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                {notification.title}
              </h3>
              <p className="text-xs text-[#AAA39A]">المعلم: {notification.teacherName || 'أحمد محمود'} • {notification.time}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Teacher Message Box */}
          <div className="p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#181614] border border-[#D6B978]/40 flex items-center justify-center text-[10px] text-[#D6B978] font-bold">
                  ض
                </div>
                <span className="text-xs font-bold text-[#F5F1E8]">
                  {notification.teacherName || 'الأستاذ أحمد محمود'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#777169]">{notification.time}</span>
            </div>

            <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed pt-1">
              {notification.messageBody || notification.description}
            </p>
          </div>

          {/* Reply Form */}
          <form onSubmit={handleSendReply} className="space-y-3 pt-2 border-t border-[#292521]">
            <label className="text-xs font-semibold text-[#AAA39A] block">
              إرسال تعقيب أو سؤال إضافي للمعلم:
            </label>
            
            {isSent ? (
              <div className="p-3.5 rounded-xl bg-[#181614] border border-[#D6B978]/40 text-xs text-[#D6B978] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D6B978]" />
                <span>تم إرسال ردك إلى الأستاذ بنجاح.</span>
              </div>
            ) : (
              <>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="اكتب استفسارك أو تعليقك هنا..."
                  rows={3}
                  className="w-full rounded-xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] p-3 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none transition-colors resize-none"
                />

                <div className="flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-colors cursor-pointer"
                  >
                    إغلاق
                  </button>

                  <button
                    type="submit"
                    disabled={!replyText.trim()}
                    className="px-5 py-2 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-[#D6B978]/15 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>إرسال التعقيب</span>
                  </button>
                </div>
              </>
            )}
          </form>

        </div>

      </div>
    </div>
  );
};
