import React from 'react';
import { Bell, RefreshCw } from 'lucide-react';

interface NotificationEmptyStateProps {
  isFiltered?: boolean;
  onResetFilter?: () => void;
}

export const NotificationEmptyState: React.FC<NotificationEmptyStateProps> = ({
  isFiltered = false,
  onResetFilter,
}) => {
  return (
    <div 
      id="notifications-empty-state"
      className="p-12 sm:p-16 rounded-3xl bg-gradient-to-b from-[#121110] to-[#0C0B0A] border border-[#292521] text-center space-y-4 select-none my-6"
    >
      <div className="w-14 h-14 rounded-3xl bg-[#181614] border border-[#292521] flex items-center justify-center mx-auto text-[#777169] shadow-inner">
        <Bell className="w-6 h-6 text-[#D6B978]/60" />
      </div>

      <div className="space-y-1.5 max-w-sm mx-auto">
        <h3 className="text-base sm:text-lg font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
          {isFiltered ? 'لا توجد إشعارات في هذا التصنيف' : 'لا توجد إشعارات جديدة'}
        </h3>
        <p className="text-xs sm:text-sm text-[#AAA39A] font-light leading-relaxed">
          {isFiltered 
            ? 'يمكنك التبديل إلى تصنيف آخر أو استعراض كل الإشعارات الواردة.'
            : 'ستظهر هنا التحديثات المهمة المتعلقة برحلتك التعليمية وملاحظات المعلم.'}
        </p>
      </div>

      {isFiltered && onResetFilter && (
        <div className="pt-2">
          <button
            onClick={onResetFilter}
            className="px-4 py-2 rounded-xl bg-[#181614] hover:bg-[#292521] border border-[#292521] hover:border-[#D6B978]/40 text-xs font-semibold text-[#D6B978] transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>عرض كل الإشعارات</span>
          </button>
        </div>
      )}
    </div>
  );
};
