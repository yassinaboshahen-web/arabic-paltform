import React from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="footer" 
      className="bg-[#0C0B0A] border-t border-[#292521] text-right pt-16 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#292521]">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#151311] border border-[#292521] flex items-center justify-center shadow-inner">
                <span className="font-['Amiri',_serif] text-xl font-bold text-[#D6B978]">
                  ض
                </span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                  أكاديمية أحمد محمود
                </span>
                <p className="text-xs text-[#D6B978]">لتعليم وإتقان اللغة العربية</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#AAA39A] leading-relaxed max-w-sm mb-6 font-light">
              منصة تعليمية رقمية متخصصة تهدف إلى تبسيط قواعد النحو والبلاغة وصناعة جيل فصيح وواثق في لغته وهويته.
            </p>

            {/* Teacher Direct Statement */}
            <div className="p-3.5 rounded-xl bg-[#151311] border border-[#292521] text-xs text-[#AAA39A]">
              <span className="text-[#D6B978] font-semibold">بإشراف وإعداد: </span>
              <span>الأستاذ أحمد محمود • مدرس اللغة العربية وباحث لساني</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#F5F1E8] uppercase tracking-wider mb-4 font-['Cairo',_sans-serif]">
              أقسام المنصة
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAA39A]">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="hover:text-[#D6B978] transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('popular-courses')} 
                  className="hover:text-[#D6B978] transition-colors"
                >
                  استكشف الدورات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('learning-journey')} 
                  className="hover:text-[#D6B978] transition-colors"
                >
                  المسارات التعليمية (تعلّمي)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('teacher-story')} 
                  className="hover:text-[#D6B978] transition-colors"
                >
                  عن الأستاذ أحمد
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ai-teaser')} 
                  className="hover:text-[#D6B978] transition-colors flex items-center gap-1.5"
                >
                  <span>المساعد الذكي</span>
                  <span className="text-[10px] text-[#D6B978] bg-[#D6B978]/10 px-1 rounded border border-[#D6B978]/20">AI</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Support (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#F5F1E8] uppercase tracking-wider mb-4 font-['Cairo',_sans-serif]">
              الدعم والمجتمع
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAA39A]">
              <li>
                <a href="#footer" className="hover:text-[#D6B978] transition-colors">
                  مجتمع الطلاب
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-[#D6B978] transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-[#D6B978] transition-colors">
                  مركز المساعدة
                </a>
              </li>
              <li>
                <a href="mailto:contact@ahmedmahmoud-academy.com" className="hover:text-[#D6B978] transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Follow (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#F5F1E8] uppercase tracking-wider mb-4 font-['Cairo',_sans-serif]">
              تابع الأستاذ
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="#footer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-xl bg-[#151311] border border-[#292521] hover:border-[#D6B978] text-[#AAA39A] hover:text-[#D6B978] flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#151311] border border-[#292521] hover:border-[#D6B978] text-[#AAA39A] hover:text-[#D6B978] flex items-center justify-center transition-colors font-bold text-xs"
              >
                YT
              </a>
              <a
                href="#footer"
                aria-label="Twitter/X"
                className="w-9 h-9 rounded-xl bg-[#151311] border border-[#292521] hover:border-[#D6B978] text-[#AAA39A] hover:text-[#D6B978] flex items-center justify-center transition-colors font-bold text-xs"
              >
                𝕏
              </a>
            </div>
            <p className="text-[11px] text-[#AAA39A] mt-3 leading-relaxed">
              شروحات دورية وتطبيقات إعرابية مباشرة على منصاتنا الرسمية.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Rights Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAA39A]">
          <p>© 2026 أكاديمية أحمد محمود لتعليم اللغة العربية. جميع الحقوق محفوظة.</p>
          
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#footer" className="hover:text-[#F5F1E8] transition-colors">سياسة الخصوصية</a>
            <a href="#footer" className="hover:text-[#F5F7FA] transition-colors">شروط الاستخدام</a>
            <a href="#footer" className="hover:text-[#F5F7FA] transition-colors">الاعتمادات الأكاديمية</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
