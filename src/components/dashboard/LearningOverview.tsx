import React from 'react';
import { DashboardOverviewStats } from '../../types';

interface LearningOverviewProps {
  stats?: DashboardOverviewStats;
}

export const LearningOverview: React.FC<LearningOverviewProps> = ({
  stats = {
    completedLessons: 16,
    totalLessons: 24,
    progressPercent: 68,
    studyHours: 8,
  },
}) => {
  const statItems = [
    {
      id: 'completed',
      value: stats.completedLessons.toString(),
      label: 'دروس مكتملة',
      sublabel: 'تم اجتياز تطبيقاتها',
    },
    {
      id: 'total',
      value: stats.totalLessons.toString(),
      label: 'إجمالي الدروس',
      sublabel: 'في الدورات المسجلة',
    },
    {
      id: 'progress',
      value: `${stats.progressPercent}%`,
      label: 'نسبة التقدم',
      sublabel: 'متوسط التحصيل العام',
    },
    {
      id: 'hours',
      value: `${stats.studyHours}`,
      label: 'ساعات تعلم',
      sublabel: 'وقت تدريب ومشاهدة',
    },
  ];

  return (
    <section 
      id="dashboard-learning-overview"
      className="space-y-4 select-none text-right"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            رحلتك التعليمية
          </h3>
        </div>
        <span className="text-xs font-mono text-[#777169]">إحصاءات تحصيلية</span>
      </div>

      {/* Editorial Grid with Subtle Separators and Refined Typography */}
      <div className="rounded-2xl bg-[#121110] border border-[#292521] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-[#292521] overflow-hidden shadow-lg">
        {statItems.map((item) => (
          <div 
            key={item.id}
            className="p-5 sm:p-6 flex flex-col justify-between hover:bg-[#151311] transition-colors"
          >
            <span className="text-xs font-medium text-[#AAA39A] mb-3">{item.label}</span>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F1E8] tracking-tight">
                {item.value}
              </div>
              <p className="text-[11px] text-[#777169] font-light">
                {item.sublabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
