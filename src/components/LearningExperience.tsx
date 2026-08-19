import React, { useState } from 'react';
import { 
  PlayCircle, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export const LearningExperience: React.FC = () => {
  const [activeQuizOption, setActiveQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  return (
    <section 
      id="learning-experience" 
      className="relative py-24 lg:py-36 bg-[#070707] overflow-hidden"
    >
      {/* Ambient Burgundy and Champagne background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#651F2A]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#D6B978]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>بيئة تعليمية متكاملة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-tight mb-4">
            كل ما تحتاجه لتتعلم بشكل أفضل
          </h2>

          <p className="text-base sm:text-lg text-[#AAA39A] font-light leading-relaxed">
            صُممت المنصة بأحدث أساليب التعليم الرقمي لتضمن لك تجربة دراسية سلسة، عميقة وممتعة.
          </p>
        </div>

        {/* Editorial Bento Grid Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Item 1: Clear Video Lessons (Large 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl bg-[#151311] border border-[#292521] p-8 sm:p-10 flex flex-col justify-between text-right relative overflow-hidden group shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978]">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#D6B978] bg-[#D6B978]/10 px-3 py-1 rounded-full border border-[#D6B978]/20">
                  تصوير استوديو بدقة 4K
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-3">
                دروس فيديو واضحة
              </h3>

              <p className="text-base text-[#D6B978] font-medium mb-3">
                شرح منظم يساعدك على الفهم خطوة بخطوة.
              </p>

              <p className="text-sm text-[#AAA39A] font-light leading-relaxed max-w-xl mb-8">
                تسجيلات عالية الدقة مقسمة لوحدات صغيرة مركزة (10-15 دقيقة) مع رسومات توضيحية وجداول إعرابية مبسطة تمنع التشتت وتثبت المعلومة.
              </p>
            </div>

            {/* Visual Interactive Video Snippet Preview */}
            <div className="p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#292521]">
                <span className="text-xs font-semibold text-[#F5F1E8]">لوحة الشرح التفاعلية المباشرة</span>
                <span className="text-[11px] text-[#D6B978] bg-[#D6B978]/10 px-2 py-0.5 rounded border border-[#D6B978]/20">مباشر ومُسجل</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-lg bg-[#181614] text-[#D6B978] font-mono text-right flex items-center justify-between border border-[#292521]">
                  <span>جملة: «العلمُ نورٌ يُضيءُ الدروبَ»</span>
                  <span className="text-[10px] text-[#AAA39A] font-sans">مثال إعرابي فوري</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#AAA39A]">
                  <span className="w-2 h-2 rounded-full bg-[#D6B978]" />
                  <span>المبتدأ: العلمُ (مرفوع بالضمة الظاهرة) • الخبر: نورٌ</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Interactive Quizzes & Exercises (5 cols) with interactive quiz demo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-[#151311] border border-[#292521] p-8 sm:p-10 flex flex-col justify-between text-right relative overflow-hidden shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#D6B978] bg-[#D6B978]/10 px-3 py-1 rounded-full border border-[#D6B978]/20">
                  تقييم فوري
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-3">
                اختبارات وتمارين
              </h3>

              <p className="text-base text-[#D6B978] font-medium mb-3">
                اختبر فهمك وطبّق ما تعلمته.
              </p>

              <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed mb-6">
                أسئلة تفاعلية ذكية مصممة لكشف المفاهيم الخاطئة وتصحيحها فوراً مع تعليل نحوي كامل لكل خيار.
              </p>
            </div>

            {/* Real Interactive Mini-Quiz Widget Demo */}
            <div className="p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] text-right">
              <p className="text-xs font-bold text-[#F5F1E8] mb-3">
                سؤال تجريبي: ما إعراب كلمة «مخلصًا» في: «يعملُ الطالبُ مخلصًا»؟
              </p>
              
              <div className="space-y-2">
                {[
                  { id: 0, text: 'مفعول به منصوب', isCorrect: false },
                  { id: 1, text: 'حال منصوب وعلامة نصبه الفتحة', isCorrect: true },
                  { id: 2, text: 'تمييز منصوب', isCorrect: false }
                ].map((opt) => {
                  const isSelected = activeQuizOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setActiveQuizOption(opt.id);
                        setQuizSubmitted(true);
                      }}
                      className={`w-full text-right p-2.5 rounded-xl text-xs font-medium border transition-all flex items-center justify-between ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-[#181614] border-[#D6B978] text-[#D6B978]'
                            : 'bg-[#651F2A]/30 border-[#651F2A] text-[#F5F1E8]'
                          : 'bg-[#181614] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] hover:border-[#D6B978]/40'
                      }`}
                    >
                      <span>{opt.text}</span>
                      {isSelected && opt.isCorrect && <Check className="w-3.5 h-3.5 text-[#D6B978]" />}
                    </button>
                  );
                })}
              </div>

              {quizSubmitted && (
                <p className="text-[11px] text-[#D6B978] mt-2 font-medium">
                  {activeQuizOption === 1 ? '✓ إجابة صحيحة! أحسنت، تبين هيئة الفاعل أثناء الفعل.' : 'حاول مرة أخرى! انتبه للسؤال بكيف.'}
                </p>
              )}
            </div>
          </motion.div>

          {/* Item 3: Progress Tracking (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl bg-[#151311] border border-[#292521] p-8 sm:p-10 flex flex-col justify-between text-right relative overflow-hidden shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#D6B978] bg-[#D6B978]/10 px-3 py-1 rounded-full border border-[#D6B978]/20">
                  تتبع دقيق
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-3">
                تقدمك في مكان واحد
              </h3>

              <p className="text-base text-[#D6B978] font-medium mb-3">
                تابع رحلتك التعليمية واعرف دائمًا أين وصلت.
              </p>

              <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed mb-6">
                لوحة إحصائية واضحة توضح لك ما أنجزته وما تبقى لك لإتمام كل مسار دراسي والحصول على شهادتك.
              </p>
            </div>

            {/* Visual Progress Mock Widget */}
            <div className="p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#F5F1E8]">مسار النحو التأسيسي</span>
                <span className="text-[#D6B978] font-bold font-mono">75%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#181614] overflow-hidden border border-[#292521]">
                <div className="h-full bg-gradient-to-l from-[#D6B978] to-[#E7D29A] rounded-full w-3/4" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#AAA39A]">
                <span>18 من 24 درسًا مكتمل</span>
                <span>باقي ساعتان للحصول على الشهادة</span>
              </div>
            </div>
          </motion.div>

          {/* Item 4: Smart AI Assistance (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 rounded-3xl bg-[#151311] border border-[#292521] p-8 sm:p-10 flex flex-col justify-between text-right relative overflow-hidden shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#D6B978] bg-[#D6B978]/10 px-3 py-1 rounded-full border border-[#D6B978]/20">
                  مساعد لغوي مدعوم بالذكاء الاصطناعي
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] mb-3">
                مساعدة ذكية
              </h3>

              <p className="text-base text-[#D6B978] font-medium mb-3">
                احصل على مساعدة إضافية عندما تحتاجها.
              </p>

              <p className="text-sm text-[#AAA39A] font-light leading-relaxed max-w-xl mb-6">
                مساعد رقمي ذكي مبني على قواعد اللغة العربية الفصحى ومنهج الأستاذ أحمد للإجابة الفورية عن تساؤلاتك، وتلخيص الدروس، وابتكار تمارين مخصصة لمستواك.
              </p>
            </div>

            {/* AI Assistant Chat Preview Snippet */}
            <div className="p-4 rounded-2xl bg-[#0C0B0A] border border-[#292521] space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#181614] text-[#D6B978] border border-[#292521] flex items-center justify-center text-xs shrink-0 font-bold">
                  ط
                </div>
                <div className="p-2.5 rounded-xl bg-[#181614] border border-[#292521] text-xs text-[#F5F1E8]">
                  ما الفرق بين «لا» الناهية و«لا» النافية؟
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#651F2A]/30 text-[#D6B978] border border-[#651F2A]/50 flex items-center justify-center text-xs shrink-0">
                  ✨
                </div>
                <div className="p-2.5 rounded-xl bg-[#151311] border border-[#292521] text-xs text-[#F5F1E8]/90 leading-relaxed">
                  «لا» الناهية تفيد طلب الكف عن الفعل وتجزم الفعل المضارع، بينما «لا» النافية تخبر بعدم وقوع الفعل ولا تجزم المضارع.
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
