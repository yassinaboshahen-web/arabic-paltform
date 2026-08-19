import React from 'react';
import { Sparkles, Calendar, TrendingUp } from 'lucide-react';
import { WeeklyStudyDay } from '../../types';

interface LearningActivityChartProps {
  weeklyData: WeeklyStudyDay[];
}

export const LearningActivityChart: React.FC<LearningActivityChartProps> = ({
  weeklyData,
}) => {
  const maxMinutes = Math.max(...weeklyData.map((d) => d.minutesSpent), 90);
  const totalWeeklyMinutes = weeklyData.reduce((acc, curr) => acc + curr.minutesSpent, 0);
  const totalWeeklyHours = (totalWeeklyMinutes / 60).toFixed(1);

  return (
    <section 
      id="dashboard-learning-activity"
      className="p-5 sm:p-6 rounded-2xl bg-[#121110] border border-[#292521] space-y-5 select-none text-right shadow-lg"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#292521] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
            <h4 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
              نشاطك التعليمي
            </h4>
          </div>
          <p className="text-xs text-[#AAA39A]">
            ساعات الاستماع والتطبيق خلال آخر ٧ أيام
          </p>
        </div>

        {/* Weekly Metric Summary */}
        <div className="flex items-center gap-3 bg-[#0C0B0A] px-3.5 py-1.5 rounded-xl border border-[#292521]">
          <span className="text-xs text-[#AAA39A]">المجموع الأسبوعي:</span>
          <span className="text-sm font-bold font-mono text-[#D6B978]">
            {totalWeeklyHours} ساعات
          </span>
        </div>
      </div>

      {/* Minimalist 7-Day Bar Visualization */}
      <div className="pt-2">
        <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-36 border-b border-[#292521] pb-3">
          {weeklyData.map((day, idx) => {
            const heightPercent = Math.round((day.minutesSpent / maxMinutes) * 100);
            const isToday = day.isToday;

            return (
              <div 
                key={idx}
                className="flex flex-col items-center justify-end h-full group relative"
              >
                {/* Tooltip on Hover */}
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-[#181614] border border-[#292521] text-[10px] font-mono text-[#F5F1E8] px-2 py-0.5 rounded-md pointer-events-none whitespace-nowrap shadow-lg z-20">
                  {day.minutesSpent} دقيقة
                </div>

                {/* Vertical Bar */}
                <div className="w-full max-w-[28px] sm:max-w-[36px] bg-[#181614] rounded-t-lg overflow-hidden h-full flex flex-col justify-end">
                  <div 
                    className={`w-full rounded-t-lg transition-all duration-700 ${
                      isToday 
                        ? 'bg-gradient-to-t from-[#651F2A] to-[#D6B978] shadow-[0_0_10px_rgba(214,185,120,0.3)]' 
                        : 'bg-[#292521] group-hover:bg-[#D6B978]/60'
                    }`}
                    style={{ height: `${heightPercent}%` }}
                  />
                </div>

                {/* Day Label */}
                <span className={`text-[11px] sm:text-xs font-semibold mt-2.5 ${
                  isToday ? 'text-[#D6B978]' : 'text-[#777169] group-hover:text-[#AAA39A]'
                }`}>
                  {day.shortName}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Legend / Academic Note */}
        <div className="pt-3 flex items-center justify-between text-[11px] text-[#777169]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-gradient-to-t from-[#651F2A] to-[#D6B978]" />
            <span>اليوم الحالي</span>
          </div>
          <span>المعدل اليومي المستهدف: ٤٥ دقيقة</span>
        </div>
      </div>
    </section>
  );
};
