import React from 'react';
import { Award, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { AcademicMilestone } from '../../types';

interface AcademicMilestonesProps {
  milestones: AcademicMilestone[];
}

export const AcademicMilestones: React.FC<AcademicMilestonesProps> = ({
  milestones,
}) => {
  return (
    <div 
      id="dashboard-academic-milestones"
      className="p-5 sm:p-6 rounded-2xl bg-[#121110] border border-[#292521] space-y-4 select-none text-right shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <h4 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            الإنجازات الأكاديمية
          </h4>
        </div>
        <span className="text-xs font-mono text-[#777169]">محطات التحصيل</span>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {milestones.map((m) => (
          <div
            key={m.id}
            className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-2.5 ${
              m.isUnlocked
                ? 'bg-[#151311] border-[#292521] hover:border-[#D6B978]/40'
                : 'bg-[#0C0B0A]/40 border-[#292521]/40 opacity-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs ${
                m.isUnlocked
                  ? 'bg-[#D6B978]/15 border border-[#D6B978]/40 text-[#D6B978]'
                  : 'bg-[#181614] border border-[#292521] text-[#777169]'
              }`}>
                {m.isUnlocked ? <Award className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181614] text-[#AAA39A] border border-[#292521]">
                {m.category}
              </span>
            </div>

            <div className="space-y-1">
              <h5 className="text-xs sm:text-sm font-bold text-[#F5F1E8]">
                {m.title}
              </h5>
              <p className="text-[11px] text-[#AAA39A] font-light leading-relaxed">
                {m.description}
              </p>
            </div>

            <div className="text-[10px] font-mono text-[#777169] pt-1">
              {m.isUnlocked ? `مكتمل: ${m.earnedDate}` : 'قيد التقدم'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
