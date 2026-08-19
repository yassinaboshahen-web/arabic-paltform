import React from 'react';
import { X, Play, Clock, Sparkles, GraduationCap, CheckCircle } from 'lucide-react';
import { CourseLesson, CurriculumUnit } from '../../types';
import courseHeroImg from '../../assets/images/course_hero_visual_1786922380683.jpg';

interface LessonPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson?: CourseLesson | null;
  unit?: CurriculumUnit | null;
  courseTitle: string;
  onStartLearning: () => void;
  onOpenLesson?: (lessonId?: string) => void;
}

export const LessonPreviewModal: React.FC<LessonPreviewModalProps> = ({
  isOpen,
  onClose,
  lesson,
  unit,
  courseTitle,
  onStartLearning,
  onOpenLesson,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lesson-preview-title"
    >
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#151311] border border-[#292521] p-6 sm:p-8 shadow-2xl overflow-hidden text-right">
        
        {/* Close Button */}
        <button
          id="close-lesson-preview-btn"
          onClick={onClose}
          aria-label="إغلاق المعاينة"
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-[#181614] border border-[#292521] flex items-center justify-center text-[#AAA39A] hover:text-[#F5F1E8] hover:border-[#777169] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>معاينة درس تجريبي</span>
        </div>

        {/* Title */}
        <h3 id="lesson-preview-title" className="text-xl sm:text-2xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
          {lesson?.title || '01 — مقدمة في علم النحو وأهميته'}
        </h3>

        <p className="text-xs sm:text-sm text-[#AAA39A] mt-1 font-light">
          من {unit?.title || 'الوحدة الأولى — أساسيات النحو'} • {courseTitle}
        </p>

        {/* Video Player Mockup Container */}
        <div className="relative mt-6 rounded-2xl overflow-hidden aspect-video bg-[#070707] border border-[#292521] flex items-center justify-center group shadow-inner">
          <img 
            src={courseHeroImg} 
            alt="معاينة الدرس" 
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/30" />

          {/* Central Play Badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#D6B978] text-[#070707] flex items-center justify-center shadow-xl shadow-[#D6B978]/20 group-hover:scale-105 transition-transform mb-3">
              <Play className="w-7 h-7 fill-current mr-0.5" />
            </div>
            <span className="text-sm font-bold text-[#F5F1E8]">تسجيل استوديو عالي الوضوح 4K</span>
            <span className="text-xs text-[#AAA39A] mt-1">المدة: {lesson?.durationLabel || '12 دقيقة'}</span>
          </div>

          {/* Time indicator */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[11px] font-mono text-[#D6B978] border border-[#292521]">
            00:00 / {lesson?.durationLabel || '12:00'}
          </div>
        </div>

        {/* Lesson Points */}
        <div className="mt-6 p-4 rounded-xl bg-[#0C0B0A] border border-[#292521] space-y-2 text-xs text-[#AAA39A]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#D6B978] shrink-0" />
            <span>شرح مبسط ومباشر لمفهوم النحو وفلسفة الإعراب العربي</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#D6B978] shrink-0" />
            <span>أمثلة تطبيقية حية مع توضيح الفروق الدقيقة في المعنى</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            id="preview-modal-watch-full-btn"
            onClick={() => {
              onClose();
              if (onOpenLesson) {
                onOpenLesson(lesson?.id || 'lesson-1-1');
              } else {
                onStartLearning();
              }
            }}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D6B978]/15"
          >
            <Play className="w-4 h-4 fill-current translate-x-0.5" />
            <span>مشاهدة هذا الدرس في المشغل السينمائي</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#181614] border border-[#292521] text-xs font-semibold text-[#AAA39A] hover:text-[#F5F1E8]"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
