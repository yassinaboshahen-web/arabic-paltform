import React from 'react';
import { 
  Sparkles, 
  Quote, 
  CheckCircle, 
  ArrowLeft,
  MessageSquareQuote
} from 'lucide-react';
import teacherImg from '../assets/images/teacher_portrait_1786908267385.jpg';
import { TEACHER_MILESTONES } from '../data/coursesData';

interface TeacherStoryProps {
  onLearnMore?: () => void;
}

export const TeacherStory: React.FC<TeacherStoryProps> = () => {
  return (
    <section 
      id="teacher-story" 
      className="relative py-24 lg:py-36 bg-[#070707] overflow-hidden"
    >
      {/* Ambient Burgundy and Champagne Lighting & Glows */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#651F2A]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#D6B978]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column (RTL): Large Editorial Portrait & Visual Accents */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            
            {/* Ambient Burgundy Glow Behind Portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#651F2A]/35 via-[#351117]/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Portrait Frame */}
            <div className="relative w-full max-w-[440px] rounded-3xl bg-[#151311] border border-[#292521] p-3.5 shadow-2xl overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0C0B0A]">
                <img 
                  src={teacherImg} 
                  alt="الأستاذ أحمد محمود - مدرس اللغة العربية"
                  className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/25 pointer-events-none" />

                {/* Overlaid Quotes Emblem */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[#070707]/85 backdrop-blur-md border border-[#292521] flex items-center justify-center text-[#D6B978]">
                  <Quote className="w-5 h-5 rotate-180" />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0C0B0A]/95 backdrop-blur-md border border-[#292521] text-right">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                        أحمد محمود
                      </h4>
                      <p className="text-xs text-[#D6B978] font-medium mt-0.5">
                        مدرس اللغة العربية وباحث في اللسانيات
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#D6B978]/10 text-[#D6B978] border border-[#D6B978]/25 flex items-center justify-center font-bold text-xs">
                      12+
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="mt-3 p-3 rounded-xl bg-[#181614] border border-[#292521] flex items-center gap-3 text-right">
                <div className="w-8 h-8 rounded-lg bg-[#D6B978]/10 text-[#D6B978] flex items-center justify-center shrink-0">
                  <MessageSquareQuote className="w-4 h-4" />
                </div>
                <p className="text-[11px] text-[#AAA39A] leading-snug font-light">
                  "طريقة الأستاذ أحمد جعلتني أفهم الإعراب لأول مرة بعد سنوات من المعاناة."
                </p>
              </div>
            </div>
          </div>

          {/* Left Column (RTL): Dominant Narrative & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-right">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>تعلّم مع أستاذك</span>
            </div>

            {/* Main Editorial Statement in 3 Strong Sentences */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-[1.25] mb-6">
              <span className="block text-[#F5F1E8]">شرح واضح.</span>
              <span className="block text-[#D6B978]">
                منهج منظم.
              </span>
              <span className="block text-[#F5F1E8]/90">
                رحلة تعليمية تصنع فرقًا.
              </span>
            </h2>

            {/* Teacher Direct Biography Quote */}
            <blockquote className="relative p-6 rounded-2xl bg-[#151311] border border-[#292521] text-base sm:text-lg text-[#F5F1E8]/90 leading-relaxed font-light mb-8">
              <p className="relative z-10 italic">
                "أعمل على تبسيط اللغة العربية وتحويل القواعد والمفاهيم المعقدة إلى خطوات واضحة يمكن للطالب فهمها وتطبيقها بكل ثقة وسلاسة."
              </p>
            </blockquote>

            {/* Editorial Teacher Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#151311] border border-[#292521]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D6B978] font-['Cairo',_sans-serif]">
                  12+
                </div>
                <div className="text-xs font-medium text-[#F5F1E8] mt-1">
                  سنة خبرة
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#151311] border border-[#292521]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D6B978] font-['Cairo',_sans-serif]">
                  8,500+
                </div>
                <div className="text-xs font-medium text-[#F5F1E8] mt-1">
                  طالب متفوق
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#151311] border border-[#292521]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D6B978] font-['Cairo',_sans-serif]">
                  4.9
                </div>
                <div className="text-xs font-medium text-[#F5F1E8] mt-1">
                  تقييم الطلاب
                </div>
              </div>
            </div>

            {/* Milestones / Methodology Highlights */}
            <div className="space-y-3 mb-8">
              {TEACHER_MILESTONES.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0C0B0A] border border-[#292521]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#D6B978]/10 text-[#D6B978] border border-[#D6B978]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#F5F1E8]">{item.title}</h5>
                    <p className="text-[11px] text-[#AAA39A] mt-0.5 font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="#popular-courses"
                className="px-7 py-3.5 rounded-xl bg-[#181614] hover:bg-[#D6B978] border border-[#292521] hover:border-[#D6B978] text-sm font-bold text-[#F5F1E8] hover:text-[#070707] flex items-center gap-2 group transition-all"
              >
                <span>تعرّف على أستاذك ودوراته</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
