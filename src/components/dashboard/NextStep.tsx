import React from 'react';
import { Play, Clock, Sparkles } from 'lucide-react';

interface NextStepProps {
  courseTitle?: string;
  lessonTitle?: string;
  durationLabel?: string;
  onStartNextLesson?: (lessonId: string, courseId: string) => void;
}

export const NextStep: React.FC<NextStepProps> = ({
  courseTitle = 'النحو من الصفر إلى الإتقان',
  lessonTitle = 'أقسام الكلام',
  durationLabel = '18 دقيقة',
  onStartNextLesson,
}) => {
  return (
    <div 
      id="dashboard-next-step"
      className="p-5 rounded-2xl bg-gradient-to-r from-[#181614] via-[#151311] to-[#121110] border border-[#D6B978]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none shadow-xl text-right"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-2xl bg-[#D6B978]/15 border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978] shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#D6B978]">خطوتك التالية:</span>
          </div>

          <h4 className="text-sm sm:text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            {lessonTitle}
          </h4>

          <p className="text-xs text-[#AAA39A] font-light flex items-center gap-2">
            <span>{courseTitle}</span>
            <span className="text-[#777169]">•</span>
            <span className="flex items-center gap-1 font-mono text-[11px]">
              <Clock className="w-3 h-3 text-[#D6B978]" />
              <span>{durationLabel}</span>
            </span>
          </p>
        </div>
      </div>

      <button
        id="next-step-start-btn"
        onClick={() => onStartNextLesson?.('lesson-1-2', 'master-grammar')}
        className="px-6 py-2.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-[#D6B978]/15 shrink-0 cursor-pointer"
      >
        <Play className="w-3.5 h-3.5 fill-current" />
        <span>ابدأ الآن</span>
      </button>
    </div>
  );
};
