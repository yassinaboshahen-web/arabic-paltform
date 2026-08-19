import React from 'react';
import { 
  CheckCircle2, 
  Play, 
  Eye, 
  FileText, 
  ArrowLeft,
  Clock
} from 'lucide-react';
import { StudentActivityItem } from '../../types';

interface RecentActivityListProps {
  activities: StudentActivityItem[];
  onOpenActivity?: (item: StudentActivityItem) => void;
}

export const RecentActivityList: React.FC<RecentActivityListProps> = ({
  activities,
  onOpenActivity,
}) => {
  const getIcon = (type: StudentActivityItem['type']) => {
    switch (type) {
      case 'completed':
        return (
          <div className="w-8 h-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        );
      case 'started':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#651F2A]/30 border border-[#D6B978]/30 text-[#D6B978] flex items-center justify-center shrink-0">
            <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
          </div>
        );
      case 'watched':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] text-[#AAA39A] flex items-center justify-center shrink-0">
            <Eye className="w-4 h-4" />
          </div>
        );
      case 'note':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#181614] border border-[#292521] text-[#D6B978] flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>
        );
    }
  };

  const getActionLabel = (type: StudentActivityItem['type']) => {
    switch (type) {
      case 'completed':
        return 'أكملت بنجاح:';
      case 'started':
        return 'بدأت دراسة:';
      case 'watched':
        return 'شاهدت:';
      case 'note':
        return 'تدوين ملاحظة:';
    }
  };

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
        <span className="text-xs font-mono text-[#777169]">سجل زمني</span>
      </div>

      {/* Activity Timeline Items */}
      <div className="space-y-3">
        {activities.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenActivity?.(item)}
            className="p-3 rounded-xl bg-[#0C0B0A]/70 hover:bg-[#151311] border border-[#292521] transition-all flex items-start gap-3 cursor-pointer group"
          >
            {getIcon(item.type)}

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold text-[#D6B978]">
                  {getActionLabel(item.type)}
                </span>
                <span className="text-[10px] font-mono text-[#777169] shrink-0">
                  {item.timeAgo}
                </span>
              </div>

              <h5 className="text-xs sm:text-sm font-bold text-[#F5F1E8] group-hover:text-[#D6B978] transition-colors truncate mt-0.5">
                {item.title}
              </h5>

              <p className="text-[11px] text-[#AAA39A] font-light mt-0.5 truncate">
                {item.courseTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
