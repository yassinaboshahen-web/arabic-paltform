import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, RotateCcw, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface FilterBarProps {
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
  onOpenMobileDrawer: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  levelFilter,
  setLevelFilter,
  durationFilter,
  setDurationFilter,
  ratingFilter,
  setRatingFilter,
  sortBy,
  setSortBy,
  onReset,
  totalResults,
  onOpenMobileDrawer
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isFiltered = levelFilter !== 'all' || durationFilter !== 'all' || ratingFilter !== 'all' || sortBy !== 'popular';

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-[#292521] text-right">
      
      {/* Right side in RTL: Filter Controls */}
      <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
        
        {/* Mobile Filter Trigger Button */}
        <button
          onClick={onOpenMobileDrawer}
          className="sm:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121110] border border-[#292521] text-xs font-semibold text-[#F5F1E8]"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>الفلاتر والترتيب</span>
          {isFiltered && <span className="w-1.5 h-1.5 rounded-full bg-[#D6B978]" />}
        </button>

        {/* Desktop Filter Dropdowns */}
        {/* 1. Level Filter */}
        <div className="relative hidden sm:block">
          <button
            onClick={() => toggleDropdown('level')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              levelFilter !== 'all'
                ? 'bg-[#181614] border-[#D6B978]/50 text-[#D6B978]'
                : 'bg-[#121110] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
            }`}
          >
            <span>المستوى:</span>
            <span className="text-[#F5F1E8]">
              {levelFilter === 'all' ? 'الكل' : levelFilter}
            </span>
            <ChevronDown className="w-3 h-3 text-[#AAA39A]" />
          </button>

          <AnimatePresence>
            {openDropdown === 'level' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-2 w-36 bg-[#121110] border border-[#292521] rounded-xl shadow-xl p-1.5 z-30"
              >
                {[
                  { id: 'all', label: 'الكل' },
                  { id: 'مبتدئ', label: 'مبتدئ' },
                  { id: 'متوسط', label: 'متوسط' },
                  { id: 'متقدم', label: 'متقدم' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setLevelFilter(item.id);
                      setOpenDropdown(null);
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] text-right"
                  >
                    <span>{item.label}</span>
                    {levelFilter === item.id && <Check className="w-3 h-3 text-[#D6B978]" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2. Duration Filter */}
        <div className="relative hidden sm:block">
          <button
            onClick={() => toggleDropdown('duration')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              durationFilter !== 'all'
                ? 'bg-[#181614] border-[#D6B978]/50 text-[#D6B978]'
                : 'bg-[#121110] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
            }`}
          >
            <span>المدة:</span>
            <span className="text-[#F5F1E8]">
              {durationFilter === 'all' ? 'الكل' : durationFilter === '2-5' ? '2–5 ساعات' : '5+ ساعات'}
            </span>
            <ChevronDown className="w-3 h-3 text-[#AAA39A]" />
          </button>

          <AnimatePresence>
            {openDropdown === 'duration' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-2 w-40 bg-[#121110] border border-[#292521] rounded-xl shadow-xl p-1.5 z-30"
              >
                {[
                  { id: 'all', label: 'جميع المدد' },
                  { id: '2-5', label: '2–5 ساعات' },
                  { id: '5+', label: '5+ ساعات' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setDurationFilter(item.id);
                      setOpenDropdown(null);
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] text-right"
                  >
                    <span>{item.label}</span>
                    {durationFilter === item.id && <Check className="w-3 h-3 text-[#D6B978]" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. Rating Filter */}
        <div className="relative hidden sm:block">
          <button
            onClick={() => toggleDropdown('rating')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              ratingFilter !== 'all'
                ? 'bg-[#181614] border-[#D6B978]/50 text-[#D6B978]'
                : 'bg-[#121110] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8]'
            }`}
          >
            <span>التقييم:</span>
            <span className="text-[#F5F1E8]">
              {ratingFilter === 'all' ? 'الكل' : `★ ${ratingFilter}+`}
            </span>
            <ChevronDown className="w-3 h-3 text-[#AAA39A]" />
          </button>

          <AnimatePresence>
            {openDropdown === 'rating' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-2 w-32 bg-[#121110] border border-[#292521] rounded-xl shadow-xl p-1.5 z-30"
              >
                {[
                  { id: 'all', label: 'الكل' },
                  { id: '4.8', label: '★ 4.8+' },
                  { id: '4.9', label: '★ 4.9+' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setRatingFilter(item.id);
                      setOpenDropdown(null);
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] text-right"
                  >
                    <span>{item.label}</span>
                    {ratingFilter === item.id && <Check className="w-3 h-3 text-[#D6B978]" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. Sorting Dropdown */}
        <div className="relative hidden sm:block">
          <button
            onClick={() => toggleDropdown('sort')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#121110] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
          >
            <span>الترتيب:</span>
            <span className="text-[#D6B978]">
              {sortBy === 'popular' ? 'الأكثر شعبية' : sortBy === 'top-rated' ? 'الأعلى تقييمًا' : 'الأحدث'}
            </span>
            <ChevronDown className="w-3 h-3 text-[#AAA39A]" />
          </button>

          <AnimatePresence>
            {openDropdown === 'sort' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-2 w-36 bg-[#121110] border border-[#292521] rounded-xl shadow-xl p-1.5 z-30"
              >
                {[
                  { id: 'popular', label: 'الأكثر شعبية' },
                  { id: 'top-rated', label: 'الأعلى تقييمًا' },
                  { id: 'newest', label: 'الأحدث' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSortBy(item.id);
                      setOpenDropdown(null);
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] text-right"
                  >
                    <span>{item.label}</span>
                    {sortBy === item.id && <Check className="w-3 h-3 text-[#D6B978]" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reset Filter Button */}
        {isFiltered && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs text-[#AAA39A] hover:text-[#D6B978] bg-[#181614] border border-[#292521] transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>إعادة ضبط</span>
          </button>
        )}
      </div>

      {/* Left side in RTL: Result Indicator */}
      <div className="text-xs text-[#AAA39A] font-light">
        <span>{totalResults} دورات متاحة</span>
      </div>

    </div>
  );
};
