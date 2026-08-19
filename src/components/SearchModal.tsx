import React, { useState } from 'react';
import { Search, X, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { POPULAR_COURSES, FEATURED_COURSE, LEARNING_CATEGORIES } from '../data/coursesData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (courseId: string) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ 
  isOpen, 
  onClose, 
  onSelectCourse,
  onSelectCategory
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const allCourses = [FEATURED_COURSE, ...POPULAR_COURSES];

  const matchedCourses = query.trim() === '' 
    ? allCourses.slice(0, 3) 
    : allCourses.filter(c => 
        c.title.includes(query) || 
        c.description.includes(query) || 
        c.topics.some(t => t.includes(query)) ||
        c.categoryArabic.includes(query)
      );

  const matchedCategories = query.trim() === ''
    ? LEARNING_CATEGORIES
    : LEARNING_CATEGORIES.filter(c => c.title.includes(query) || c.description.includes(query));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative w-full max-w-2xl bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl overflow-hidden text-right"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-[#0C0B0A] border-b border-[#292521] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D6B978] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن دورة، قاعدة نحوية، مسار بلاغي، أو موضوع..."
            className="flex-1 bg-transparent border-none text-sm sm:text-base text-[#F5F1E8] placeholder-[#AAA39A] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#AAA39A] hover:text-[#F5F1E8] px-2 py-1 bg-[#181614] rounded border border-[#292521]"
            >
              مسح
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="w-8 h-8 rounded-lg bg-[#181614] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center shrink-0 border border-[#292521]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Categories Quick Nav */}
          <div>
            <div className="text-xs font-bold text-[#AAA39A] mb-3">المسارات التعليمية:</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {matchedCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-[#0C0B0A] border border-[#292521] hover:border-[#D6B978]/50 text-right transition-colors group flex items-center justify-between"
                >
                  <span className="text-xs font-bold text-[#F5F1E8] group-hover:text-[#D6B978]">
                    {cat.title}
                  </span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#AAA39A] group-hover:-translate-x-1 group-hover:text-[#D6B978] transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Courses Results */}
          <div>
            <div className="text-xs font-bold text-[#AAA39A] mb-3">
              {query.trim() === '' ? 'دورات مقترحة للأستاذ أحمد:' : `نتائج البحث (${matchedCourses.length}):`}
            </div>

            {matchedCourses.length === 0 ? (
              <div className="text-center py-8 text-[#AAA39A] text-xs">
                لم نجد نتائج مطابقة لبحثك. جرب البحث عن «النحو»، «البلاغة»، أو «الإعراب».
              </div>
            ) : (
              <div className="space-y-2.5">
                {matchedCourses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onSelectCourse(course.id);
                      onClose();
                    }}
                    className="w-full p-3.5 rounded-2xl bg-[#0C0B0A] border border-[#292521] hover:border-[#D6B978]/50 text-right flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#F5F1E8] group-hover:text-[#D6B978] transition-colors">
                          {course.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#181614] text-[#D6B978] border border-[#D6B978]/20">
                          {course.categoryArabic}
                        </span>
                      </div>
                      <p className="text-xs text-[#AAA39A] mt-1 line-clamp-1">{course.description}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 mr-4">
                      <span className="text-xs text-[#D6B978] font-semibold">{course.lessonsCount} درس</span>
                      <ArrowLeft className="w-4 h-4 text-[#AAA39A] group-hover:-translate-x-1 group-hover:text-[#D6B978] transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#0C0B0A] border-t border-[#292521] text-[11px] text-[#AAA39A] flex items-center justify-between">
          <span>أكاديمية الأستاذ أحمد محمود</span>
          <span>اضغط ESC أو أيقونة الإغلاق للخروج</span>
        </div>
      </motion.div>
    </div>
  );
};
