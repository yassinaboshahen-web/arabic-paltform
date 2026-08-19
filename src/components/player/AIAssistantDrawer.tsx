import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  BookOpen, 
  HelpCircle, 
  Check, 
  ArrowLeft 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LessonDetailPayload } from '../../types';

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: LessonDetailPayload;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({
  isOpen,
  onClose,
  lesson,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `مرحبًا بك! أنا مساعدك التعليمي الخاص بدرس «${lesson.title}». كيف يمكنني مساعدتك في استيعاب المادة أو التدرب عليها؟`,
      time: 'الآن',
    },
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    'اشرح لي الفكرة ببساطة',
    'اختبرني في هذا الدرس',
    'لخص لي الدرس',
    'أعطني مثالًا',
  ];

  // Auto scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      time: 'الآن',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Simulate AI response based on query
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (text.includes('اشرح') || text.includes('ببساطة')) {
        reply = 'علم النحو هو قانون اللغة الذي يحدد حركة آخر الكلمة بحسب وظيفتها في الجملة. فإذا قلت: «قرأَ الطالبُ الكتابَ»، الضمة على «الطالب» تدل على أنه الفاعل القائم بالقراءة، والفتحة على «الكتاب» تدل على أنه المفعول به المقروء.';
      } else if (text.includes('اختبرني') || text.includes('سؤال')) {
        reply = 'إليك سؤال تطبيقي سريع:\nفي جملة «شكرَ المعلمَ المديرُ»، من الذي قام بالشكر؟\n(فكّر في حركة الإعراب: الضمة والفتحة لتحديد الفاعل والمفعول به!)';
      } else if (text.includes('لخص') || text.includes('ملخص')) {
        reply = 'خلاصة درس مقدمة النحو:\n١. النحو علم المعاني وصيانة اللسان من اللحن.\n٢. وضعه أبو الأسود الدؤلي بتوجيه من الإمام علي رضي الله عنه.\n٣. الإعراب وسيلة كاشفة للمراد وليس مجرد حفظ حركات.';
      } else if (text.includes('مثال') || text.includes('شاهد')) {
        reply = 'مثال قرآني جليل:\nفي قوله تعالى: ﴿إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ﴾؛ الفتحة على لفظ الجلالة تعني أنه مفعول به مقدم تعظيمًا، والضمة على «العلماء» تعني أنهم الفاعلون الخاشعون لله حق خشيته.';
      } else {
        reply = `سؤال وجيه حول درس «${lesson.title}»! النحو يعتمد على الربط بين المعنى الذهني والعلامة الإعرابية الظاهرة. هل تود أن نفصل أكثر في هذه الجزئية أو نحل تدريبًا تطبيقيًا؟`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
        time: 'الآن',
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          id="lesson-ai-assistant-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="المساعد التعليمي الذكي"
          className="fixed inset-0 z-50 flex justify-start select-none"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Container (Opens from the left in RTL) */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative z-10 w-full max-w-md h-full bg-[#121110] border-r border-[#292521] shadow-2xl flex flex-col justify-between overflow-hidden text-right"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#292521] bg-[#151311] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#651F2A] to-[#351117] border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978] shadow-md shadow-[#651F2A]/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] flex items-center gap-2">
                    <span>المساعد التعليمي</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#D6B978]/15 border border-[#D6B978]/30 text-[10px] font-mono text-[#D6B978]">
                      سياقي
                    </span>
                  </h3>
                  <p className="text-xs text-[#AAA39A]">اسألني عن محتوى هذا الدرس أو اطلب اختبارًا</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] flex items-center justify-center text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
                aria-label="إغلاق المساعد"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Suggested Prompts Quick Bar */}
            <div className="p-3 bg-[#0C0B0A] border-b border-[#292521] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-3 py-1.5 rounded-xl bg-[#151311] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 text-xs text-[#AAA39A] hover:text-[#F5F1E8] whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Sparkles className="w-3 h-3 text-[#D6B978]" />
                  <span>{prompt}</span>
                </button>
              ))}
            </div>

            {/* Messages Chat Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#292521]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs shrink-0 ${
                    msg.sender === 'user'
                      ? 'bg-[#181614] border border-[#292521] text-[#AAA39A]'
                      : 'bg-gradient-to-br from-[#651F2A] to-[#351117] border border-[#D6B978]/40 text-[#D6B978]'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#D6B978] text-[#070707] font-semibold rounded-tl-none shadow-md'
                      : 'bg-[#151311] border border-[#292521] text-[#F5F1E8] rounded-tr-none font-light whitespace-pre-line'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#D6B978] p-2 bg-[#151311] rounded-xl border border-[#292521] w-max">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>جاري صياغة الإجابة النحوية...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Chat Input Field */}
            <div className="p-3 sm:p-4 bg-[#151311] border-t border-[#292521]">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="relative flex items-center"
              >
                <input
                  id="ai-assistant-input"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="اكتب سؤالك للمساعد التعليمي..."
                  className="w-full rounded-2xl bg-[#0C0B0A] border border-[#292521] focus:border-[#D6B978] focus:ring-1 focus:ring-[#D6B978] py-3 pr-4 pl-12 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#777169] outline-none"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="absolute left-2 w-8 h-8 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] disabled:opacity-30 disabled:cursor-not-allowed text-[#070707] flex items-center justify-center transition-colors"
                  title="إرسال"
                >
                  <Send className="w-3.5 h-3.5 rotate-180" />
                </button>
              </form>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
