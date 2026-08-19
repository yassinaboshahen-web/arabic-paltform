import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  BarChart, 
  Star, 
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  onOpen: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onOpen }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={() => onOpen(course.id)}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg text-right"
    >
      {/* Subtle image/card background aura */}
      <div 
        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#651F2A]/15 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-32 h-32 bg-[#D6B978]/5 rounded-full blur-xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative Calligraphy glyph in corner */}
      <div 
        className="absolute top-3 left-4 text-4xl font-['Amiri',_serif] text-[#201D1A] group-hover:text-[#2A2622] select-none pointer-events-none transition-colors"
        aria-hidden="true"
      >
        ض
      </div>

      {/* Card Header & Content */}
      <div className="p-6 sm:p-7 relative z-10">
        {/* Badge & Category Row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#181614] border border-[#292521] group-hover:border-[#D6B978]/30 text-[#D6B978] transition-colors">
              {course.categoryArabic}
            </span>
            {course.badge && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#AAA39A] bg-[#121110] px-2.5 py-0.5 rounded-full border border-[#292521]">
                <Sparkles className="w-3 h-3 text-[#D6B978]" />
                <span>{course.badge}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[#D6B978] text-xs font-bold bg-[#121110] px-2 py-0.5 rounded-md border border-[#292521]">
            <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
            <span>{course.rating}</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors mb-2.5 leading-snug">
          {course.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed mb-6 line-clamp-2">
          {course.description}
        </p>
      </div>

      {/* Card Footer Meta & Arrow */}
      <div className="p-6 sm:p-7 pt-0 relative z-10 mt-auto">
        <div className="pt-4 border-t border-[#292521] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-[#AAA39A] font-light">
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#D6B978]" />
              <span>{course.lessonsCount} درسًا</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D6B978]" />
              <span>{course.durationHours} ساعات</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <BarChart className="w-3.5 h-3.5 text-[#D6B978]" />
              <span>{course.level}</span>
            </div>
          </div>

          <div className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] group-hover:border-[#D6B978] text-[#AAA39A] group-hover:text-[#D6B978] flex items-center justify-center transition-all duration-200 shadow-sm">
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
