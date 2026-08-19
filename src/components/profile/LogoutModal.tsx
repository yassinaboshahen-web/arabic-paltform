import React, { useEffect } from 'react';
import { LogOut, X, AlertTriangle } from 'lucide-react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmLogout: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  onConfirmLogout,
}) => {
  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="logout-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
    >
      <div 
        className="relative w-full max-w-md bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#651F2A] to-transparent" />

        {/* Header */}
        <div className="p-6 border-b border-[#292521] flex items-center justify-between bg-[#151311]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#651F2A]/20 border border-[#651F2A]/40 flex items-center justify-center text-[#D6B978]">
              <LogOut className="w-5 h-5 text-[#D6B978]" />
            </div>
            <div>
              <h3 id="logout-modal-title" className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                هل تريد تسجيل الخروج؟
              </h3>
              <p className="text-xs text-[#AAA39A]">تأكيد إنهاء الجلسة الحالية</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed">
            سيتم حفظ جميع تقدمك وإنجازاتك الدراسية بشكل آمن. يمكنك تسجيل الدخول مرة أخرى في أي وقت لمتابعة دروسك.
          </p>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#292521]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              إلغاء
            </button>

            <button
              type="button"
              onClick={onConfirmLogout}
              className="px-5 py-2.5 rounded-xl bg-[#651F2A] hover:bg-[#852737] text-[#F5F1E8] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#651F2A]/30 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
