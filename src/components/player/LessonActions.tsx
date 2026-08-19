import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Bookmark, 
  Share2, 
  MoreHorizontal, 
  Download, 
  HelpCircle, 
  Check, 
  Sparkles,
  Keyboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LessonActionsProps {
  isCompleted: boolean;
  isSaved: boolean;
  onToggleComplete: () => void;
  onToggleSave: () => void;
  onOpenShortcuts: () => void;
}

export const LessonActions: React.FC<LessonActionsProps> = ({
  isCompleted,
  isSaved,
  onToggleComplete,
  onToggleSave,
  onOpenShortcuts,
}) => {
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="lesson-actions-bar"
      className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-[#292521] text-xs font-semibold select-none"
    >
      
      {/* Right (RTL): Mark Completed Button */}
      <div className="flex items-center gap-2">
        <button
          id="lesson-action-complete-btn"
          onClick={onToggleComplete}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-bold ${
            isCompleted
              ? 'bg-[#D6B978] text-[#070707] shadow-md shadow-[#D6B978]/20'
              : 'bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/50 text-[#F5F1E8]'
          }`}
          title="تحديد حالة إكمال الدرس"
        >
          <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-[#070707]' : 'text-[#D6B978]'}`} />
          <span>{isCompleted ? 'تم إكمال الدرس' : 'تحديد كمكتمل'}</span>
        </button>

        {isCompleted && (
          <span className="hidden sm:inline text-[11px] text-[#AAA39A] font-light">
            تم تسجيل إنجازك في سجل الدورة
          </span>
        )}
      </div>

      {/* Left (RTL): Save, Share, More */}
      <div className="flex items-center gap-2">
        
        {/* Save/Bookmark */}
        <button
          id="lesson-action-save-btn"
          onClick={onToggleSave}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border transition-all ${
            isSaved
              ? 'bg-[#181614] border-[#D6B978]/40 text-[#D6B978]'
              : 'bg-[#151311] hover:bg-[#181614] border-[#292521] hover:border-[#D6B978]/30 text-[#AAA39A] hover:text-[#F5F1E8]'
          }`}
          title="حفظ الدرس للرجوع إليه لاحقًا"
        >
          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          <span>{isSaved ? 'محفوظ' : 'حفظ الدرس'}</span>
        </button>

        {/* Share */}
        <button
          id="lesson-action-share-btn"
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/30 text-[#AAA39A] hover:text-[#F5F1E8] transition-colors relative"
          title="مشاركة رابط الدرس"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#D6B978]" />
              <span className="text-[#D6B978]">تم النسخ!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>مشاركة</span>
            </>
          )}
        </button>

        {/* More Options Popover */}
        <div className="relative">
          <button
            id="lesson-action-more-btn"
            onClick={() => setShowMoreMenu((prev) => !prev)}
            className="w-8 h-8 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/30 text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
            title="خيارات إضافية"
            aria-expanded={showMoreMenu}
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>

          <AnimatePresence>
            {showMoreMenu && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setShowMoreMenu(false)} 
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 bottom-full mb-2 w-48 rounded-2xl bg-[#121110] border border-[#292521] p-1.5 shadow-2xl z-40 text-right space-y-0.5"
                >
                  <button
                    onClick={() => {
                      setShowMoreMenu(false);
                      onOpenShortcuts();
                    }}
                    className="w-full p-2 rounded-xl flex items-center gap-2 hover:bg-[#181614] text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
                  >
                    <Keyboard className="w-3.5 h-3.5 text-[#D6B978]" />
                    <span>اختصارات لوحة المفاتيح</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowMoreMenu(false);
                      const el = document.getElementById('lesson-tabs-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full p-2 rounded-xl flex items-center gap-2 hover:bg-[#181614] text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D6B978]" />
                    <span>تحميل ملحقات الدرس</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowMoreMenu(false);
                      alert('يمكنك التواصل مع فريق الدعم الأكاديمي عبر منصة الأكاديمية.');
                    }}
                    className="w-full p-2 rounded-xl flex items-center gap-2 hover:bg-[#181614] text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-[#D6B978]" />
                    <span>الإبلاغ عن ملاحظة</span>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
};
