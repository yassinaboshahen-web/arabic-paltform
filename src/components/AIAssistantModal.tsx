import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Lightbulb
} from 'lucide-react';
import { motion } from 'motion/react';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'أهلاً بك في المساعد التعليمي الذكي لأكاديمية الأستاذ أحمد محمود! كيف يمكنني مساعدتك اليوم في فهم قواعد النحو، البلاغة، أو إعراب أي جملة؟',
      timestamp: 'الآن'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sampleQuestions = [
    'أعرب لي: «إنَّ القراءةَ مفتاحُ المعرفةِ»',
    'ما الفرق بين التشبيه البليغ والاستعارة؟',
    'كيف أميز بين همزة الوصل وهمزة القطع بسهولة؟',
    'اشرح لي قاعدة إعراب الأفعال الخمسة'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text: query,
      timestamp: 'الآن'
    };
    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate smart pedagogical response based on Ahmed Mahmoud's teaching style
    setTimeout(() => {
      let aiResponseText = '';
      if (query.includes('القراءة') || query.includes('إنَّ')) {
        aiResponseText = `إعراب الجملة بأسلوب الأستاذ أحمد المُبسّط:\n\n• «إنَّ»: حرف توكيد ونصب مبني على الفتح لا محل له من الإعراب.\n• «القراءةَ»: اسم إنَّ منصوب وعلامة نصبه الفتحة الظاهرة على آخره.\n• «مفتاحُ»: خبر إنَّ مرفوع وعلامة رفعه الضمة الظاهرة، وهو مضاف.\n• «المعرفةِ»: مضاف إليه مجرور وعلامة جره الكسرة الظاهرة.`;
      } else if (query.includes('التشبيه') || query.includes('الاستعارة')) {
        aiResponseText = `قاعدة ذهبية من الأستاذ أحمد للتفريق:\n\n1. التشبيه البليغ: يُذكر فيه المشبه والمشبه به معاً دون أداة أو وجه شبه (مثل: «العلمُ نورٌ»).\n2. الاستعارة: هي تشبيه بليغ حُذف أحد طرفيه (المشبه أو المشبه به)، مثل: «أقبل البحرُ يخطب في الناس» (استعارة تصريحية عن العالم الكريم).`;
      } else if (query.includes('همزة') || query.includes('الوصل')) {
        aiResponseText = `طريقة سحرية لا تخطئ فيها أبدًا:\nضع حرف الواو (و) قبل الكلمة وانطقها:\n- إذا نُطقت الهمزة فهي قطع (مثل: و + أحسن = وَأحسن).\n- إذا سقطت الهمزة في النطق فهي وصل (مثل: و + اكتب = وَكْتُب).`;
      } else {
        aiResponseText = `سؤال رائع! وفق منهج الأكاديمية، نقوم أولاً بتحديد نوع الكلمة (اسم، فعل، حرف)، ثم نحدد موقعها في الجملة ووظيفتها الدلالية. هل تود أن نطبق ذلك على مثال عملي محدد من نصوصك الدراسية؟`;
      }

      const aiMsg: Message = {
        sender: 'ai',
        text: aiResponseText,
        timestamp: 'الآن'
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 650);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl h-[620px] max-h-[90vh] bg-[#121110] border border-[#292521] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-right"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0C0B0A] border-b border-[#292521] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#181614] border border-[#292521] flex items-center justify-center text-[#D6B978] shadow-md">
              <Sparkles className="w-5 h-5 text-[#D6B978]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] flex items-center gap-2">
                <span>المساعد اللغوي الذكي</span>
                <span className="text-[10px] text-[#D6B978] bg-[#D6B978]/10 px-2 py-0.5 rounded-full border border-[#D6B978]/20">
                  منهج الأستاذ أحمد
                </span>
              </h3>
              <p className="text-xs text-[#AAA39A]">إجابات نحوية وبلاغية فورية 24/7</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="w-9 h-9 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-start flex-row-reverse' : 'justify-start'}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-[#D6B978] text-[#070707] font-bold'
                    : 'bg-[#181614] border border-[#292521] text-[#D6B978]'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-[#D6B978] text-[#070707] font-medium rounded-tr-none'
                    : 'bg-[#151311] border border-[#292521] text-[#F5F1E8] rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#D6B978] p-2.5 bg-[#151311] rounded-xl max-w-[220px] border border-[#292521]">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>جاري صياغة الشرح اللغوي...</span>
            </div>
          )}
        </div>

        {/* Suggestion Prompts */}
        <div className="px-6 py-2.5 bg-[#0C0B0A] border-t border-[#292521]">
          <div className="flex items-center gap-1.5 text-[11px] text-[#AAA39A] mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-[#D6B978]" />
            <span>أسئلة شائعة يمكنك تجربتها فوراً:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-3 py-1 rounded-lg bg-[#181614] hover:bg-[#201D1A] border border-[#292521] text-[11px] text-[#F5F1E8] whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Footer */}
        <div className="p-4 bg-[#0C0B0A] border-t border-[#292521]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="اكتب جملتك للإعراب أو استفسارك اللغوي..."
              className="flex-1 bg-[#181614] border border-[#292521] focus:border-[#D6B978]/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F5F1E8] placeholder-[#AAA39A] focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="px-5 py-3 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] disabled:opacity-40 text-[#070707] font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0"
            >
              <span>إرسال</span>
              <Send className="w-4 h-4 rotate-180" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
