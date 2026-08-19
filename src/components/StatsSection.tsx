import React from 'react';
import { Award, Users, BookOpen, Star, Sparkles, CheckCircle } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section 
      id="academy-stats" 
      className="relative py-16 lg:py-24 bg-[#0C0B0A] border-y border-[#292521] overflow-hidden"
    >
      {/* Background subtle champagne & burgundy ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#651F2A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D6B978]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Editorial Framing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-right">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D6B978] tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>أرقام تتحدث عن جودة التعليم</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              أكاديمية بُنيت على الخبرة والنتائج الحقيقية
            </h2>
          </div>
          <p className="text-sm text-[#AAA39A] max-w-md font-light leading-relaxed">
            ليست مجرد مقاطع مصورة، بل تجربة تأسيسية متكاملة تصنع فارقاً حقيقياً في مستوى استيعابك وتعبيرك.
          </p>
        </div>

        {/* Large Editorial Metric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Experience */}
          <div className="relative p-8 rounded-2xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-[#D6B978] bg-[#D6B978]/10 px-2.5 py-1 rounded-full border border-[#D6B978]/20">
                خبرة متراكمة
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-[#D6B978] font-['Cairo',_sans-serif] tracking-tight mb-2">
              12+
            </div>
            <div className="text-base font-bold text-[#F5F1E8] mb-1">
              سنة خبرة
            </div>
            <p className="text-xs text-[#AAA39A] leading-relaxed font-light">
              أكثر من عقد في تدريس علوم العربية وتبسيط أدق قواعد النحو والصرف والبلاغة.
            </p>
          </div>

          {/* Card 2: Students */}
          <div className="relative p-8 rounded-2xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-[#D6B978] bg-[#D6B978]/10 px-2.5 py-1 rounded-full border border-[#D6B978]/20">
                مجتمع متعلم
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-[#D6B978] font-['Cairo',_sans-serif] tracking-tight mb-2">
              8,500+
            </div>
            <div className="text-base font-bold text-[#F5F1E8] mb-1">
              طالب وطالبة
            </div>
            <p className="text-xs text-[#AAA39A] leading-relaxed font-light">
              انضموا للأكاديمية وحققوا درجات متميزة وطلاقة لغوية مشهودة.
            </p>
          </div>

          {/* Card 3: Lessons */}
          <div className="relative p-8 rounded-2xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-[#D6B978] bg-[#D6B978]/10 px-2.5 py-1 rounded-full border border-[#D6B978]/20">
                محتوى سينمائي
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-[#D6B978] font-['Cairo',_sans-serif] tracking-tight mb-2">
              120+
            </div>
            <div className="text-base font-bold text-[#F5F1E8] mb-1">
              درس مُسجل
            </div>
            <p className="text-xs text-[#AAA39A] leading-relaxed font-light">
              شروحات مكثفة مركزة خالية من الحشو، مدعومة بتمارين وتطبيقات عملية مستمرة.
            </p>
          </div>

          {/* Card 4: Rating */}
          <div className="relative p-8 rounded-2xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] group-hover:scale-105 transition-transform">
                <Star className="w-6 h-6 fill-[#D6B978]" />
              </div>
              <span className="text-xs font-medium text-[#D6B978] bg-[#D6B978]/10 px-2.5 py-1 rounded-full border border-[#D6B978]/20">
                تقييم استثنائي
              </span>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-[#D6B978] font-['Cairo',_sans-serif] tracking-tight mb-2 flex items-center gap-2">
              <span>4.9</span>
              <span className="text-sm font-semibold text-[#AAA39A]">/ 5.0</span>
            </div>
            <div className="text-base font-bold text-[#F5F1E8] mb-1">
              تقييم الطلاب
            </div>
            <p className="text-xs text-[#AAA39A] leading-relaxed font-light">
              بناءً على آراء ومراجعات حقيقية تعكس أثر التجربة ورضا المتعلمين.
            </p>
          </div>

        </div>

        {/* Minimal Credibility Footnote */}
        <div className="mt-8 pt-6 border-t border-[#292521] flex flex-wrap items-center justify-between gap-4 text-xs text-[#AAA39A]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#D6B978]" />
            <span>محدث وفق أحدث المعايير الأكاديمية اللغوية لعام 2026</span>
          </div>
          <div className="text-[#D6B978] font-medium hover:underline cursor-pointer">
            استكشف آراء الطلاب وتجاربهم &larr;
          </div>
        </div>

      </div>
    </section>
  );
};
