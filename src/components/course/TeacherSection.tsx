import React from 'react';
import { 
  Sparkles, 
  Quote, 
  CheckCircle, 
  Star, 
  Users, 
  Award,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import teacherImg from '../../assets/images/teacher_portrait_1786908267385.jpg';
import { CourseDetailData } from '../../types';

interface TeacherSectionProps {
  courseDetails: CourseDetailData;
  onExploreTeacher?: () => void;
}

export const TeacherSection: React.FC<TeacherSectionProps> = ({ 
  courseDetails,
  onExploreTeacher,
}) => {
  const { teacherName, teacherRole, teacherBio } = courseDetails;

  return (
    <section 
      id="about-the-teacher" 
      aria-label="تعلّم مع أستاذك"
      className="py-12 sm:py-16 bg-[#070707]"
    >
      <div className="rounded-3xl bg-[#121110] border border-[#292521] p-6 sm:p-10 lg:p-12 relative overflow-hidden text-right">
        
        {/* Subtle Burgundy & Champagne Ambient Lighting */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#651F2A]/18 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#D6B978]/07 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Right Column (RTL): Teacher Editorial Bio & Statements */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
              <span>الأكاديمية بإشراف أستاذ متخصص</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight mb-2">
              تعلّم مع أستاذك
            </h2>

            {/* Teacher Name & Title */}
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-black text-[#D6B978] font-['Cairo',_sans-serif]">
                {teacherName}
              </h3>
              <p className="text-sm text-[#AAA39A] font-light mt-0.5">
                {teacherRole || 'مدرس اللغة العربية'}
              </p>
            </div>

            {/* Large Statement Triad */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#151311] border border-[#292521] mb-6">
              <p className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] leading-relaxed">
                شرح واضح.
                <br />
                منهج منظم.
                <br />
                <span className="text-[#D6B978]">تعلم يصنع فرقًا.</span>
              </p>
            </div>

            {/* Direct Biography Statement */}
            <blockquote className="p-5 sm:p-6 rounded-2xl bg-[#0C0B0A] border border-[#292521] text-sm sm:text-base text-[#F5F1E8]/90 font-light leading-relaxed mb-6 italic relative">
              <div className="absolute -top-3 right-6 px-2 bg-[#0C0B0A] text-[#D6B978]">
                <Quote className="w-4 h-4 rotate-180" />
              </div>
              <p className="mt-1">
                "{teacherBio || 'أعمل على تبسيط اللغة العربية وتحويل القواعد والمفاهيم المعقدة إلى خطوات واضحة يمكن للطالب فهمها وتطبيقها.'}"
              </p>
            </blockquote>

            {/* Teacher Metric Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-[#151311] border border-[#292521]">
                <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-black text-[#D6B978] font-['Cairo',_sans-serif]">
                  <Award className="w-4 h-4 text-[#D6B978] shrink-0" />
                  <span>12+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#AAA39A] mt-0.5 font-medium">
                  سنة خبرة
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151311] border border-[#292521]">
                <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-black text-[#D6B978] font-['Cairo',_sans-serif]">
                  <Users className="w-4 h-4 text-[#D6B978] shrink-0" />
                  <span>8,500+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#AAA39A] mt-0.5 font-medium">
                  طالب
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151311] border border-[#292521]">
                <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-black text-[#D6B978] font-['Cairo',_sans-serif]">
                  <Star className="w-4 h-4 text-[#D6B978] fill-[#D6B978] shrink-0" />
                  <span>4.9</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#AAA39A] mt-0.5 font-medium">
                  تقييم الطلاب
                </div>
              </div>
            </div>

            {/* CTA Link: Learn more about teacher */}
            <div className="pt-2">
              <button
                id="teacher-section-cta-btn"
                onClick={onExploreTeacher}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D6B978] hover:text-[#E7D29A] transition-colors py-1 group"
              >
                <span>تعرّف على أستاذك ومنهجيته في التدريس</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>

          </div>

          {/* Left Column (RTL): Large Teacher Portrait Card */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
            
            {/* Ambient Shadow & Glow */}
            <div className="relative w-full max-w-[380px] rounded-3xl bg-[#151311] border border-[#292521] p-3.5 shadow-2xl overflow-hidden group">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0C0B0A]">
                <img 
                  src={teacherImg} 
                  alt={`الأستاذ ${teacherName}`} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/20 pointer-events-none" />

                {/* Overlaid Verified Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#0C0B0A]/90 backdrop-blur-md border border-[#292521] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                      الأستاذ {teacherName}
                    </h4>
                    <span className="text-[11px] text-[#D6B978] font-medium block">
                      مؤسس الأكاديمية والمحاضر الرئيسي
                    </span>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-[#D6B978]/10 text-[#D6B978] border border-[#D6B978]/30 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
