import React from 'react';
import { 
  Play, 
  BookOpen, 
  FileText, 
  Sparkles, 
  Bell 
} from 'lucide-react';

interface QuickActionsBarProps {
  onContinueLearning: () => void;
  onExploreCourses: () => void;
  onOpenNotes: () => void;
  onOpenAI: () => void;
  onOpenNotifications: () => void;
}

export const QuickActionsBar: React.FC<QuickActionsBarProps> = ({
  onContinueLearning,
  onExploreCourses,
  onOpenNotes,
  onOpenAI,
  onOpenNotifications,
}) => {
  const actions = [
    {
      id: 'continue',
      label: 'متابعة التعلم',
      icon: <Play className="w-3.5 h-3.5 fill-current" />,
      onClick: onContinueLearning,
      isPrimary: true,
    },
    {
      id: 'explore',
      label: 'استكشاف الدورات',
      icon: <BookOpen className="w-3.5 h-3.5" />,
      onClick: onExploreCourses,
    },
    {
      id: 'notes',
      label: 'ملاحظاتي',
      icon: <FileText className="w-3.5 h-3.5" />,
      onClick: onOpenNotes,
    },
    {
      id: 'ai',
      label: 'المساعد التعليمي',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />,
      onClick: onOpenAI,
    },
    {
      id: 'notifications',
      label: 'الإشعارات',
      icon: <Bell className="w-3.5 h-3.5" />,
      onClick: onOpenNotifications,
    },
  ];

  return (
    <div 
      id="dashboard-quick-actions"
      className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-[#292521] space-y-3 select-none text-right"
    >
      <div className="flex items-center justify-between border-b border-[#292521] pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <h4 className="text-xs sm:text-sm font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            اختصارات سريعة
          </h4>
        </div>
        <span className="text-[11px] text-[#777169]">روابط الوصول السريع</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className={`p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              action.isPrimary
                ? 'bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] border-[#D6B978] shadow-md shadow-[#D6B978]/10'
                : 'bg-[#151311] hover:bg-[#181614] border-[#292521] hover:border-[#D6B978]/40 text-[#AAA39A] hover:text-[#F5F1E8]'
            }`}
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
