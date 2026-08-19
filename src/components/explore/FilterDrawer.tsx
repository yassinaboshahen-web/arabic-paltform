import React from 'react';
import { X, RotateCcw, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  levelFilter: string;
  setLevelFilter: (val: string) => void;
  durationFilter: string;
  setDurationFilter: (val: string) => void;
  ratingFilter: string;
  setRatingFilter: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  onReset: () => void;
  totalResults: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  levelFilter,
  setLevelFilter,
  durationFilter,
  setDurationFilter,
  ratingFilter,
  setRatingFilter,
  sortBy,
  setSortBy,
  onReset,
  totalResults
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="relative w-full max-w-lg bg-[#121110] border border-[#292521] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden text-right max-h-[85vh] flex flex-col"
        >
          {/* Drawer Header */}
          <div className="p-5 bg-[#0C0B0A] border-b border-[#292521] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                فلاتر الدورات
              </h3>
              <span className="text-xs text-[#AAA39A]">({totalResults} دورات)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onReset}
                className="text-xs text-[#AAA39A] hover:text-[#D6B978] flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#181614] border border-[#292521] transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>إعادة ضبط</span>
              </button>
              <button
                onClick={onClose}
                aria-label="إغلاق الفلاتر"
                className="w-8 h-8 rounded-lg bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            
            {/* Level Filter */}
            <div>
              <label className="block text-xs font-bold text-[#AAA39A] uppercase tracking-wider mb-2.5">
                المستوى
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'all', label: 'الكل' },
                  { id: 'مبتدئ', label: 'مبتدئ' },
                  { id: 'متوسط', label: 'متوسط' },
                  { id: 'متقدم', label: 'متقدم' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLevelFilter(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors flex items-center justify-center gap-1.5 ${
                      levelFilter === item.id
                        ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]'
                        : 'bg-[#151311] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
                    }`}
                  >
                    {levelFilter === item.id && <Check className="w-3.5 h-3.5 text-[#D6B978]" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-xs font-bold text-[#AAA39A] uppercase tracking-wider mb-2.5">
                المدة
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'all', label: 'جميع المدد' },
                  { id: '2-5', label: '2–5 ساعات' },
                  { id: '5+', label: '5+ ساعات' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDurationFilter(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors flex items-center justify-center gap-1.5 ${
                      durationFilter === item.id
                        ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]'
                        : 'bg-[#151311] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
                    }`}
                  >
                    {durationFilter === item.id && <Check className="w-3.5 h-3.5 text-[#D6B978]" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-xs font-bold text-[#AAA39A] uppercase tracking-wider mb-2.5">
                التقييم
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'all', label: 'الكل' },
                  { id: '4.8', label: '★ 4.8+' },
                  { id: '4.9', label: '★ 4.9+' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRatingFilter(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors flex items-center justify-center gap-1.5 ${
                      ratingFilter === item.id
                        ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]'
                        : 'bg-[#151311] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
                    }`}
                  >
                    {ratingFilter === item.id && <Check className="w-3.5 h-3.5 text-[#D6B978]" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sorting */}
            <div>
              <label className="block text-xs font-bold text-[#AAA39A] uppercase tracking-wider mb-2.5">
                الترتيب حسب
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'popular', label: 'الأكثر شعبية' },
                  { id: 'top-rated', label: 'الأعلى تقييمًا' },
                  { id: 'newest', label: 'الأحدث' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSortBy(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors flex items-center justify-center gap-1.5 ${
                      sortBy === item.id
                        ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]'
                        : 'bg-[#151311] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
                    }`}
                  >
                    {sortBy === item.id && <Check className="w-3.5 h-3.5 text-[#D6B978]" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Drawer Footer */}
          <div className="p-4 bg-[#0C0B0A] border-t border-[#292521]">
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs sm:text-sm text-center transition-colors"
            >
              عرض النتائج ({totalResults})
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
