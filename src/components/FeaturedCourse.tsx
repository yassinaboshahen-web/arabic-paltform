import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  BookOpen, 
  BarChart, 
  Star, 
  ArrowLeft, 
  Sparkles,
  List
} from 'lucide-react';
import { motion } from 'motion/react';
import featuredBanner from '../assets/images/arabic_mastery_bg_1786908280756.jpg';
import { FEATURED_COURSE } from '../data/coursesData';

interface FeaturedCourseProps {
  onOpenPreview: (courseId: string) => void;
}

export const FeaturedCourse: React.FC<FeaturedCourseProps> = ({ onOpenPreview }) => {
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section 
      id="featured-course" 
      className="relative py-24 lg:py-32 bg-[#070707] border-y border-[#292521] overflow-hidden"
    >
      {/* Background Deep Burgundy Atmospheric Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#651F2A]/20 rounded-full blur-[160px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D6B978]/05 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-8 text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>الدورة الرئيسية المختارة • Masterclass</span>
          </div>

          <span className="text-xs font-medium text-[#AAA39A]">
            تحديث شامل 2026
          </span>
        </div>

        {/* Cinematic Streaming-Service Banner Showcase Container */}
        <div className="relative rounded-3xl bg-[#151311] border border-[#292521] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* Background Cinematic Visual with Vignette & Gradients */}
          <div className="relative min-h-[540px] lg:min-h-[580px] w-full flex items-center overflow-hidden">
            
            {/* Background Image Layer */}
            <div className="absolute inset-0">
              <img 
                src={featuredBanner} 
                alt="مسار النحو من الصفر إلى الإتقان" 
                className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 hover:scale-100"
              />
              {/* Complex dark gradient overlays with subtle burgundy touch */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#070707] via-[#0C0B0A]/95 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full p-8 sm:p-12 lg:p-16 max-w-3xl text-right">
              
              {/* Badge & Meta pills */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-md bg-[#D6B978] text-[#070707] text-xs font-bold shadow-md">
                  مسار النحو التأسيسي
                </span>
                <span className="px-3 py-1 rounded-md bg-[#181614]/90 border border-[#292521] text-xs font-medium text-[#D6B978] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D6B978]" />
                  <span>4.98 (3,420 طالب)</span>
                </span>
                <span className="px-3 py-1 rounded-md bg-[#181614]/90 border border-[#292521] text-xs font-medium text-[#F5F1E8]">
                  شهادة تخرج موثقة
                </span>
              </div>

              {/* Large Dominant Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-[1.2] mb-6">
                {FEATURED_COURSE.title}
              </h2>

              {/* Narrative Description */}
              <p className="text-base sm:text-lg text-[#AAA39A] leading-relaxed font-normal mb-8 max-w-2xl drop-shadow-sm">
                {FEATURED_COURSE.description}
              </p>

              {/* Course Meta Data Row */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-[#0C0B0A]/90 backdrop-blur-md border border-[#292521] max-w-lg mb-8">
                <div className="flex items-center gap-2.5 text-right">
                  <div className="w-9 h-9 rounded-xl bg-[#181614] flex items-center justify-center text-[#D6B978]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#AAA39A]">الدروس</div>
                    <div className="text-sm font-bold text-[#F5F1E8]">{FEATURED_COURSE.lessonsCount} درسًا</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-right border-r border-[#292521] pr-4">
                  <div className="w-9 h-9 rounded-xl bg-[#181614] flex items-center justify-center text-[#D6B978]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#AAA39A]">المدة الزمنية</div>
                    <div className="text-sm font-bold text-[#F5F1E8]">{FEATURED_COURSE.durationHours} ساعات</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-right border-r border-[#292521] pr-4">
                  <div className="w-9 h-9 rounded-xl bg-[#181614] flex items-center justify-center text-[#D6B978]">
                    <BarChart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#AAA39A]">المستوى</div>
                    <div className="text-sm font-bold text-[#F5F1E8]">{FEATURED_COURSE.level}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="featured-course-cta"
                  onClick={() => onOpenPreview(FEATURED_COURSE.id)}
                  className="px-8 py-4 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-base shadow-[0_4px_20px_rgba(214,185,120,0.2)] flex items-center gap-2 group transition-all"
                >
                  <span>استكشف الدورة</span>
                  <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-4 rounded-xl bg-[#181614] hover:bg-[#201D1A] border border-[#292521] hover:border-[#D6B978]/50 text-[#F5F1E8] font-medium text-sm flex items-center gap-2 transition-all backdrop-blur-sm"
                >
                  <Play className="w-4 h-4 text-[#D6B978] fill-[#D6B978]" />
                  <span>معاينة المقدمة (3 دقائق)</span>
                </button>

                <button
                  onClick={() => setShowCurriculum(!showCurriculum)}
                  className="px-4 py-4 rounded-xl text-xs font-medium text-[#AAA39A] hover:text-[#F5F1E8] transition-colors flex items-center gap-1.5"
                >
                  <List className="w-4 h-4" />
                  <span>{showCurriculum ? 'إخفاء الوحدات' : 'عرض محاور الدورة'}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Expandable Course Topics Drawer */}
          {showCurriculum && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-8 sm:p-10 bg-[#0C0B0A] border-t border-[#292521] text-right"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                  أهم المحاور والوحدات التعليمية في هذا المسار:
                </h4>
                <span className="text-xs text-[#D6B978] font-medium">
                  24 وحدة تدريبية شاملة
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {FEATURED_COURSE.topics.map((topic, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#151311] border border-[#292521] flex items-center gap-3 text-right"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#D6B978]/10 text-[#D6B978] text-xs font-bold flex items-center justify-center shrink-0 border border-[#D6B978]/20">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-medium text-[#F5F1E8] leading-relaxed">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

      </div>

      {/* Video Preview Teaser Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-3xl bg-[#121110] border border-[#292521] rounded-2xl overflow-hidden shadow-2xl p-6 text-right"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#292521] mb-4">
              <h3 className="text-base font-bold text-[#F5F1E8]">مقدمة مسار: {FEATURED_COURSE.title}</h3>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-[#181614] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Video Simulated Stage */}
            <div className="relative aspect-video rounded-xl bg-black overflow-hidden flex items-center justify-center border border-[#292521]">
              <img 
                src={featuredBanner} 
                alt="معاينة الفيديو" 
                className="absolute inset-0 w-full h-full object-cover opacity-50" 
              />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#D6B978] text-[#070707] flex items-center justify-center shadow-[0_0_30px_rgba(214,185,120,0.6)]">
                  <Play className="w-7 h-7 fill-[#070707] translate-x-0.5" />
                </div>
                <div>
                  <p className="text-base font-bold text-white mb-1">الدرس 01: لماذا نخطئ في الإعراب وكيف نضبط البداية؟</p>
                  <p className="text-xs text-[#AAA39A]">تقديم الأستاذ أحمد محمود • جودة 4K فائقة الوضوح</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-[#AAA39A]">المدة الكاملة للمقدمة: 3:45 دقيقة</span>
              <button 
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenPreview(FEATURED_COURSE.id);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] text-xs font-bold"
              >
                الانتقال لصفحة تفاصيل الدورة
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
