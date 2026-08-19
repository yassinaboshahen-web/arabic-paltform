import React from 'react';
import { 
  Sparkles, 
  Star, 
  Clock, 
  BookOpen, 
  Layers, 
  Play, 
  Bookmark, 
  Check, 
  GraduationCap,
  ArrowLeft
} from 'lucide-react';
import { CourseDetailData } from '../../types';
import courseHeroImg from '../../assets/images/course_hero_visual_1786922380683.jpg';
import teacherImg from '../../assets/images/teacher_portrait_1786908267385.jpg';

interface CourseHeroProps {
  courseDetails: CourseDetailData;
  isSaved: boolean;
  onToggleSave: () => void;
  onStartLearning: () => void;
  onPreviewLesson?: () => void;
}

export const CourseHero: React.FC<CourseHeroProps> = ({
  courseDetails,
  isSaved,
  onToggleSave,
  onStartLearning,
  onPreviewLesson,
}) => {
  const { course, subtitle, heroBadge, teacherName } = courseDetails;

  // Title accenting logic: If title is "النحو من الصفر إلى الإتقان", make "النحو من الصفر" ivory and "إلى الإتقان" champagne accent
  const renderEditorialTitle = () => {
    if (course.title === 'النحو من الصفر إلى الإتقان') {
      return (
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-[1.25] text-right">
          النحو من الصفر{' '}
          <span className="text-[#D6B978] font-extrabold relative inline-block">
            إلى الإتقان
          </span>
        </h1>
      );
    }

    return (
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-[1.25] text-right">
        {course.title}
      </h1>
    );
  };

  return (
    <section 
      id="course-hero" 
      aria-label="مقدمة الدورة"
      className="relative bg-[#070707] pt-8 pb-14 lg:pt-14 lg:pb-20 overflow-hidden"
    >
      {/* Subtle Burgundy & Champagne Atmospheric Glows */}
      <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-[#651F2A]/18 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-4 left-12 w-[420px] h-[420px] bg-[#D6B978]/06 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop 2-Column Asymmetric Grid (RTL: Text on Right, Visual on Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column (RTL): Course Main Info & Actions */}
          <div className="lg:col-span-7 text-right flex flex-col items-start order-2 lg:order-1">
            
            {/* Label with Small Champagne Line & Refined Badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1.5px] bg-[#D6B978] rounded-full inline-block" aria-hidden="true" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
                <span>{heroBadge || 'دورة مميزة'}</span>
                <span className="w-1 h-1 rounded-full bg-[#777169]" />
                <span className="text-[#AAA39A] font-normal">{course.categoryArabic}</span>
              </div>
            </div>

            {/* Course Title */}
            <div className="mb-4">
              {renderEditorialTitle()}
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#D6B978] font-medium font-['Cairo',_sans-serif] leading-relaxed mb-3">
              {subtitle || 'رحلة متكاملة لفهم النحو وتطبيقه بثقة.'}
            </p>

            {/* Description with Generous Breathing Room */}
            <p className="text-sm sm:text-base text-[#AAA39A] font-light leading-relaxed mb-7 max-w-2xl">
              {course.longDescription || course.description}
            </p>

            {/* Course Metadata Strip with Subtle Dividers Rather Than Cards */}
            <div className="flex flex-wrap items-center gap-y-2 py-3 px-4 rounded-2xl bg-[#0C0B0A]/90 border border-[#292521] mb-7 divide-x divide-x-reverse divide-[#292521]/80">
              {/* Rating */}
              <div className="flex items-center gap-1.5 pl-4 text-xs sm:text-sm font-bold text-[#F5F1E8]">
                <Star className="w-4 h-4 text-[#D6B978] fill-[#D6B978]" />
                <span className="text-[#D6B978] font-mono font-black">{course.rating.toFixed(1)}</span>
                <span className="text-[#777169] text-xs font-light">({course.studentsCount.toLocaleString('ar-EG')} طالب)</span>
              </div>

              {/* Lessons Count */}
              <div className="flex items-center gap-1.5 px-4 text-xs sm:text-sm text-[#AAA39A]">
                <BookOpen className="w-3.5 h-3.5 text-[#D6B978]" />
                <span className="text-[#F5F1E8] font-bold">{course.lessonsCount}</span>
                <span>درسًا</span>
              </div>

              {/* Duration Hours */}
              <div className="flex items-center gap-1.5 px-4 text-xs sm:text-sm text-[#AAA39A]">
                <Clock className="w-3.5 h-3.5 text-[#D6B978]" />
                <span className="text-[#F5F1E8] font-bold">{course.durationHours}</span>
                <span>ساعات</span>
              </div>

              {/* Level */}
              <div className="flex items-center gap-1.5 pr-4 text-xs sm:text-sm text-[#AAA39A]">
                <Layers className="w-3.5 h-3.5 text-[#D6B978]" />
                <span className="text-[#F5F1E8] font-medium">{course.level}</span>
              </div>
            </div>

            {/* Teacher Affiliation Line */}
            <div className="flex items-center gap-3 mb-8 text-right">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#D6B978]/40 bg-[#151311] shrink-0">
                <img 
                  src={teacherImg} 
                  alt={teacherName} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs text-[#AAA39A] font-light">بإشراف وتقديم</span>
                <div className="text-sm font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] flex items-center gap-2">
                  <span>الأستاذ {teacherName}</span>
                  <span className="w-1 h-1 rounded-full bg-[#777169]" />
                  <span className="text-xs text-[#AAA39A] font-light">مدرس اللغة العربية</span>
                </div>
              </div>
            </div>

            {/* Action Buttons (Primary CTA + Secondary Save CTA) */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                id="hero-start-learning-btn"
                onClick={onStartLearning}
                className="flex-1 sm:flex-initial px-8 py-4 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-extrabold text-base transition-all duration-300 shadow-[0_4px_24px_rgba(214,185,120,0.22)] hover:shadow-[0_6px_32px_rgba(214,185,120,0.32)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group active:scale-[0.98]"
              >
                <GraduationCap className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                <span>ابدأ التعلم</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              {/* Secondary CTA: Save Course */}
              <button
                id="hero-save-course-btn"
                onClick={onToggleSave}
                aria-label={isSaved ? 'تم حفظ الدورة' : 'حفظ الدورة'}
                className={`px-6 py-4 rounded-xl border text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] ${
                  isSaved 
                    ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]' 
                    : 'bg-[#151311] border-[#292521] hover:border-[#D6B978]/60 text-[#F5F1E8] hover:bg-[#181614]'
                }`}
              >
                {isSaved ? (
                  <>
                    <Check className="w-4 h-4 text-[#D6B978]" />
                    <span>تم حفظ الدورة</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4 text-[#AAA39A]" />
                    <span>حفظ الدورة</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Left Column (RTL): Large Cinematic Course Visual */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
            
            {/* Deep Burgundy Glow Behind Visual */}
            <div className="absolute -inset-4 bg-gradient-to-bl from-[#651F2A]/35 via-[#351117]/25 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Frame Container */}
            <div className="relative w-full max-w-[480px] rounded-3xl bg-[#151311] border border-[#292521] p-3.5 shadow-2xl overflow-hidden group">
              
              {/* Artwork Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#0C0B0A]">
                <img 
                  src={courseHeroImg} 
                  alt={course.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Gradient Overlays & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/25 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[#651F2A]/10 mix-blend-multiply pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-[#070707]/90 backdrop-blur-md border border-[#292521] text-xs font-bold text-[#D6B978] flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
                  <span>دورة مميزة</span>
                </div>

                {/* Interactive Preview Play Button Overlay */}
                {onPreviewLesson && (
                  <button
                    id="hero-visual-preview-btn"
                    onClick={onPreviewLesson}
                    aria-label="مشاهدة الدرس التجريبي"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#070707]/85 hover:bg-[#D6B978] text-[#D6B978] hover:text-[#070707] border border-[#D6B978]/40 hover:border-[#D6B978] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-105 group/btn"
                  >
                    <Play className="w-6 h-6 fill-current mr-0.5" />
                  </button>
                )}

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0C0B0A]/90 backdrop-blur-md border border-[#292521] flex items-center justify-between text-right">
                  <div>
                    <span className="text-[11px] text-[#AAA39A] block">الدرس الأول متاح للمعاينة</span>
                    <span className="text-xs font-bold text-[#F5F1E8]">01 — مقدمة في علم النحو</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D6B978] px-2.5 py-1 rounded bg-[#181614] border border-[#292521]">
                    12:00 د
                  </span>
                </div>

              </div>

              {/* Caption Under Visual */}
              <div className="mt-3.5 px-2 py-0.5 flex items-center justify-between text-xs text-[#777169]">
                <span>أكاديمية الأستاذ أحمد محمود</span>
                <span className="text-[#AAA39A] font-medium">تسجيل سينمائي عالي الوضوح 4K</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

