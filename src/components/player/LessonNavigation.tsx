import React from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Lock, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { CourseLesson } from '../../types';

interface LessonNavigationProps {
  prevLesson: CourseLesson | null;
  nextLesson: CourseLesson | null;
  onNavigateLesson: (lesson: CourseLesson) => void;
  isCompleted: boolean;
}

export const LessonNavigation: React.FC<LessonNavigationProps> = ({
  prevLesson,
  nextLesson,
  onNavigateLesson,
  isCompleted,
}) => {
  return (
    <section 
      id="lesson-navigation-section"
      className="space-y-6 pt-6 border-t border-[#292521] select-none"
    >
      
      {/* 1. Completion Milestone Banner if Completed */}
      {isCompleted && (
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#181614] via-[#151311] to-[#121110] border border-[#D6B978]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#D6B978]/20 border border-[#D6B978] flex items-center justify-center text-[#D6B978] shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                أحسنت! أكملت هذا الدرس بنجاح
              </h3>
              <p className="text-xs text-[#AAA39A]">
                تم حفظ تقدمك. هل أنت مستعد لمتابعة الرحلة مع الدرس التالي؟
              </p>
            </div>
          </div>

          {nextLesson && (
            <button
              onClick={() => onNavigateLesson(nextLesson)}
              className="px-5 py-2.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#D6B978]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>الانتقال إلى الدرس التالي</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* 2. Previous and Next Lesson Editorial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Previous Lesson Card (Right in RTL) */}
        {prevLesson ? (
          <button
            onClick={() => onNavigateLesson(prevLesson)}
            className="p-4 sm:p-5 rounded-2xl bg-[#121110] hover:bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all text-right group flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 text-xs text-[#AAA39A] group-hover:text-[#D6B978] mb-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              <span>الدرس السابق</span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] truncate">
              {prevLesson.orderNumber}: {prevLesson.title}
            </h4>
            <span className="text-[11px] font-mono text-[#777169] mt-2 block">
              {prevLesson.durationLabel}
            </span>
          </button>
        ) : (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121110]/40 border border-[#292521]/40 text-right opacity-40">
            <span className="text-xs text-[#777169] block mb-1">الدرس السابق</span>
            <span className="text-xs text-[#AAA39A]">هذا هو أول درس في المنهج</span>
          </div>
        )}

        {/* Next Lesson Card (Left in RTL - Stronger Visual Emphasis) */}
        {nextLesson ? (
          <button
            onClick={() => onNavigateLesson(nextLesson)}
            className="p-4 sm:p-5 rounded-2xl bg-[#151311] hover:bg-[#181614] border border-[#D6B978]/50 hover:border-[#D6B978] transition-all text-left group flex flex-col justify-between relative overflow-hidden shadow-lg"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-[#D6B978] to-[#E7D29A]" />

            <div className="flex items-center justify-between w-full mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D6B978]">
                <span>الدرس التالي</span>
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#D6B978]/15 text-[10px] font-mono text-[#D6B978]">
                متاح الآن
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] truncate text-right w-full">
              {nextLesson.orderNumber}: {nextLesson.title}
            </h4>

            <span className="text-[11px] font-mono text-[#AAA39A] mt-2 block text-right w-full">
              {nextLesson.durationLabel}
            </span>
          </button>
        ) : (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121110]/40 border border-[#292521]/40 text-right opacity-40">
            <span className="text-xs text-[#777169] block mb-1">الدرس التالي</span>
            <span className="text-xs text-[#AAA39A]">نهاية المنهج الدراسي</span>
          </div>
        )}

      </div>

    </section>
  );
};
