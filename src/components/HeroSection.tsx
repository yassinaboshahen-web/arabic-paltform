import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { motion } from 'motion/react';
import teacherImg from '../assets/images/teacher_portrait_1786908267385.jpg';
import { ACADEMY_STATS } from '../data/coursesData';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onStartJourney: () => void;
  onOpenTeacherAudio?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreCourses, 
  onStartJourney 
}) => {
  const [isPlayingGreeting, setIsPlayingGreeting] = useState(false);

  const toggleTeacherAudio = () => {
    setIsPlayingGreeting(!isPlayingGreeting);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-between bg-[#070707]"
    >
      {/* Cinematic Background Lighting & Subtle Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle deep burgundy atmospheric glow behind scene */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#651F2A]/20 blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        
        {/* Extremely subtle champagne light source */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#D6B978]/06 blur-[130px]" />
        
        {/* Dark burgundy depth near base */}
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[300px] rounded-full bg-[#351117]/30 blur-[120px]" />

        {/* Subtle grid pattern with warm tone */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 bg-radial-fade" />

        {/* Elegant Arabic Typography Watermark / Motif */}
        <div className="absolute top-20 left-10 select-none opacity-[0.025] text-[#D6B978] font-['Amiri',_serif] text-[240px] leading-none pointer-events-none rotate-6">
          فصاحة
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column (RTL): Dominant Editorial Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-right z-20"
          >
            {/* Hero Eyebrow Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151311] border border-[#292521] text-xs font-medium text-[#F5F1E8] shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#D6B978] animate-pulse" />
              <span className="text-[#AAA39A]">الأكاديمية الرقمية الخاصة الأولى</span>
              <span className="text-[#292521]">|</span>
              <span className="text-[#D6B978] font-semibold">بإشراف الأستاذ أحمد محمود</span>
            </motion.div>

            {/* Dominant Editorial Headline with warm ivory & single champagne highlight */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F1E8] font-['Cairo',_sans-serif] leading-[1.18] sm:leading-[1.15] mb-6">
              <span className="block font-black text-[#F5F1E8]">
                تعلّم العربية.
              </span>
              <span className="block font-bold text-[#D6B978]">
                أتقنها.
              </span>
              <span className="block font-medium text-[#F5F1E8]/90">
                استخدمها بثقة.
              </span>
            </h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-[#AAA39A] leading-relaxed max-w-2xl mb-8 font-light"
            >
              تجربة تعليمية متكاملة تساعدك على بناء أساس قوي في اللغة العربية، وفهمها واستخدامها بثقة من خلال منهج منظم وشرح سينمائي متقن.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA - Champagne with Deep Black Text */}
              <button
                id="hero-primary-cta"
                onClick={onStartJourney}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] font-bold text-base shadow-[0_4px_20px_rgba(214,185,120,0.2)] hover:shadow-[0_6px_28px_rgba(214,185,120,0.3)] transition-all duration-200 flex items-center justify-center gap-2 group active:scale-98"
              >
                <span>ابدأ رحلتك</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
              </button>

              {/* Secondary CTA - Dark surface with Champagne border */}
              <button
                id="hero-secondary-cta"
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#121110] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/60 text-[#F5F1E8] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>استكشف الدورات</span>
                <span className="text-xs text-[#D6B978] bg-[#D6B978]/10 px-2 py-0.5 rounded border border-[#D6B978]/20 group-hover:bg-[#D6B978]/20 transition-colors">
                  6 مسارات
                </span>
              </button>
            </motion.div>

            {/* Teacher Direct Endorsement Note */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 pt-6 border-t border-[#292521] flex items-center gap-4 text-xs text-[#AAA39A]"
            >
              <div className="flex items-center gap-1.5 text-[#F5F1E8] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D6B978]" />
                <span>منهج أكاديمي معتمد</span>
              </div>
              <span className="text-[#292521]">•</span>
              <div className="flex items-center gap-1.5 text-[#F5F1E8] font-medium">
                <Award className="w-4 h-4 text-[#D6B978]" />
                <span>شهادة إتمام موثقة</span>
              </div>
              <span className="text-[#292521]">•</span>
              <div className="hidden sm:flex items-center gap-1.5 text-[#F5F1E8] font-medium">
                <Sparkles className="w-4 h-4 text-[#D6B978]" />
                <span>دعم ذكي فوري 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Column (RTL): Editorial Teacher Portrait with Burgundy Atmospheric Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            {/* Deep Burgundy Glow framing the teacher */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#651F2A]/35 via-[#351117]/25 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Main Portrait Card Container */}
            <div className="relative w-full max-w-[420px] rounded-2xl bg-[#151311] border border-[#292521] p-3 shadow-2xl overflow-hidden group">
              
              {/* Inner Portrait Image with subtle vignette */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#0C0B0A]">
                <img 
                  src={teacherImg} 
                  alt="الأستاذ أحمد محمود - مدرس اللغة العربية"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-103"
                  loading="eager"
                />

                {/* Subtle vignette and gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/35 pointer-events-none" />

                {/* Top Badge: Teacher Verified status */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070707]/85 backdrop-blur-md border border-[#292521] text-[11px] font-medium text-[#F5F1E8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B978]" />
                  <span>أحمد محمود | كبير معلمين</span>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-3.5 rounded-xl bg-[#0C0B0A]/95 backdrop-blur-md border border-[#292521] text-right">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
                        أحمد محمود
                      </h3>
                      <p className="text-[11px] text-[#D6B978] font-medium">
                        مدرس ومؤسس الأكاديمية
                      </p>
                    </div>

                    {/* Interactive Voice Sample Trigger */}
                    <button
                      id="hero-voice-note-toggle"
                      onClick={toggleTeacherAudio}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 transition-all ${
                        isPlayingGreeting
                          ? 'bg-[#D6B978] border-[#E7D29A] text-[#070707] shadow-[0_0_12px_rgba(214,185,120,0.35)]'
                          : 'bg-[#151311] border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] hover:border-[#D6B978]/40'
                      }`}
                      title="استمع إلى كلمة الأستاذ الترحيبية"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isPlayingGreeting ? 'animate-bounce text-[#070707]' : 'text-[#D6B978]'}`} />
                      <span>{isPlayingGreeting ? 'جاري الاستماع...' : 'كلمة الأستاذ'}</span>
                    </button>
                  </div>

                  {isPlayingGreeting && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2.5 pt-2 border-t border-[#292521] text-[11px] text-[#F5F1E8] italic leading-snug bg-[#181614] p-2 rounded border border-[#292521]"
                    >
                      "أهلاً بكم في أكاديميتكم الخاصة.. لغتنا العربية لم تكن يوماً صعبة، بل كانت دائماً تحتاج إلى من يرويها بحب ونظام."
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Floating Stat Chip (Left Edge) */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 -left-3 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#151311]/95 border border-[#292521] shadow-2xl backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D6B978]/10 border border-[#D6B978]/20 flex items-center justify-center text-[#D6B978]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#F5F1E8]">شرح تفاعلي</div>
                  <div className="text-[10px] text-[#AAA39A]">منهج حديث ومبتكر</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Minimal Editorial Trust Row / Hero Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-[#292521]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {ACADEMY_STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="flex flex-col text-right relative group"
              >
                {/* Visual subtle divider between items on desktop */}
                {idx !== 0 && (
                  <div className="hidden md:block absolute -right-4 top-2 bottom-2 w-px bg-[#292521]" />
                )}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D6B978] font-['Cairo',_sans-serif] tracking-tight group-hover:text-[#E7D29A] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#F5F1E8] mt-1">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-xs text-[#AAA39A] mt-0.5 font-light">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
