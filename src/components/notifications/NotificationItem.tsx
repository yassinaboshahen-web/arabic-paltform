import React from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  ChevronLeft, 
  Play,
  CheckCircle2,
  Bell
} from 'lucide-react';
import { StudentNotification, NotificationType } from '../../types';
import { NotificationMenu } from './NotificationMenu';

interface NotificationItemProps {
  notification: StudentNotification;
  onNotificationClick: (notif: StudentNotification) => void;
  onToggleRead: (id: string) => void;
  onDelete: (id: string) => void;
  onHideType: (type: NotificationType) => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onNotificationClick,
  onToggleRead,
  onDelete,
  onHideType,
}) => {
  const getIcon = (type: NotificationType, isUnread: boolean) => {
    switch (type) {
      case 'course':
        return <BookOpen className={`w-4 h-4 ${isUnread ? 'text-[#D6B978]' : 'text-[#AAA39A]'}`} />;
      case 'teacher':
        return <MessageSquare className={`w-4 h-4 ${isUnread ? 'text-[#D6B978]' : 'text-[#AAA39A]'}`} />;
      case 'reminder':
        return <Clock className={`w-4 h-4 ${isUnread ? 'text-[#D6B978]' : 'text-[#AAA39A]'}`} />;
      case 'system':
        return <Sparkles className={`w-4 h-4 ${isUnread ? 'text-[#D6B978]' : 'text-[#AAA39A]'}`} />;
      default:
        return <Bell className={`w-4 h-4 ${isUnread ? 'text-[#D6B978]' : 'text-[#AAA39A]'}`} />;
    }
  };

  const getCategoryLabel = (type: NotificationType) => {
    switch (type) {
      case 'course':
        return 'الدورات';
      case 'teacher':
        return 'المدرس';
      case 'reminder':
        return 'تذكير';
      case 'system':
        return 'النظام';
      default:
        return 'إشعار';
    }
  };

  return (
    <article
      id={`notification-item-${notification.id}`}
      onClick={() => onNotificationClick(notification)}
      className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-200 select-none text-right cursor-pointer ${
        !notification.read
          ? 'bg-[#151311] hover:bg-[#181614] border-[#292521] hover:border-[#D6B978]/40 shadow-lg shadow-black/40'
          : 'bg-[#0C0B0A]/80 hover:bg-[#121110] border-[#292521]/60 hover:border-[#292521] opacity-85 hover:opacity-100'
      }`}
    >
      {/* Unread Indicator Bar / Pip */}
      {!notification.read && (
        <div className="absolute top-4 right-2 w-1.5 h-6 rounded-full bg-[#D6B978] shadow-[0_0_8px_rgba(214,185,120,0.6)]" />
      )}

      <div className="flex items-start justify-between gap-3.5 pr-2 sm:pr-3">
        
        {/* Right side in RTL: Icon + Main Content */}
        <div className="flex items-start gap-3.5 sm:gap-4 flex-1 min-w-0">
          
          {/* Category Icon Emblem */}
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
            !notification.read
              ? 'bg-[#181614] border-[#D6B978]/30 shadow-md'
              : 'bg-[#121110] border-[#292521]'
          }`}>
            {getIcon(notification.type, !notification.read)}
          </div>

          {/* Text Content */}
          <div className="space-y-1.5 flex-1 min-w-0">
            
            {/* Meta Row: Category Badge + Timestamp + Unread status */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                !notification.read
                  ? 'bg-[#181614] text-[#D6B978] border-[#D6B978]/30 font-semibold'
                  : 'bg-[#121110] text-[#777169] border-[#292521]'
              }`}>
                {getCategoryLabel(notification.type)}
              </span>

              <span className="text-[11px] font-mono text-[#777169]">
                {notification.time}
              </span>

              {!notification.read && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B978]" />
              )}
            </div>

            {/* Title */}
            <h3 className={`text-xs sm:text-sm font-['Cairo',_sans-serif] leading-snug transition-colors ${
              !notification.read
                ? 'text-[#F5F1E8] font-bold group-hover:text-[#D6B978]'
                : 'text-[#AAA39A] font-medium group-hover:text-[#F5F1E8]'
            }`}>
              {notification.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-[#AAA39A] font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
              {notification.description}
            </p>

            {/* Action Button if specified */}
            {notification.actionLabel && (
              <div className="pt-1.5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6B978] group-hover:text-[#E7D29A] transition-colors">
                  <span>{notification.actionLabel}</span>
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </span>
              </div>
            )}
          </div>

        </div>

        {/* Left side in RTL: Three-dot Action Menu */}
        <div className="shrink-0 pt-0.5">
          <NotificationMenu
            isRead={notification.read}
            onToggleRead={() => onToggleRead(notification.id)}
            onDelete={() => onDelete(notification.id)}
            onHideType={() => onHideType(notification.type)}
          />
        </div>

      </div>
    </article>
  );
};
