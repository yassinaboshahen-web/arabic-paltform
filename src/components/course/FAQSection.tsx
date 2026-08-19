import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CourseDetailData } from '../../types';

interface FAQSectionProps {
  courseDetails: CourseDetailData;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ courseDetails }) => {
  const { faqs } = courseDetails;

  // Track active accordion open item (default: first open)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section 
      id="course-faqs" 
      aria-label="الأسئلة الشائعة"
      className="py-12 sm:py-16 bg-[#070707]"
    >
      <div className="space-y-8 text-right">
        
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D6B978]" />
            <span>إجابات واضحة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
            الأسئلة الشائعة
          </h2>
          
          <p className="text-sm sm:text-base text-[#AAA39A] mt-1.5 font-light">
            كل ما يهمك معرفته حول مسار التعلم وآلية الدراسة في الأكاديمية.
          </p>
        </div>

        {/* Elegant FAQ Accordion List (Refined Editorial Rows) */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#151311] border-[#D6B978]/40 shadow-lg'
                    : 'bg-[#121110] border-[#292521] hover:border-[#292521]/90'
                }`}
              >
                {/* Accordion Question Trigger */}
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B978] select-none"
                >
                  <span className={`text-base sm:text-lg font-bold font-['Cairo',_sans-serif] transition-colors ${
                    isOpen ? 'text-[#D6B978]' : 'text-[#F5F1E8]'
                  }`}>
                    {faq.question}
                  </span>

                  <div 
                    className={`w-7 h-7 rounded-lg bg-[#181614] border border-[#292521] flex items-center justify-center text-[#AAA39A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D6B978] border-[#D6B978]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="border-t border-[#292521]/60"
                    >
                      <div className="p-5 sm:p-6 pt-4 bg-[#0C0B0A]/50 text-right">
                        <p className="text-sm sm:text-base text-[#AAA39A] leading-relaxed font-light font-['Cairo',_sans-serif]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
