import React from 'react';

export type FilterCategory = 'all' | 'unread' | 'course' | 'teacher' | 'system';

interface NotificationFiltersProps {
  activeFilter: FilterCategory;
  onSelectFilter: (filter: FilterCategory) => void;
  counts: {
    all: number;
    unread: number;
    course: number;
    teacher: number;
    system: number;
  };
}

export const NotificationFilters: React.FC<NotificationFiltersProps> = ({
  activeFilter,
  onSelectFilter,
  counts,
}) => {
  const tabs: { id: FilterCategory; label: string; count?: number }[] = [
    { id: 'all', label: 'الكل', count: counts.all },
    { id: 'unread', label: 'غير المقروءة', count: counts.unread },
    { id: 'course', label: 'الدورات', count: counts.course },
    { id: 'teacher', label: 'المدرس', count: counts.teacher },
    { id: 'system', label: 'النظام', count: counts.system },
  ];

  return (
    <div 
      id="notifications-filters"
      className="border-b border-[#292521] pb-px select-none"
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-right">
        {tabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectFilter(tab.id)}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'text-[#F5F1E8] bg-[#151311] border border-[#292521]'
                  : 'text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#121110]'
              }`}
            >
              <span>{tab.label}</span>
              
              {typeof tab.count === 'number' && (
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? 'bg-[#181614] text-[#D6B978] border border-[#D6B978]/30'
                    : 'bg-[#181614] text-[#777169] border border-[#292521]'
                }`}>
                  {tab.count}
                </span>
              )}

              {/* Champagne Active Indicator Underline */}
              {isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D6B978] rounded-full shadow-[0_0_8px_rgba(214,185,120,0.5)]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
