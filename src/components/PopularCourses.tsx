import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Star, 
  BarChart, 
  ArrowLeft, 
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { POPULAR_COURSES } from '../data/coursesData';

interface PopularCoursesProps {
  onOpenPreview: (courseId: string) => void;
  selectedCategoryFilter?: string | null;
}

export const PopularCourses: React.FC<PopularCoursesProps> = ({ 
  onOpenPreview,
  selectedCategoryFilter = 'all'
}) => {
  const [filter, setFilter] = useState<string>(selectedCategoryFilter || 'all');

  const filterTabs = [
    { id: 'all', label: 'جميع الدورات' },
    { id: 'grammar', label: 'النحو والإعراب' },
    { id: 'rhetoric', label: 'البلاغة والأدب' },
    { id: 'reading', label: 'القراءة والفهم' },
    { id: 'writing', label: 'الكتابة والتعبير' },
    { id: 'advanced', label: 'المستوى المتقدم' },
  ];

  const filteredCourses = filter === 'all' 
    ? POPULAR_COURSES 
    : POPULAR_COURSES.filter(c => c.category === filter);

  return (
    <section 
      id="popular-courses" 
      className="relative py-24 lg:py-32 bg-[#0C0B0A] border-t border-[#292521] overflow-hidden"
    >
      {/* Background Subtle Burgundy and Champagne ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#651F2A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#D6B978]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-right">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مناهج مدروسة وموثقة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
              الدورات الأكثر شعبية
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#AAA39A] max-w-md font-light leading-relaxed">
            دورات تدريبية متسلسلة تبدأ من الأساسيات وتتدرج معك حتى إتقان الفصاحة والبيان.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#D6B978] text-[#070707] shadow-[0_2px_12px_rgba(214,185,120,0.25)]'
                  : 'bg-[#151311] text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] border border-[#292521]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_10px_35px_rgba(101,31,42,0.25)] hover:-translate-y-1"
            >
              {/* Card Top Thumbnail Area with Abstract Luxury Motif */}
              <div className="relative h-44 w-full bg-gradient-to-br from-[#181614] to-[#0C0B0A] p-5 flex flex-col justify-between overflow-hidden border-b border-[#292521]">
                
                {/* Decorative Arabic Calligraphy Watermark in card */}
                <div className="absolute left-3 bottom-0 font-['Amiri',_serif] text-8xl opacity-[0.035] group-hover:opacity-[0.07] transition-opacity text-[#D6B978] select-none pointer-events-none">
                  {course.title.slice(0, 1)}
                </div>

                {/* Top Badge Row */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#121110] text-[#D6B978] border border-[#D6B978]/30">
                    {course.categoryArabic}
                  </span>

                  {course.badge && (
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#070707]/80 backdrop-blur-md text-[#D6B978] border border-[#D6B978]/20">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Meta on Thumbnail */}
                <div className="relative z-10 flex items-center justify-between text-xs text-[#AAA39A]">
                  <div className="flex items-center gap-1 text-[#D6B978] font-medium bg-[#070707]/70 px-2 py-0.5 rounded backdrop-blur-sm border border-[#292521]">
                    <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
                    <span>{course.rating}</span>
                  </div>
                  <span className="text-[11px] text-[#AAA39A]">
                    {course.studentsCount} طالب ملتحق
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-right">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-2 group-hover:text-[#D6B978] transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed mb-6 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div>
                  {/* Meta Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#0C0B0A] border border-[#292521] text-[11px] mb-6">
                    <div className="flex items-center gap-1.5 text-right">
                      <BookOpen className="w-3.5 h-3.5 text-[#D6B978]" />
                      <span className="text-[#F5F1E8] font-semibold">{course.lessonsCount} درس</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-right border-r border-[#292521] pr-2">
                      <Clock className="w-3.5 h-3.5 text-[#D6B978]" />
                      <span className="text-[#F5F1E8] font-semibold">{course.durationHours} س</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-right border-r border-[#292521] pr-2">
                      <BarChart className="w-3.5 h-3.5 text-[#D6B978]" />
                      <span className="text-[#F5F1E8] font-semibold">{course.level}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => onOpenPreview(course.id)}
                    className="w-full py-3 rounded-xl bg-[#181614] hover:bg-[#D6B978] border border-[#292521] hover:border-[#D6B978] text-xs sm:text-sm font-semibold text-[#F5F1E8] hover:text-[#070707] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>تفاصيل الدورة والتسجيل</span>
                    <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
