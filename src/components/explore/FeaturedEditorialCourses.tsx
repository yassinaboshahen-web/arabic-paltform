import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  BookOpen, 
  BarChart, 
  Star,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURED_COURSE, POPULAR_COURSES } from '../../data/coursesData';

interface FeaturedEditorialCoursesProps {
  onOpenCourse: (courseId: string) => void;
}

export const FeaturedEditorialCourses: React.FC<FeaturedEditorialCoursesProps> = ({
  onOpenCourse
}) => {
  const rhetoricCourse = POPULAR_COURSES.find(c => c.id === 'intro-rhetoric') || POPULAR_COURSES[1];
  const readingCourse = POPULAR_COURSES.find(c => c.id === 'reading-comprehension') || POPULAR_COURSES[2];

  return (
    <section 
      id="featured-editorial-courses" 
      className="py-14 sm:py-20 text-right"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D6B978] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مختارات الأستاذ أحمد</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
            اختيارات مميزة
          </h2>
          <p className="text-xs sm:text-sm text-[#AAA39A] font-light mt-1">
            دورات تستحق أن تبدأ بها.
          </p>
        </div>

        {/* Asymmetric Editorial Grid: Large Dominant Course (7 cols) + Two Supporting Stacked Courses (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* 1. Large Dominant Featured Master Course (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div 
              onClick={() => onOpenCourse(FEATURED_COURSE.id)}
              className="relative group flex-1 rounded-3xl bg-[#121110] border border-[#292521] hover:border-[#D6B978]/40 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Cinematic Deep Burgundy Ambient Lighting inside the card */}
              <div 
                className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#651F2A]/30 via-[#351117]/20 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" 
                aria-hidden="true"
              />
              <div 
                className="absolute bottom-0 left-0 w-64 h-48 bg-[#D6B978]/5 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true" 
              />

              {/* Decorative Arabic Calligraphy Watermark in Header */}
              <div 
                className="absolute top-4 left-6 text-7xl font-['Amiri',_serif] text-[#1D1B19] select-none pointer-events-none group-hover:text-[#25221F] transition-colors"
                aria-hidden="true"
              >
                ض
              </div>

              {/* Content Header */}
              <div className="p-6 sm:p-8 relative z-10">
                {/* Badge Row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#181614] border border-[#D6B978]/30 text-[#D6B978] shadow-sm">
                    {FEATURED_COURSE.badge || 'الدورة الرئيسية المختارة'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#151311] border border-[#292521] text-[#AAA39A]">
                    {FEATURED_COURSE.categoryArabic}
                  </span>
                  <div className="flex items-center gap-1 text-[#D6B978] text-xs font-bold mr-auto">
                    <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
                    <span>{FEATURED_COURSE.rating}</span>
                    <span className="text-[#777169] text-[11px] font-normal">({FEATURED_COURSE.studentsCount}+ طالب)</span>
                  </div>
                </div>

                {/* Big Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors leading-[1.3] mb-4">
                  {FEATURED_COURSE.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-base text-[#AAA39A] font-light leading-relaxed mb-6 max-w-xl">
                  {FEATURED_COURSE.description}
                </p>

                {/* Quick Topic Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {FEATURED_COURSE.topics.slice(0, 4).map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F5F1E8]/90 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B978] shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & Action Bar */}
              <div className="p-6 sm:p-8 pt-0 relative z-10 mt-auto">
                <div className="pt-6 border-t border-[#292521] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Stats Pill Group */}
                  <div className="flex items-center gap-4 text-xs text-[#AAA39A]">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-[#D6B978]" />
                      <span>{FEATURED_COURSE.lessonsCount} درسًا</span>
                    </div>
                    <span className="text-[#292521]">•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#D6B978]" />
                      <span>{FEATURED_COURSE.durationHours} ساعات</span>
                    </div>
                    <span className="text-[#292521]">•</span>
                    <div className="flex items-center gap-1.5">
                      <BarChart className="w-4 h-4 text-[#D6B978]" />
                      <span>{FEATURED_COURSE.level}</span>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCourse(FEATURED_COURSE.id);
                    }}
                    className="px-6 py-3 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 group/btn shadow-[0_2px_16px_rgba(214,185,120,0.22)] transition-all active:scale-95 shrink-0"
                  >
                    <span>استكشف الدورة</span>
                    <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

          {/* 2. Two Smaller Supporting Editorial Courses (5 cols stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Supporting Course 1: البلاغة */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => onOpenCourse(rhetoricCourse.id)}
              className="group flex-1 p-6 sm:p-7 rounded-3xl bg-[#121110] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div 
                className="absolute top-0 left-0 w-48 h-48 bg-[#651F2A]/15 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#181614] border border-[#D6B978]/25 text-[#D6B978]">
                    {rhetoricCourse.categoryArabic}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#D6B978] font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
                    <span>{rhetoricCourse.rating}</span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors mb-2">
                  {rhetoricCourse.title}
                </h4>

                <p className="text-xs text-[#AAA39A] font-light leading-relaxed mb-4 line-clamp-2">
                  {rhetoricCourse.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292521] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-[#AAA39A]">
                  <span>{rhetoricCourse.lessonsCount} درسًا</span>
                  <span>•</span>
                  <span>{rhetoricCourse.durationHours} ساعات</span>
                  <span>•</span>
                  <span>{rhetoricCourse.level}</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#181614] border border-[#292521] group-hover:border-[#D6B978] text-[#AAA39A] group-hover:text-[#D6B978] flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Supporting Course 2: القراءة والفهم */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => onOpenCourse(readingCourse.id)}
              className="group flex-1 p-6 sm:p-7 rounded-3xl bg-[#121110] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div 
                className="absolute top-0 right-0 w-48 h-48 bg-[#D6B978]/5 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#181614] border border-[#D6B978]/25 text-[#D6B978]">
                    {readingCourse.categoryArabic}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#D6B978] font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
                    <span>{readingCourse.rating}</span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors mb-2">
                  {readingCourse.title}
                </h4>

                <p className="text-xs text-[#AAA39A] font-light leading-relaxed mb-4 line-clamp-2">
                  {readingCourse.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292521] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-[#AAA39A]">
                  <span>{readingCourse.lessonsCount} درسًا</span>
                  <span>•</span>
                  <span>{readingCourse.durationHours} ساعات</span>
                  <span>•</span>
                  <span>{readingCourse.level}</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#181614] border border-[#292521] group-hover:border-[#D6B978] text-[#AAA39A] group-hover:text-[#D6B978] flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
