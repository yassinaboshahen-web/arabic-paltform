import React from 'react';
import { Sparkles, Bot, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface AITeaserProps {
  onOpenAI: () => void;
}

export const AITeaser: React.FC<AITeaserProps> = ({ onOpenAI }) => {
  return (
    <section 
      id="ai-teaser" 
      className="relative py-20 lg:py-28 bg-[#0C0B0A] border-t border-[#292521] overflow-hidden"
    >
      {/* Subtle Ambient Burgundy Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#651F2A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Premium AI Card Box */}
        <div className="relative rounded-3xl bg-[#151311] border border-[#292521] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          
          {/* Subtle Corner Highlights */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#D6B978]/05 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#651F2A]/10 rounded-full blur-2xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Right Column: Narrative */}
            <div className="lg:col-span-8 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181614] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
                <span>مساعدك اللغوي الذكي (AI)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-tight mb-4">
                لست وحدك في رحلتك التعليمية.
              </h2>

              <p className="text-base sm:text-lg text-[#AAA39A] font-light leading-relaxed mb-6 max-w-2xl">
                مساعدك الذكي متاح لمساعدتك في شرح الدروس، تلخيص المحتوى، وإنشاء أسئلة للمراجعة، والإجابة عن أي استفسار لغوي في أي وقت.
              </p>

              {/* 3 Quick Capability Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#181614] border border-[#292521] text-xs text-[#F5F1E8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B978]" />
                  <span>إعراب فوري للجمل الصعبة</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#181614] border border-[#292521] text-xs text-[#F5F1E8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B978]" />
                  <span>تلخيص القواعد بخرائط ذهنية</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#181614] border border-[#292521] text-xs text-[#F5F1E8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B978]" />
                  <span>توليد تمارين مخصصة لاحتياجك</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                id="open-ai-assistant-btn"
                onClick={onOpenAI}
                className="px-7 py-3.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-sm shadow-[0_4px_20px_rgba(214,185,120,0.2)] hover:shadow-[0_6px_25px_rgba(214,185,120,0.3)] flex items-center gap-2 group transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#070707]" />
                <span>جرّب المساعد الذكي الآن</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </button>
            </div>

            {/* Left Column: Stylized AI Interaction Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm p-5 rounded-2xl bg-[#0C0B0A] border border-[#292521] shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#292521] mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#181614] text-[#D6B978] border border-[#292521] flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#F5F1E8]">المساعد اللغوي للأكاديمية</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#D6B978]" />
                </div>

                <div className="space-y-2.5 text-xs text-right">
                  <div className="p-2.5 rounded-xl bg-[#151311] border border-[#292521] text-[#AAA39A]">
                    مرحباً! اسألني عن أي قاعدة نحوية أو بلاغية ترغب في فهمها.
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#181614] border border-[#292521] text-[#D6B978]">
                    💡 «تذكر: كان وأخواتها ترفع المبتدأ وتنصب الخبر»
                  </div>
                </div>

                <button
                  onClick={onOpenAI}
                  className="w-full mt-3 py-2 rounded-lg bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 text-[11px] font-semibold text-[#D6B978] transition-colors text-center block"
                >
                  انقر لبدء المحادثة الذكية &larr;
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
