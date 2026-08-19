import React from 'react';
import { 
  ArrowRight, 
  Maximize2, 
  Keyboard, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Course } from '../../types';

interface LessonTopBarProps {
  course: Course;
  currentLessonTitle: string;
  currentLessonNumber: string;
  completedLessonsCount: number;
  totalLessonsCount: number;
  progressPercent: number;
  isFocusMode: boolean;
  onToggleFocusMode: () => void;
  onBackToCourse: () => void;
  onOpenShortcuts: () => void;
  onOpenCurriculumMobile?: () => void;
}

export const LessonTopBar: React.FC<LessonTopBarProps> = ({
  course,
  currentLessonTitle,
  currentLessonNumber,
  completedLessonsCount,
  totalLessonsCount,
  progressPercent,
  isFocusMode,
  onToggleFocusMode,
  onBackToCourse,
  onOpenShortcuts,
  onOpenCurriculumMobile,
}) => {
  return (
    <header 
      id="lesson-player-topbar"
      className="sticky top-0 z-40 bg-[#0C0B0A]/95 backdrop-blur-md border-b border-[#292521] px-4 sm:px-6 py-3 transition-colors select-none"
    >
      <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
        
        {/* Right (RTL): Back to Course + Title Navigation */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button
            id="player-back-to-course-btn"
            onClick={onBackToCourse}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/50 text-[#AAA39A] hover:text-[#F5F1E8] text-xs sm:text-sm font-semibold transition-all group shrink-0"
            title="الرجوع إلى صفحة الدورة"
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D6B978]" />
            <span className="hidden sm:inline">العودة للدورة</span>
          </button>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-[#292521] hidden sm:block shrink-0" />

          {/* Course & Current Lesson Context */}
          <div className="min-w-0 text-right">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-[#D6B978] truncate max-w-[140px] sm:max-w-[200px] hidden md:inline">
                {course.title}
              </span>
              <span className="text-[#777169] text-xs hidden md:inline">•</span>
              <span className="text-xs sm:text-sm font-bold text-[#F5F1E8] truncate">
                الدرس {currentLessonNumber}: {currentLessonTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Left (RTL): Course Progress + Focus Mode + Shortcuts + Avatar */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Mobile Curriculum Trigger */}
          {onOpenCurriculumMobile && (
            <button
              onClick={onOpenCurriculumMobile}
              className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#151311] border border-[#292521] text-xs font-medium text-[#D6B978]"
              title="محتوى الدورة"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>المنهج</span>
            </button>
          )}

          {/* Course Overall Progress Pill */}
          <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#151311] border border-[#292521]">
            <div className="text-right">
              <div className="flex items-center gap-1.5 justify-end">
                <span className="text-xs font-mono font-bold text-[#D6B978]">
                  {progressPercent}%
                </span>
                <span className="text-[11px] text-[#AAA39A]">مكتمل</span>
              </div>
            </div>

            {/* Micro Progress Bar */}
            <div className="w-16 h-1.5 rounded-full bg-[#181614] overflow-hidden">
              <div 
                className="h-full bg-gradient-to-l from-[#D6B978] to-[#E7D29A] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <span className="text-[10px] font-mono text-[#777169] hidden md:inline">
              ({completedLessonsCount}/{totalLessonsCount})
            </span>
          </div>

          {/* Keyboard Shortcuts Button */}
          <button
            id="player-shortcuts-btn"
            onClick={onOpenShortcuts}
            className="w-9 h-9 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 flex items-center justify-center text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
            title="اختصارات لوحة المفاتيح"
            aria-label="اختصارات لوحة المفاتيح"
          >
            <Keyboard className="w-4 h-4" />
          </button>

          {/* Focus Mode Button */}
          <button
            id="player-focus-mode-btn"
            onClick={onToggleFocusMode}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isFocusMode 
                ? 'bg-[#D6B978] text-[#070707] shadow-md shadow-[#D6B978]/20'
                : 'bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 text-[#AAA39A] hover:text-[#F5F1E8]'
            }`}
            title="تبديل وضع التركيز"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isFocusMode ? 'إنهاء التركيز' : 'وضع التركيز'}
            </span>
          </button>

          {/* Student Profile / Avatar */}
          <div className="flex items-center gap-2 pl-1 border-r border-[#292521] pr-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#651F2A] to-[#351117] border border-[#D6B978]/40 flex items-center justify-center text-xs font-bold text-[#F5F1E8] shadow-sm">
              ي
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
