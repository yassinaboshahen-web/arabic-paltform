import React, { useState } from 'react';
import { Sparkles, Send, Bot, X, Check, ArrowLeft } from 'lucide-react';

interface AIStudyAssistantWidgetProps {
  onOpenFullAssistant?: () => void;
}

export const AIStudyAssistantWidget: React.FC<AIStudyAssistantWidgetProps> = ({
  onOpenFullAssistant,
}) => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const suggestedActions = [
    { id: 'summary', text: 'لخص آخر درس', query: 'أريد ملخصًا مركزًا لدرس مقدمة في علم النحو وأهم مبادئه.' },
    { id: 'quiz', text: 'اختبرني في النحو', query: 'أعطني سؤالًا اختباريًا سريعًا في علامات الإعراب للتدريب.' },
    { id: 'explain', text: 'اشرح لي نقطة صعبة', query: 'ما الفرق بين الفاعل والمفعول به من حيث الموقع والعلامة الإعرابية؟' },
    { id: 'plan', text: 'أنشئ لي خطة مراجعة', query: 'اقترح علي خطة مراجعة أسبوعية لدورة النحو من الصفر إلى الإتقان.' },
  ];

  const handlePromptClick = (action: { id: string; text: string; query: string }) => {
    setSelectedPrompt(action.text);
    setIsGenerating(true);
    setResponse(null);

    setTimeout(() => {
      if (action.id === 'summary') {
        setResponse('خلاصة درس «مقدمة في علم النحو»:\n١. النحو هو علم أصول يُعرف به أحوال أواخر الكلم إعرابًا وبناءً.\n٢. ثمرته صيانة اللسان عن الخطأ في كتاب الله وكلام العرب.\n٣. وضعه أبو الأسود الدؤلي بأمر أمير المؤمنين علي بن أبي طالب رضي الله عنه.');
      } else if (action.id === 'quiz') {
        setResponse('سؤال تطبيقي سريع:\nفي جملة «كافأَ المديرُ المتفوقينَ»، ما إعراب كلمة «المتفوقينَ» وما علامة نصبها؟\n(فكّر: هل هي علامة أصلية أم فرعية؟)');
      } else if (action.id === 'explain') {
        setResponse('الفاعل: هو الاسم المرفوع الذي قام بالفعل، مثل: «كتبَ الطالبُ». حكمه الرفع دائمًا بالضمة أو ما ينوب عنها.\nالمفعول به: هو الاسم المنصوب الذي وقع عليه فعل الفاعل، مثل: «كتبَ الطالبُ المقالَ». حكمه النصب بالفتحة أو ما ينوب عنها.');
      } else {
        setResponse('خطة مراجعة أسبوعية مقترحة:\n• السبت والأحد: مراجعة الوحدة الأولى وحل التمارين (٣٠ دقيقة يوميًا).\n• الثلاثاء: مشاهدة درس أقسام الكلام وتدوين الفوائد.\n• الخميس: جلسة تطبيق إعرابي على سورة الفاتحة.\n• الجمعة: اختبار ذاتي عبر المساعد الذكي.');
      }
      setIsGenerating(false);
    }, 800);
  };

  return (
    <section 
      id="dashboard-ai-study-assistant"
      className="relative rounded-2xl bg-gradient-to-br from-[#151311] via-[#121110] to-[#0C0B0A] border border-[#292521] p-5 sm:p-6 select-none text-right overflow-hidden shadow-xl"
    >
      {/* Subtle Burgundy Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#651F2A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#D6B978]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#292521] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#651F2A] to-[#351117] border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978] shadow-md shadow-[#651F2A]/30 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] flex items-center gap-2">
              <span>مساعدك التعليمي</span>
              <span className="px-2 py-0.5 rounded-full bg-[#D6B978]/15 border border-[#D6B978]/30 text-[10px] font-mono text-[#D6B978]">
                ذكي وسياقي
              </span>
            </h4>
            <p className="text-xs text-[#AAA39A]">
              موجود لمساعدتك في فهم ما تتعلمه وتلخيص القواعد وتطبيق الإعراب.
            </p>
          </div>
        </div>

        {onOpenFullAssistant && (
          <button
            onClick={onOpenFullAssistant}
            className="px-3.5 py-1.5 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] text-xs font-semibold text-[#D6B978] transition-colors self-start sm:self-auto flex items-center gap-1.5"
          >
            <span>فتح نافذة الحوار</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Action Prompts Grid */}
      <div className="relative z-10 pt-4 space-y-3">
        <span className="text-xs text-[#AAA39A] font-medium block">
          اختر إجراءً سريعًا لمساعدتك في دراستك الحالية:
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {suggestedActions.map((action) => (
            <button
              key={action.id}
              onClick={() => handlePromptClick(action)}
              className="p-3 rounded-xl bg-[#0C0B0A] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 transition-all text-right flex flex-col justify-between gap-2 group cursor-pointer"
            >
              <div className="w-6 h-6 rounded-lg bg-[#151311] border border-[#292521] group-hover:border-[#D6B978]/40 flex items-center justify-center text-[#D6B978] transition-colors">
                <Sparkles className="w-3 h-3" />
              </div>
              <span className="text-xs font-bold text-[#F5F1E8] group-hover:text-[#D6B978] transition-colors">
                {action.text}
              </span>
            </button>
          ))}
        </div>

        {/* Live Response Box if Triggered */}
        {(isGenerating || response) && (
          <div className="mt-4 p-4 rounded-xl bg-[#0C0B0A] border border-[#D6B978]/30 space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#D6B978] font-bold">
                <Bot className="w-4 h-4" />
                <span>إجابة المساعد عن «{selectedPrompt}»:</span>
              </div>
              <button 
                onClick={() => setResponse(null)}
                className="text-[#777169] hover:text-[#F5F1E8]"
                aria-label="إغلاق الإجابة"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {isGenerating ? (
              <div className="flex items-center gap-2 text-xs text-[#AAA39A] py-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B978] animate-spin" />
                <span>جاري صياغة الفائدة الأكاديمية...</span>
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-[#F5F1E8] font-light leading-relaxed whitespace-pre-line">
                {response}
              </p>
            )}
          </div>
        )}
      </div>

    </section>
  );
};
