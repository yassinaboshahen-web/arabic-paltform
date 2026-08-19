import React from 'react';
import { Play, Clock, BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { EnrolledCourseItem } from '../../types';

interface CourseProgressCardProps {
  course: EnrolledCourseItem;
  onContinueLesson: (lessonId: string, courseId: string) => void;
  onViewCourseDetails: (courseId: string) => void;
}

export const CourseProgressCard: React.FC<CourseProgressCardProps> = ({
  course,
  onContinueLesson,
  onViewCourseDetails,
}) => {
  return (
    <div 
      className="group relative rounded-2xl bg-[#121110] hover:bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl text-right select-none"
    >
      {/* Course Image Header with Gradient & Overlay Badges */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img 
          src={course.coverImage} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#651F2A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Category Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#0C0B0A]/85 backdrop-blur-md border border-[#292521] text-[11px] font-semibold text-[#D6B978]">
          {course.categoryArabic}
        </div>

        {/* Floating Play Button on Image Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => onContinueLesson(course.currentLesson.id, course.courseId)}
            className="w-12 h-12 rounded-full bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform"
            aria-label={`متابعة دراسة ${course.title}`}
          >
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Teacher */}
        <div className="space-y-1.5">
          <span className="text-[11px] text-[#AAA39A] font-light">
            الأستاذ: {course.teacher}
          </span>
          <h4 
            onClick={() => onViewCourseDetails(course.courseId)}
            className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] hover:text-[#D6B978] transition-colors line-clamp-2 cursor-pointer"
          >
            {course.title}
          </h4>
        </div>

        {/* Current Lesson Indicator */}
        <div className="p-3 rounded-xl bg-[#0C0B0A] border border-[#292521]/80 space-y-1">
          <div className="flex items-center justify-between text-[11px] text-[#AAA39A]">
            <span className="text-[#D6B978] font-medium">الدرس الحالي:</span>
            <span className="font-mono text-[#777169]">{course.currentLesson.durationLabel}</span>
          </div>
          <p className="text-xs font-semibold text-[#F5F1E8] truncate">
            {course.currentLesson.orderNumber}: {course.currentLesson.title}
          </p>
        </div>

        {/* Progress & Duration Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#AAA39A] font-mono">
              {course.completedLessons} / {course.totalLessons} درسًا
            </span>
            <span className="text-[#D6B978] font-mono font-bold">
              {course.progressPercent}%
            </span>
          </div>

          <div className="w-full h-1.5 rounded-full bg-[#181614] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-l from-[#D6B978] to-[#E7D29A] rounded-full"
              style={{ width: `${course.progressPercent}%` }}
            />
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onContinueLesson(course.currentLesson.id, course.courseId)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-[#D6B978]/10"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>متابعة الدرس</span>
          </button>

          <button
            onClick={() => onViewCourseDetails(course.courseId)}
            className="py-2.5 px-3 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] text-xs text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
            title="تفاصيل الدورة"
          >
            <BookOpen className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
