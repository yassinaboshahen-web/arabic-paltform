import React from 'react';
import { motion } from 'motion/react';
import { EXPLORE_CATEGORIES } from '../../data/coursesData';

interface CategoryNavigationProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="w-full border-b border-[#292521] overflow-x-auto no-scrollbar py-1">
      <nav 
        className="flex items-center gap-6 sm:gap-8 min-w-max text-right" 
        aria-label="تصنيفات الدورات"
      >
        {EXPLORE_CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`relative py-3.5 text-xs sm:text-sm font-semibold transition-colors duration-200 focus:outline-none whitespace-nowrap ${
                isActive
                  ? 'text-[#D6B978]'
                  : 'text-[#AAA39A] hover:text-[#F5F1E8]'
              }`}
            >
              <span>{category.label}</span>

              {/* Active Champagne Underline */}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D6B978] rounded-full shadow-[0_1px_8px_rgba(214,185,120,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
