import React from 'react';
import { Star } from 'lucide-react';
import { CourseDetailData } from '../../types';

interface CourseStatsProps {
  courseDetails: CourseDetailData;
}

export const CourseStats: React.FC<CourseStatsProps> = ({ courseDetails }) => {
  const { course } = courseDetails;

  return (
    <section 
      id="course-stats" 
      aria-label="إحصائيات وحقائق الدورة"
      className="bg-[#0C0B0A] border-y border-[#292521] py-7 sm:py-9 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-x-reverse divide-[#292521]">
          
          {/* Stat 1: Lessons */}
          <div className="text-center flex flex-col items-center justify-center lg:px-6">
            <div className="flex items-baseline gap-2 justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Cairo',_sans-serif] tracking-tight text-[#F5F1E8]">
                {course.lessonsCount}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#D6B978]">
                درسًا
              </span>
            </div>
            <span className="text-xs text-[#AAA39A] mt-1 font-light">
              منهج منظم ومتكامل
            </span>
          </div>

          {/* Stat 2: Hours */}
          <div className="text-center flex flex-col items-center justify-center lg:px-6">
            <div className="flex items-baseline gap-2 justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Cairo',_sans-serif] tracking-tight text-[#F5F1E8]">
                {course.durationHours}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#D6B978]">
                ساعات
              </span>
            </div>
            <span className="text-xs text-[#AAA39A] mt-1 font-light">
              شرح وتطبيق عملي
            </span>
          </div>

          {/* Stat 3: Level */}
          <div className="text-center flex flex-col items-center justify-center lg:px-6">
            <div className="flex items-baseline gap-2 justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Cairo',_sans-serif] tracking-tight text-[#F5F1E8]">
                {course.level}
              </span>
              <span className="text-sm font-bold text-[#D6B978]">
                المستوى
              </span>
            </div>
            <span className="text-xs text-[#AAA39A] mt-1 font-light">
              مناسبة للجميع من الصفر
            </span>
          </div>

          {/* Stat 4: Rating */}
          <div className="text-center flex flex-col items-center justify-center lg:px-6">
            <div className="flex items-center gap-1.5 justify-center">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#D6B978] fill-[#D6B978]" />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Cairo',_sans-serif] tracking-tight text-[#D6B978]">
                {course.rating.toFixed(1)}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#F5F1E8] mr-1">
                التقييم
              </span>
            </div>
            <span className="text-xs text-[#AAA39A] mt-1 font-light">
              بناءً على تقييمات الطلاب
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
