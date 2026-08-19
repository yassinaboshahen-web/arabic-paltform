import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  PenTool, 
  ArrowLeft, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';
import { LEARNING_CATEGORIES } from '../data/coursesData';

interface LearningJourneyProps {
  onSelectCategory: (categoryId: string) => void;
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ onSelectCategory }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'PenTool': return <PenTool className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section 
      id="learning-journey" 
      className="relative py-24 lg:py-32 bg-[#070707] overflow-hidden"
    >
      {/* Subtle Deep Burgundy & Champagne Background Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#651F2A]/15 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D6B978]/06 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header */}
        <div className="text-right max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151311] border border-[#292521] text-xs font-semibold text-[#D6B978] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>مسارات التعلّم المنهجية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight leading-tight mb-4">
            ابدأ رحلتك في اللغة العربية
          </h2>

          <p className="text-base sm:text-lg text-[#AAA39A] font-light leading-relaxed">
            اختر المجال الذي تريد تطويره وابدأ بخطوتك الأولى في مسار متدرج ومصمم بعناية فائقة.
          </p>
        </div>

        {/* Large Asymmetric Editorial Category Blocks */}
        <div className="flex flex-col gap-8">
          {LEARNING_CATEGORIES.map((category, index) => {
            const isHovered = hoveredCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => onSelectCategory(category.id)}
                className="group relative rounded-3xl bg-[#151311] border border-[#292521] hover:border-[#D6B978]/50 p-8 sm:p-10 lg:p-12 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl"
              >
                {/* Custom Gradient Accent Background on Hover (Deep Burgundy to Champagne) */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(800px circle at top right, ${category.glowColor}, transparent 60%)`
                  }}
                />

                {/* Subtle Arabic Letter Art in Background of each block */}
                <div className="absolute left-6 bottom-4 select-none opacity-[0.025] group-hover:opacity-[0.05] transition-opacity font-['Amiri',_serif] text-9xl leading-none text-[#D6B978] pointer-events-none">
                  {category.id === 'grammar' ? 'ن' : category.id === 'rhetoric' ? 'ب' : 'ق'}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column: Number & Index */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center justify-between lg:justify-start gap-4">
                    <span className="font-['Cairo',_sans-serif] text-3xl sm:text-4xl font-extrabold text-[#777169] group-hover:text-[#D6B978] transition-colors">
                      0{index + 1}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 bg-[#181614] border border-[#292521] group-hover:border-[#D6B978]/40"
                      style={{
                        color: isHovered ? '#D6B978' : '#AAA39A',
                      }}
                    >
                      {getIcon(category.iconName)}
                    </div>
                  </div>

                  {/* Middle Column: Major Title, Subtitle, Description */}
                  <div className="lg:col-span-7 text-right">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#181614] border border-[#292521] text-[#AAA39A]">
                        {category.courseCount} دورات متخصصة
                      </span>
                    </div>

                    <div className="text-lg sm:text-xl font-semibold text-[#D6B978] mb-3">
                      {category.subtitle}
                    </div>

                    <p className="text-sm sm:text-base text-[#AAA39A] leading-relaxed max-w-2xl font-light">
                      {category.description}
                    </p>

                    {/* Key Concepts Chips */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {category.keyConcepts.map((concept, cIdx) => (
                        <span 
                          key={cIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#181614] border border-[#292521] text-[#F5F1E8]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B978]" />
                          <span>{concept}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: CTA Block & Arrow */}
                  <div className="lg:col-span-4 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#292521]">
                    <div className="text-right hidden lg:block">
                      <span className="text-xs text-[#AAA39A]">مسار دراسي متكامل</span>
                      <p className="text-sm font-bold text-[#F5F1E8] mt-0.5">من الصفر حتى الاحتراف</p>
                    </div>

                    <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#181614] group-hover:bg-[#D6B978] border border-[#292521] group-hover:border-[#D6B978] text-sm font-bold text-[#F5F1E8] group-hover:text-[#070707] transition-all duration-300 shadow-md">
                      <span>استكشف مسار {category.title}</span>
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
