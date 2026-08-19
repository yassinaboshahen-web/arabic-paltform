import React from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Star, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { RECOMMENDED_COURSES } from '../../data/coursesData';

interface RecommendationSectionProps {
  onOpenCourse: (courseId: string) => void;
}

export const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  onOpenCourse
}) => {
  return (
    <section 
      id="recommendation-section" 
      className="py-14 sm:py-20 bg-[#0C0B0A] border-y border-[#292521] text-right"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D6B978] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ترشيحات مخصصة للبداية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
              قد يناسبك أيضًا
            </h2>
            <p className="text-xs sm:text-sm text-[#AAA39A] font-light mt-1">
              إذا كنت تبدأ رحلتك في اللغة العربية، نوصي بالبدء بهذه الدورات.
            </p>
          </div>
        </div>

        {/* Horizontal Stack of 3 Distinct Recommended Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {RECOMMENDED_COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => onOpenCourse(course.id)}
              className="group p-6 rounded-3xl bg-[#121110] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle aura */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-[#651F2A]/10 rounded-full blur-xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#181614] border border-[#D6B978]/30 text-[#D6B978]">
                    {course.categoryArabic}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#D6B978] font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors mb-2 leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs text-[#AAA39A] font-light leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Key feature bullet */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#F5F1E8]/80 mb-5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B978] shrink-0" />
                  <span className="truncate">{course.topics[0]}</span>
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="pt-4 border-t border-[#292521] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-[#AAA39A] font-light">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-[#D6B978]" />
                    {course.lessonsCount} درس
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D6B978]" />
                    {course.durationHours} س
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-[#D6B978] group-hover:text-[#E7D29A] transition-colors">
                  <span>تفاصيل المسار</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
