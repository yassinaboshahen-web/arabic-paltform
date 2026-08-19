import React, { useEffect } from 'react';
import { X, Sparkles, Check, ArrowLeft } from 'lucide-react';
import { StudentNotification } from '../../types';

interface SystemUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  notification: StudentNotification | null;
  onExploreFeatures?: () => void;
}

export const SystemUpdateModal: React.FC<SystemUpdateModalProps> = ({
  isOpen,
  onClose,
  notification,
  onExploreFeatures,
}) => {
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

  const features = [
    'مشغل دروس تفاعلي بدقة فائقة مع إمكانية تدوين الملاحظات الفورية.',
    'لوحة تحكم للطالب مع خط زمني يوضح مسار الإنجاز وساعات التعلم.',
    'مساعد ذكي أكاديمي متخصص في النحو والصرف والبلاغة العربية.',
    'مركز إشعارات مخصص لتتبع المهام ورسائل الأستاذ والتحديثات الأكاديمية.',
  ];

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="system-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none"
    >
      <div 
        className="relative w-full max-w-lg bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D6B978] to-transparent" />

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#292521] flex items-center justify-between bg-[#151311]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6B978]/15 border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="system-modal-title" className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                {notification.title}
              </h3>
              <p className="text-xs text-[#AAA39A]">تحديثات المنصة • {notification.time}</p>
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
          <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed">
            {notification.systemDetails || notification.description}
          </p>

          {/* Feature Highlights */}
          <div className="p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] space-y-2.5">
            <span className="text-xs font-bold text-[#D6B978] block">
              أبرز الإضافات في هذا التحديث:
            </span>

            <div className="space-y-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F1E8]">
                  <Check className="w-3.5 h-3.5 text-[#D6B978] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-3 border-t border-[#292521] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              إغلاق
            </button>

            {onExploreFeatures && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onExploreFeatures();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-[#D6B978]/15 cursor-pointer"
              >
                <span>استكشف الميزات الآن</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
