import React from 'react';
import { LearningJourneyStep } from '../../types';

interface LearningJourneyProps {
  steps?: LearningJourneyStep[];
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({
  steps = [
    {
      id: 'journey-1',
      dateOrOrder: 'أغسطس 2026',
      title: 'انضممت إلى الأكاديمية',
      description: 'تسجيل الحساب والبدء في الاستكشاف الأكاديمي لمناهج اللغة العربية.',
      isCompleted: true,
    },
    {
      id: 'journey-2',
      dateOrOrder: 'ثم',
      title: 'بدأت أول دورة',
      description: 'الانضمام لمسار «النحو من الصفر إلى الإتقان» مع الأستاذ أحمد محمود.',
      isCompleted: true,
    },
    {
      id: 'journey-3',
      dateOrOrder: 'ثم',
      title: 'أكملت أول 10 دروس',
      description: 'اجتياز تدريبات علامات الإعراب وبناء الجملة الاسمية بنجاح.',
      isCompleted: true,
    },
    {
      id: 'journey-4',
      dateOrOrder: 'ثم',
      title: 'وصلت إلى 68% من أول دورة',
      description: 'إتمام ١٦ درسًا وتطبيقاتها اللغوية مع المتابعة المستمرة.',
      isCompleted: true,
    },
  ],
}) => {
  return (
    <div 
      id="profile-learning-journey"
      className="p-6 sm:p-7 rounded-2xl bg-[#121110] border border-[#292521] space-y-6 select-none text-right shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h3 className="text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              رحلتي التعليمية
            </h3>
          </div>
          <p className="text-xs text-[#AAA39A]">المحطات والخطوات المتدرجة منذ بدء مسارك الدراسي</p>
        </div>
        <span className="text-xs font-mono text-[#777169]">خط زمني</span>
      </div>

      {/* Vertical Editorial Timeline */}
      <div className="relative pr-6 mr-2 space-y-6 border-r border-[#292521]">
        {steps.map((step, index) => (
          <div key={step.id} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -right-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#121110] border-2 border-[#D6B978] group-hover:bg-[#D6B978] transition-colors" />

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#D6B978] font-bold">
                  {step.dateOrOrder}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-[#F5F1E8] group-hover:text-[#D6B978] transition-colors">
                {step.title}
              </h4>

              <p className="text-xs text-[#AAA39A] font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
