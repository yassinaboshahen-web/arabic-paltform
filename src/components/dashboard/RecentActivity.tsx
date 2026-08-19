import React from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import { StudentActivityItem } from '../../types';

interface RecentActivityProps {
  activities?: StudentActivityItem[];
  onOpenActivity?: (item: StudentActivityItem) => void;
}

export const RecentActivity: React.FC<RecentActivityProps> = ({
  activities = [
    {
      id: 'act-1',
      type: 'completed',
      title: 'مقدمة في علم النحو',
      courseTitle: 'النحو من الصفر إلى الإتقان',
      timeAgo: 'منذ ساعتين',
    },
    {
      id: 'act-2',
      type: 'started',
      title: 'أقسام الكلام',
      courseTitle: 'النحو من الصفر إلى الإتقان',
      timeAgo: 'أمس',
    },
  ],
  onOpenActivity,
}) => {
  return (
    <div 
      id="dashboard-recent-activity"
      className="p-5 sm:p-6 rounded-2xl bg-[#121110] border border-[#292521] space-y-4 select-none text-right flex flex-col justify-between"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292521] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <h4 className="text-base font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            آخر نشاط
          </h4>
        </div>
        <span className="text-xs font-mono text-[#777169]">سجل المتابعة</span>
      </div>

      {/* Activity Timeline Items */}
      {activities && activities.length > 0 ? (
        <div className="space-y-3">
          {activities.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenActivity?.(item)}
              className="p-3.5 rounded-xl bg-[#0C0B0A]/70 hover:bg-[#151311] border border-[#292521] transition-all flex items-center justify-between gap-3 cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  item.type === 'completed'
                    ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-400'
                    : 'bg-[#651F2A]/30 border border-[#D6B978]/30 text-[#D6B978]'
                }`}>
                  {item.type === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-[#D6B978]">
                      {item.type === 'completed' ? '✓ أكملت:' : '▶ بدأت:'}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-[#F5F1E8] group-hover:text-[#D6B978] transition-colors truncate">
                      «{item.title}»
                    </h5>
                  </div>
                  <p className="text-[11px] text-[#777169] font-light mt-0.5 truncate">
                    {item.courseTitle}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#AAA39A] shrink-0">
                {item.timeAgo}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-center text-xs text-[#777169]">
          لا يوجد نشاط مسجل حتى الآن.
        </div>
      )}
    </div>
  );
};
