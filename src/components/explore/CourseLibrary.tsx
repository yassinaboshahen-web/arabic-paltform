import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../../types';
import { CourseCard } from './CourseCard';

interface CourseLibraryProps {
  courses: Course[];
  isLoading?: boolean;
  onOpenCourse: (courseId: string) => void;
  onResetFilters: () => void;
}

export const CourseLibrary: React.FC<CourseLibraryProps> = ({
  courses,
  isLoading = false,
  onOpenCourse,
  onResetFilters
}) => {
  return (
    <section id="course-library-grid" className="py-10 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
            جميع الدورات
          </h2>
          <p className="text-xs sm:text-sm text-[#AAA39A] font-light mt-1">
            استكشف مكتبة الدورات التعليمية.
          </p>
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="h-64 rounded-3xl bg-[#151311] border border-[#292521] p-6 animate-pulse flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-20 h-5 bg-[#201D1A] rounded-full" />
                  <div className="w-3/4 h-6 bg-[#201D1A] rounded-lg" />
                  <div className="w-full h-10 bg-[#1A1816] rounded-lg" />
                </div>
                <div className="w-full h-8 bg-[#1A1816] rounded-xl" />
              </div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 sm:py-24 rounded-3xl bg-[#121110] border border-[#292521] text-center px-4 max-w-xl mx-auto my-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#181614] border border-[#292521] text-[#D6B978] flex items-center justify-center mx-auto mb-4">
              <SearchX className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-2">
              لم نجد ما تبحث عنه.
            </h3>
            <p className="text-xs sm:text-sm text-[#AAA39A] font-light max-w-sm mx-auto mb-6">
              جرّب تغيير كلمات البحث أو تعديل الفلاتر.
            </p>
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-semibold text-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة ضبط البحث</span>
            </button>
          </motion.div>
        ) : (
          /* Courses Grid */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onOpen={onOpenCourse}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};
