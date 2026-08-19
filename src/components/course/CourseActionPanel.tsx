import React from 'react';
import { 
  GraduationCap, 
  Bookmark, 
  Check, 
  Star, 
  Clock, 
  BookOpen, 
  Layers, 
  Sparkles,
  Infinity as InfinityIcon,
  PlayCircle,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { CourseDetailData } from '../../types';
import teacherImg from '../../assets/images/teacher_portrait_1786908267385.jpg';

interface CourseActionPanelProps {
  courseDetails: CourseDetailData;
  isSaved: boolean;
  onToggleSave: () => void;
  onStartLearning: () => void;
  onPreviewLesson?: () => void;
}

export const CourseActionPanel: React.FC<CourseActionPanelProps> = ({
  courseDetails,
  isSaved,
  onToggleSave,
  onStartLearning,
  onPreviewLesson,
}) => {
  const { course, teacherName } = courseDetails;

  return (
    <aside 
      id="course-action-panel"
      aria-label="لوحة الانضمام وبدء التعلم"
      className="sticky top-28 w-full rounded-2xl bg-[#151311] border border-[#292521] p-6 shadow-2xl space-y-6 relative overflow-hidden text-right"
    >
      {/* Top Champagne Accent Line */}
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6B978] to-transparent opacity-85" />

      {/* Academy Premium Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#292521]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#D6B978]">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>أكاديمية أحمد محمود</span>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#181614] border border-[#292521] text-[#AAA39A]">
          {course.categoryArabic}
        </span>
      </div>

      {/* Course Title & Teacher */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] leading-snug">
          {course.title}
        </h3>
        
        {/* Teacher Row */}
        <div className="flex items-center gap-2.5 pt-1">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#D6B978]/40 shrink-0 bg-[#0C0B0A]">
            <img src={teacherImg} alt={teacherName} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#F5F1E8] block">مع {teacherName}</span>
            <span className="text-[11px] text-[#AAA39A]">مدرس اللغة العربية</span>
          </div>
        </div>
      </div>

      {/* Rating & Facts Strip */}
      <div className="p-3.5 rounded-xl bg-[#0C0B0A] border border-[#292521] space-y-2.5">
        {/* Rating Row */}
        <div className="flex items-center justify-between text-xs pb-2 border-b border-[#292521]/60">
          <span className="text-[#AAA39A]">تقييم الدورة</span>
          <div className="flex items-center gap-1 font-bold text-[#F5F1E8]">
            <Star className="w-3.5 h-3.5 text-[#D6B978] fill-[#D6B978]" />
            <span className="text-[#D6B978] font-mono">{course.rating.toFixed(1)}</span>
            <span className="text-[10px] text-[#777169]">/ 5.0</span>
          </div>
        </div>

        {/* 3 Facts */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-lg bg-[#151311] border border-[#292521]/80">
            <span className="text-[11px] text-[#777169] block">الدروس</span>
            <span className="text-xs font-bold text-[#F5F1E8] mt-0.5 block">{course.lessonsCount} درسًا</span>
          </div>
          <div className="p-2 rounded-lg bg-[#151311] border border-[#292521]/80">
            <span className="text-[11px] text-[#777169] block">المدة</span>
            <span className="text-xs font-bold text-[#F5F1E8] mt-0.5 block">{course.durationHours} ساعات</span>
          </div>
          <div className="p-2 rounded-lg bg-[#151311] border border-[#292521]/80">
            <span className="text-[11px] text-[#777169] block">المستوى</span>
            <span className="text-xs font-bold text-[#D6B978] mt-0.5 block">{course.level}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2.5 pt-1">
        {/* Primary CTA: Start Learning */}
        <button
          id="action-panel-start-btn"
          onClick={onStartLearning}
          className="w-full py-4 px-5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-extrabold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(214,185,120,0.2)] hover:shadow-[0_6px_28px_rgba(214,185,120,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-[0.98] group"
        >
          <GraduationCap className="w-4 h-4 transition-transform group-hover:rotate-6" />
          <span>ابدأ التعلم</span>
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
        </button>

        {/* Secondary: Save Course */}
        <button
          id="action-panel-save-btn"
          onClick={onToggleSave}
          aria-label={isSaved ? 'تم حفظ الدورة' : 'حفظ الدورة'}
          className={`w-full py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] ${
            isSaved 
              ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]' 
              : 'bg-[#151311] border-[#292521] hover:border-[#D6B978]/60 text-[#F5F1E8] hover:bg-[#181614]'
          }`}
        >
          {isSaved ? (
            <>
              <Check className="w-4 h-4 text-[#D6B978]" />
              <span>تم حفظ الدورة في قائمتك</span>
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4 text-[#AAA39A]" />
              <span>حفظ الدورة</span>
            </>
          )}
        </button>

        {/* Optional Preview Lesson Link */}
        {onPreviewLesson && (
          <button
            id="action-panel-preview-btn"
            onClick={onPreviewLesson}
            className="w-full py-2 text-center text-xs font-medium text-[#AAA39A] hover:text-[#D6B978] transition-colors flex items-center justify-center gap-1.5 pt-2"
          >
            <PlayCircle className="w-3.5 h-3.5 text-[#D6B978]" />
            <span>مشاهدة الدرس التجريبي مجانًا</span>
          </button>
        )}
      </div>

      {/* Subtle Learning Philosophy Guarantee */}
      <div className="pt-3 border-t border-[#292521] space-y-2 text-xs text-[#AAA39A]">
        <p className="text-[11px] text-[#AAA39A] text-center font-light leading-relaxed">
          ابدأ في أي وقت وتابع تقدمك خطوة بخطوة.
        </p>
        <div className="flex items-center justify-between text-[10px] text-[#777169] pt-1">
          <span className="flex items-center gap-1">
            <InfinityIcon className="w-3 h-3 text-[#D6B978]" />
            وصول غير محدود
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#D6B978]" />
            إشراف الأستاذ أحمد محمود
          </span>
        </div>
      </div>
    </aside>
  );
};
