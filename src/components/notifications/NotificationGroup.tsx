import React from 'react';
import { StudentNotification, NotificationDateGroup, NotificationType } from '../../types';
import { NotificationItem } from './NotificationItem';

interface NotificationGroupProps {
  groupKey: NotificationDateGroup;
  notifications: StudentNotification[];
  onNotificationClick: (notif: StudentNotification) => void;
  onToggleRead: (id: string) => void;
  onDelete: (id: string) => void;
  onHideType: (type: NotificationType) => void;
}

export const NotificationGroup: React.FC<NotificationGroupProps> = ({
  groupKey,
  notifications,
  onNotificationClick,
  onToggleRead,
  onDelete,
  onHideType,
}) => {
  if (notifications.length === 0) return null;

  const getGroupTitle = (group: NotificationDateGroup) => {
    switch (group) {
      case 'today':
        return 'اليوم';
      case 'yesterday':
        return 'أمس';
      case 'this_week':
        return 'هذا الأسبوع';
      case 'older':
        return 'أقدم';
      default:
        return '';
    }
  };

  return (
    <section className="space-y-3.5 select-none text-right">
      {/* Editorial Group Header */}
      <div className="flex items-center gap-3 pr-1">
        <span className="text-xs font-bold font-mono text-[#D6B978] tracking-wider">
          {getGroupTitle(groupKey)}
        </span>
        <div className="h-px bg-gradient-to-l from-transparent via-[#292521] to-[#292521] flex-1" />
        <span className="text-[10px] font-mono text-[#777169]">
          {notifications.length} {notifications.length === 1 ? 'إشعار' : 'إشعارات'}
        </span>
      </div>

      {/* Notifications in this group */}
      <div className="space-y-3">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onNotificationClick={onNotificationClick}
            onToggleRead={onToggleRead}
            onDelete={onDelete}
            onHideType={onHideType}
          />
        ))}
      </div>
    </section>
  );
};
