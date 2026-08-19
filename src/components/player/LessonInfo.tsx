import React from 'react';
import { 
  Sparkles, 
  Clock, 
  UserCheck, 
  Layers,
  GraduationCap 
} from 'lucide-react';
import { LessonDetailPayload } from '../../types';

interface LessonInfoProps {
  lesson: LessonDetailPayload;
}

export const LessonInfo: React.FC<LessonInfoProps> = ({ lesson }) => {
  return (
    <div 
      id="lesson-information"
      className="space-y-4 text-right pt-2"
    >
      {/* Meta Hierarchy Tag */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151311] border border-[#292521] text-[#D6B978] font-bold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>الدرس {lesson.orderNumber}</span>
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121110] border border-[#292521] text-[#AAA39A]">
          <Clock className="w-3.5 h-3.5 text-[#777169]" />
          <span>{lesson.durationLabel}</span>
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121110] border border-[#292521] text-[#AAA39A]">
          <UserCheck className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>{lesson.teacherName}</span>
        </span>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121110] border border-[#292521] text-[#777169]">
          <Layers className="w-3.5 h-3.5" />
          <span>{lesson.unitTitle}</span>
        </span>
      </div>

      {/* Main Lesson Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-snug">
        {lesson.title}
      </h1>

      {/* Editorial Description */}
      <p className="text-sm sm:text-base text-[#AAA39A] font-light leading-relaxed max-w-3xl">
        {lesson.description}
      </p>

    </div>
  );
};
