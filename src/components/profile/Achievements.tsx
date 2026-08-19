import React from 'react';
import { Award, CheckCircle2, Clock, Lock } from 'lucide-react';
import { AcademicMilestone } from '../../types';

interface AchievementsProps {
  milestones?: AcademicMilestone[];
}

export const Achievements: React.FC<AchievementsProps> = ({
  milestones = [
    {
      id: 'ach-1',
      title: 'أكملت أول 10 دروس',
      description: 'إتمام عشر جلسات دراسية بنجاح مع حل التطبيقات التفاعلية',
      earnedDate: 'أغسطس 2026',
      isUnlocked: true,
      category: 'الاستمرارية',
    },
    {
      id: 'ach-2',
      title: 'أول أسبوع تعلم',
      description: 'المواظبة على دراسة الدروس لسبعة أيام متتالية دون انقطاع',
      earnedDate: 'أغسطس 2026',
      isUnlocked: true,
      category: 'الانضباط',
    },
    {
      id: 'ach-3',
      title: 'أكملت أول دورة',
      description: 'إتمام جميع دروس واختبارات المنهج التأسيسي بالكامل',
      isUnlocked: false,
      category: 'الختام',
    },
    {
      id: 'ach-4',
      title: 'حافظت على استمرارية التعلم',
      description: 'المحافظة على معدل أسبوعي ثابت يزيد عن ٥ ساعات دراسية',
      earnedDate: 'أغسطس 2026',
      isUnlocked: true,
      category: 'التفوق',
    },
  ],
}) => {
  return (
    <div 
      id="profile-achievements"
      className="p-6 sm:p-7 rounded-2xl bg-[#121110] border border-[#292521] space-y-6 select-none text-right shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              إنجازاتي
            </h3>
          </div>
          <p className="text-xs text-[#AAA39A]">المحطات الأكاديمية والشهادات الرمزية المعتمدة</p>
        </div>
        <span className="text-xs font-mono text-[#777169]">محطات الشرف</span>
      </div>

      {/* Grid of Refined Academic Badges (Monochrome & Champagne) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {milestones.map((m) => (
          <div
            key={m.id}
            className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-2.5 ${
              m.isUnlocked
                ? 'bg-[#0C0B0A]/90 border-[#292521] hover:border-[#D6B978]/40'
                : 'bg-[#0C0B0A]/40 border-[#292521]/40 opacity-45'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                m.isUnlocked
                  ? 'bg-[#181614] border border-[#D6B978]/40 text-[#D6B978]'
                  : 'bg-[#151311] border border-[#292521] text-[#777169]'
              }`}>
                {m.isUnlocked ? (
                  <Award className="w-4 h-4" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181614] text-[#AAA39A] border border-[#292521]">
                {m.category}
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-[#F5F1E8]">
                {m.title}
              </h4>
              <p className="text-[11px] text-[#AAA39A] font-light leading-relaxed">
                {m.description}
              </p>
            </div>

            <div className="text-[10px] font-mono text-[#777169] pt-1">
              {m.isUnlocked ? `مكتمل: ${m.earnedDate}` : 'قيد المتابعة والتحصيل'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
