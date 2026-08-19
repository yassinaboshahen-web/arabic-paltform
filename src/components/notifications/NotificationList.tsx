import React from 'react';
import { StudentNotification, NotificationDateGroup, NotificationType } from '../../types';
import { NotificationGroup } from './NotificationGroup';
import { NotificationEmptyState } from './NotificationEmptyState';
import { ChevronDown, Sparkles } from 'lucide-react';

interface NotificationListProps {
  notifications: StudentNotification[];
  hasMore: boolean;
  isLoadingMore?: boolean;
  onLoadMore: () => void;
  onNotificationClick: (notif: StudentNotification) => void;
  onToggleRead: (id: string) => void;
  onDelete: (id: string) => void;
  onHideType: (type: NotificationType) => void;
  isFiltered: boolean;
  onResetFilter: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  hasMore,
  isLoadingMore = false,
  onLoadMore,
  onNotificationClick,
  onToggleRead,
  onDelete,
  onHideType,
  isFiltered,
  onResetFilter,
}) => {
  if (notifications.length === 0) {
    return (
      <NotificationEmptyState
        isFiltered={isFiltered}
        onResetFilter={onResetFilter}
      />
    );
  }

  // Group notifications chronologically
  const groups: NotificationDateGroup[] = ['today', 'yesterday', 'this_week', 'older'];
  
  const groupedNotifications = groups.reduce((acc, group) => {
    acc[group] = notifications.filter((n) => n.dateGroup === group);
    return acc;
  }, {} as Record<NotificationDateGroup, StudentNotification[]>);

  return (
    <div id="notifications-list-container" className="space-y-8 select-none">
      {groups.map((groupKey) => {
        const items = groupedNotifications[groupKey];
        if (!items || items.length === 0) return null;

        return (
          <NotificationGroup
            key={groupKey}
            groupKey={groupKey}
            notifications={items}
            onNotificationClick={onNotificationClick}
            onToggleRead={onToggleRead}
            onDelete={onDelete}
            onHideType={onHideType}
          />
        );
      })}

      {/* Load More Button */}
      {hasMore ? (
        <div className="pt-4 flex justify-center">
          <button
            id="notifications-load-more-btn"
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="px-6 py-3 rounded-2xl bg-[#121110] hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 text-xs sm:text-sm font-semibold text-[#AAA39A] hover:text-[#F5F1E8] transition-all duration-200 flex items-center gap-2 shadow-lg cursor-pointer"
          >
            {isLoadingMore ? (
              <span>جاري التحميل...</span>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-[#D6B978]" />
                <span>عرض المزيد من الإشعارات السابقة</span>
              </>
            )}
          </button>
        </div>
      ) : notifications.length > 5 ? (
        <div className="pt-6 pb-2 text-center text-xs font-mono text-[#777169] flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B978]" />
          <span>تم استعراض جميع الإشعارات السابقة</span>
        </div>
      ) : null}
    </div>
  );
};
