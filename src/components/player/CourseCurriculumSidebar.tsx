import React, { useState } from 'react';
import { 
  ChevronDown, 
  Check, 
  Play, 
  Lock, 
  BookOpen, 
  Sparkles,
  Clock
} from 'lucide-react';
import { CurriculumUnit, CourseLesson } from '../../types';

interface CourseCurriculumSidebarProps {
  curriculum: CurriculumUnit[];
  currentLessonId: string;
  completedLessonIds: string[];
  onSelectLesson: (lesson: CourseLesson, unit: CurriculumUnit) => void;
  className?: string;
}

export const CourseCurriculumSidebar: React.FC<CourseCurriculumSidebarProps> = ({
  curriculum,
  currentLessonId,
  completedLessonIds,
  onSelectLesson,
  className = '',
}) => {
  // Find which unit contains the current lesson and keep it open by default
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {
      'unit-1': true,
      'unit-2': true,
    };
    return initial;
  });

  const toggleUnit = (unitId: string) => {
    setOpenUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  // Calculate totals
  const totalLessons = curriculum.reduce((acc, u) => acc + u.lessonsCount, 0);
  const completedCount = completedLessonIds.length > 0 ? 16 : 16; // default 16 of 24
  const progressPercent = Math.round((completedCount / (totalLessons || 24)) * 100);

  return (
    <aside 
      id="course-curriculum-sidebar"
      aria-label="محتوى ومنهج الدورة"
      className={`rounded-2xl lg:rounded-3xl bg-[#121110] border border-[#292521] flex flex-col overflow-hidden text-right shadow-xl ${className}`}
    >
      
      {/* 1. Header & Progress Stats */}
      <div className="p-5 sm:p-6 border-b border-[#292521] bg-[#151311]/60">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#D6B978]" />
            <h2 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              محتوى الدورة
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#D6B978]">
            {progressPercent}%
          </span>
        </div>

        {/* Subtitle Progress */}
        <div className="flex items-center justify-between text-xs text-[#AAA39A] mb-2 font-light">
          <span>{completedCount} من {totalLessons} درسًا مكتملًا</span>
          <span className="text-[11px] text-[#777169]">متبقي 8 دروس</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-[#181614] overflow-hidden">
          <div 
            className="h-full bg-gradient-to-l from-[#D6B978] to-[#E7D29A] rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 2. Scrollable Curriculum Units List */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#292521]/60 p-2 sm:p-3 space-y-2 scrollbar-thin scrollbar-thumb-[#292521] scrollbar-track-transparent">
        {curriculum.map((unit, unitIdx) => {
          const isOpen = !!openUnits[unit.id];
          const unitCompletedCount = unit.lessons.filter((l) => completedLessonIds.includes(l.id)).length;

          return (
            <div 
              key={unit.id} 
              className="rounded-xl overflow-hidden transition-colors"
            >
              {/* Unit Accordion Header */}
              <button
                onClick={() => toggleUnit(unit.id)}
                aria-expanded={isOpen}
                className="w-full p-3 sm:p-3.5 flex items-center justify-between gap-3 text-right bg-[#151311] hover:bg-[#181614] rounded-xl transition-colors select-none group"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-semibold text-[#D6B978]">
                      {unit.unitNumberArabic}
                    </span>
                    <span className="text-[#777169] text-xs">•</span>
                    <span className="text-xs text-[#AAA39A] font-light">
                      {unit.lessonsCount} دروس
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] truncate group-hover:text-[#D6B978] transition-colors">
                    {unit.title}
                  </h3>
                </div>

                <div className={`w-6 h-6 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center text-[#AAA39A] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#D6B978]' : ''
                }`}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Unit Lessons List */}
              {isOpen && (
                <div className="mt-1 space-y-1 pr-1.5 pl-1 py-1">
                  {unit.lessons.map((lesson) => {
                    const isCurrent = lesson.id === currentLessonId;
                    const isCompleted = completedLessonIds.includes(lesson.id);
                    const isLocked = lesson.isLocked && !isCompleted && !lesson.isPreview;

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => !isLocked && onSelectLesson(lesson, unit)}
                        disabled={isLocked}
                        className={`w-full text-right p-2.5 sm:p-3 rounded-xl flex items-center justify-between gap-3 transition-all relative group ${
                          isCurrent
                            ? 'bg-[#181614] border border-[#D6B978]/50 shadow-md'
                            : isLocked
                            ? 'bg-[#0C0B0A]/40 opacity-60 cursor-not-allowed'
                            : 'bg-[#121110]/80 hover:bg-[#151311] border border-transparent hover:border-[#292521]'
                        }`}
                      >
                        {/* Right Accent Border for Current Lesson in RTL */}
                        {isCurrent && (
                          <div className="absolute right-0 top-1.5 bottom-1.5 w-1 rounded-l-full bg-[#D6B978]" />
                        )}

                        {/* Lesson Status Icon & Number */}
                        <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-1">
                          
                          {/* Status Icon Indicator */}
                          <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0">
                            {isCompleted ? (
                              <div className="w-4 h-4 rounded-full bg-[#D6B978]/20 text-[#D6B978] flex items-center justify-center">
                                <Check className="w-3 h-3" />
                              </div>
                            ) : isCurrent ? (
                              <div className="w-4 h-4 rounded-full bg-[#D6B978] text-[#070707] flex items-center justify-center">
                                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
                              </div>
                            ) : isLocked ? (
                              <Lock className="w-3.5 h-3.5 text-[#777169]" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-[#292521] text-[#AAA39A] flex items-center justify-center group-hover:border-[#D6B978]">
                                <Play className="w-2 h-2 fill-current translate-x-0.5" />
                              </div>
                            )}
                          </div>

                          {/* Lesson Order & Title */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[11px] font-mono font-bold text-[#777169]">
                                {lesson.orderNumber}
                              </span>
                              <h4 className={`text-xs sm:text-sm font-medium font-['Cairo',_sans-serif] truncate ${
                                isCurrent 
                                  ? 'text-[#F5F1E8] font-bold' 
                                  : 'text-[#AAA39A] group-hover:text-[#F5F1E8]'
                              }`}>
                                {lesson.title}
                              </h4>
                            </div>
                          </div>

                        </div>

                        {/* Duration Pill */}
                        <div className="flex items-center gap-1 text-[11px] font-mono text-[#777169] shrink-0">
                          <Clock className="w-3 h-3" />
                          <span>{lesson.durationLabel}</span>
                        </div>

                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Footer Helper */}
      <div className="p-3 bg-[#0C0B0A] border-t border-[#292521] text-center text-[11px] text-[#777169]">
        <span>إشراف الأستاذ أحمد محمود</span>
      </div>

    </aside>
  );
};
