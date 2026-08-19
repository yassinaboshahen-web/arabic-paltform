import React from 'react';
import { Play, BookOpen } from 'lucide-react';

interface CurrentCoursesProps {
  onContinueCourse: (lessonId: string, courseId: string) => void;
  onViewCourseDetails: (courseId: string) => void;
}

export const CurrentCourses: React.FC<CurrentCoursesProps> = ({
  onContinueCourse,
  onViewCourseDetails,
}) => {
  return (
    <div 
      id="profile-current-courses"
      className="p-6 sm:p-7 rounded-2xl bg-[#121110] border border-[#292521] space-y-5 select-none text-right shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              دوراتي الحالية
            </h3>
          </div>
          <p className="text-xs text-[#AAA39A]">المسار الدراسي الفعّال حاليًا في خطتك الأكاديمية</p>
        </div>
        <span className="text-xs font-mono text-[#777169]">نظرة سريعة</span>
      </div>

      {/* Compact Course Profile Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#0C0B0A]/90 border border-[#292521] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[11px] text-[#777169] block">
              الأستاذ: أحمد محمود
            </span>
            <h4 
              onClick={() => onViewCourseDetails('master-grammar')}
              className="text-sm sm:text-base font-bold text-[#F5F1E8] hover:text-[#D6B978] transition-colors cursor-pointer"
            >
              النحو من الصفر إلى الإتقان
            </h4>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono text-[#AAA39A]">التقدم:</span>
            <span className="text-sm font-mono font-bold text-[#D6B978]">68%</span>
          </div>
        </div>

        {/* Thin Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full h-1.5 rounded-full bg-[#181614] overflow-hidden">
            <div 
              className="h-full bg-[#D6B978] rounded-full"
              style={{ width: '68%' }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-[#777169] font-mono">
            <span>١٦ من ٢٤ درسًا مكتملة</span>
            <span>الدرس التالي: أقسام الكلام</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-1 flex items-center justify-end gap-2">
          <button
            onClick={() => onContinueCourse('lesson-1-1', 'master-grammar')}
            className="px-5 py-2 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs transition-all flex items-center gap-2 shadow-md shadow-[#D6B978]/15 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>متابعة التعلم</span>
          </button>
        </div>
      </div>
    </div>
  );
};
