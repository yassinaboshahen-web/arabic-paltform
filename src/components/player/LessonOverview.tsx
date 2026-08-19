import React from 'react';
import { Sparkles, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import { LessonDetailPayload } from '../../types';

interface LessonOverviewProps {
  lesson: LessonDetailPayload;
}

export const LessonOverview: React.FC<LessonOverviewProps> = ({ lesson }) => {
  return (
    <div 
      id="tab-lesson-overview"
      className="space-y-8 text-right select-none animate-fadeIn"
    >
      {/* 1. About the Lesson */}
      <div className="rounded-2xl bg-[#121110] border border-[#292521] p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-[#D6B978]" />
          <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            عن هذا الدرس
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#AAA39A] font-light leading-relaxed mb-4">
          {lesson.summaryText || lesson.description}
        </p>

        <div className="p-4 rounded-xl bg-[#151311] border border-[#292521] flex items-center gap-3 text-xs sm:text-sm text-[#F5F1E8]/90">
          <Sparkles className="w-4 h-4 text-[#D6B978] shrink-0" />
          <span>
            نصيحة الأستاذ: ركّز على فهم العلة والمعنى قبل حفظ المصطلحات الإعرابية.
          </span>
        </div>
      </div>

      {/* 2. Three Editorial Learning Objectives */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#D6B978]" />
            <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              أهداف الدرس
            </h3>
          </div>
          <span className="text-xs text-[#777169] font-mono">3 مخرجات رئيسية</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {lesson.objectives.map((obj) => (
            <div
              key={obj.orderNumber}
              className="p-5 rounded-2xl bg-[#121110] border border-[#292521] hover:border-[#D6B978]/35 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-mono font-black text-[#D6B978]">
                    {obj.orderNumber}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#292521] group-hover:bg-[#D6B978] transition-colors" />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-1.5">
                  {obj.title}
                </h4>

                <p className="text-xs text-[#AAA39A] font-light leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
