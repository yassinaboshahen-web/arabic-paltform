import React, { useEffect } from 'react';
import { X, Keyboard, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const shortcuts = [
    { key: 'Space', description: 'تشغيل أو إيقاف الدرس مؤقتًا' },
    { key: 'F', description: 'تبديل وضع ملء الشاشة' },
    { key: 'M', description: 'كتم أو تشغيل الصوت' },
    { key: '←', description: 'تقديم الفيديو 10 ثوانٍ' },
    { key: '→', description: 'ترجيع الفيديو 10 ثوانٍ' },
    { key: 'Esc', description: 'إغلاق النوافذ أو الخروج من وضع التركيز' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          id="keyboard-shortcuts-modal"
          role="dialog"
          aria-modal="true"
          aria-label="اختصارات لوحة المفاتيح"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
        >
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-md rounded-3xl bg-[#121110] border border-[#292521] p-6 sm:p-8 text-right shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#292521] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978]">
                  <Keyboard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                    اختصارات لوحة المفاتيح
                  </h3>
                  <p className="text-xs text-[#AAA39A]">لتجربة تعلم سريعة وسلسة</p>
                </div>
              </div>

              <button
                id="close-shortcuts-modal-btn"
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-[#181614] hover:bg-[#292521] border border-[#292521] flex items-center justify-center text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Shortcuts List */}
            <div className="space-y-3">
              {shortcuts.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#151311] border border-[#292521]"
                >
                  <span className="text-xs sm:text-sm text-[#F5F1E8] font-medium font-['Cairo',_sans-serif]">
                    {item.description}
                  </span>
                  <kbd className="px-2.5 py-1 rounded-md bg-[#181614] border border-[#292521] text-xs font-mono font-bold text-[#D6B978] shadow-inner">
                    {item.key}
                  </kbd>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-6 pt-4 border-t border-[#292521] text-center text-xs text-[#777169]">
              اضغط <kbd className="font-mono text-[#D6B978]">Esc</kbd> في أي وقت للإغلاق
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
