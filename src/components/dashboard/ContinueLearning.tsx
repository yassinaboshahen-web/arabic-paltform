import React from 'react';
import { Play, BookOpen, Clock, Sparkles } from 'lucide-react';
import { EnrolledCourseItem } from '../../types';

interface ContinueLearningProps {
  course?: EnrolledCourseItem;
  onContinueLesson?: (lessonId: string, courseId: string) => void;
  onViewCourseDetails?: (courseId: string) => void;
}

export const ContinueLearning: React.FC<ContinueLearningProps> = ({
  course = {
    id: 'enrolled-master-grammar',
    courseId: 'master-grammar',
    title: 'النحو من الصفر إلى الإتقان',
    teacher: 'أحمد محمود',
    progressPercent: 68,
    completedLessons: 16,
    totalLessons: 24,
    totalDuration: '8 ساعات',
    durationRemaining: 'ساعتان متبقيتان',
    currentLesson: {
      id: 'lesson-1-1',
      title: 'مقدمة في علم النحو',
      orderNumber: 'الدرس ٠١',
      durationLabel: '١٢:٤٥ دقيقة',
    },
    nextLesson: {
      id: 'lesson-1-2',
      title: 'أقسام الكلام',
      orderNumber: 'الدرس ٠٢',
      durationLabel: '١٨:٣٠ دقيقة',
    },
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    categoryArabic: 'النحو والإعراب',
    lastAccessed: 'منذ ساعتين',
  },
  onContinueLesson,
  onViewCourseDetails,
}) => {
  return (
    <section 
      id="dashboard-continue-learning"
      className="relative rounded-3xl bg-gradient-to-b from-[#151311] via-[#121110] to-[#0C0B0A] border border-[#292521] overflow-hidden shadow-2xl select-none"
    >
      {/* Subtle Atmospheric Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#651F2A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D6B978]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D6B978] to-transparent opacity-80" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
        
        {/* Right in RTL: Course Info, Lesson Breadcrumbs, Progress, Actions */}
        <div className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1">
          
          {/* Section Header & Subtitle */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181614] border border-[#D6B978]/30 text-[#D6B978] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>تابع تعلمك</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] leading-tight">
              {course.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#AAA39A] font-light flex items-center gap-2">
              <span>بإشراف الأستاذ: {course.teacher}</span>
              <span className="text-[#777169]">•</span>
              <span>المسار الشامل</span>
            </p>
          </div>

          {/* Current & Next Lesson Card Breakdown */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0C0B0A]/80 border border-[#292521] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292521] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#D6B978] animate-pulse" />
                <span className="text-xs font-bold text-[#D6B978]">الدرس الحالي:</span>
                <span className="text-xs sm:text-sm font-semibold text-[#F5F1E8]">
                  {course.currentLesson.title}
                </span>
              </div>
              <span className="text-xs font-mono text-[#AAA39A] self-start sm:self-auto">
                {course.currentLesson.durationLabel}
              </span>
            </div>

            {course.nextLesson && (
              <div className="flex items-center justify-between text-xs text-[#AAA39A]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#777169]">الدرس القادم:</span>
                  <span className="truncate text-[#F5F1E8]/90 font-medium">
                    {course.nextLesson.title}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#777169] shrink-0 mr-2">
                  {course.nextLesson.durationLabel}
                </span>
              </div>
            )}
          </div>

          {/* Progress Bar & Academic Metadata (Thin Champagne Progress Bar) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-[#F5F1E8]">
                <span>نسبة الإنجاز:</span>
                <span className="text-[#D6B978] font-mono font-bold text-base">{course.progressPercent}%</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#AAA39A] font-mono">
                <span>{course.completedLessons} من {course.totalLessons} درسًا</span>
              </div>
            </div>

            {/* Thin Champagne Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-[#181614] border border-[#292521] overflow-hidden">
              <div 
                className="h-full bg-[#D6B978] rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(214,185,120,0.5)]"
                style={{ width: `${course.progressPercent}%` }}
                role="progressbar"
                aria-valuenow={course.progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`تقدم الدورة ${course.progressPercent}%`}
              />
            </div>
          </div>

          {/* Interactive Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              id="continue-learning-main-btn"
              onClick={() => onContinueLesson?.(course.currentLesson.id, course.courseId)}
              className="flex-1 py-3.5 px-6 rounded-2xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-xl shadow-[#D6B978]/20 hover:scale-[1.01] active:scale-[0.99] group cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-[#070707] text-[#D6B978] flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-3 h-3 fill-current translate-x-0.5" />
              </div>
              <span>متابعة التعلم</span>
            </button>

            <button
              id="continue-learning-details-btn"
              onClick={() => onViewCourseDetails?.(course.courseId)}
              className="py-3.5 px-5 rounded-2xl bg-[#181614] hover:bg-[#292521] border border-[#292521] hover:border-[#D6B978]/40 text-xs sm:text-sm font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#D6B978]" />
              <span>عرض الدورة</span>
            </button>
          </div>

        </div>

        {/* Left in RTL: Large Course Poster Composition */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-[4/3] border border-[#292521] shadow-2xl group">
            
            {/* Poster Image */}
            <img 
              src={course.coverImage} 
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#651F2A]/30 via-transparent to-[#070707]/80 pointer-events-none" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => onContinueLesson?.(course.currentLesson.id, course.courseId)}
                aria-label="تشغيل آخر درس"
                className="w-16 h-16 rounded-full bg-[#D6B978]/90 group-hover:bg-[#E7D29A] text-[#070707] flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 transform group-hover:scale-110 cursor-pointer"
              >
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Overlay Info Tag */}
            <div className="absolute bottom-3 right-3 left-3 p-3 rounded-xl bg-[#0C0B0A]/85 backdrop-blur-md border border-[#292521] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D6B978]" />
                <span className="text-[#F5F1E8] font-bold truncate">{course.categoryArabic}</span>
              </div>
              <span className="text-[#D6B978] font-mono font-semibold">{course.totalDuration} إجمالي المنهج</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
