import React, { useState, useEffect, useMemo } from 'react';
import { 
  INITIAL_NOTIFICATIONS, 
  MORE_NOTIFICATIONS 
} from '../data/notificationsData';
import { StudentNotification, NotificationType } from '../types';

import { NotificationsHeader } from '../components/notifications/NotificationsHeader';
import { NotificationFilters, FilterCategory } from '../components/notifications/NotificationFilters';
import { NotificationList } from '../components/notifications/NotificationList';
import { TeacherMessageModal } from '../components/notifications/TeacherMessageModal';
import { SystemUpdateModal } from '../components/notifications/SystemUpdateModal';

interface NotificationsPageProps {
  onNavigateToCourse: (courseId: string) => void;
  onNavigateToLesson: (lessonId: string, courseId?: string) => void;
  onNavigateToDashboard: () => void;
  onNavigateHome: () => void;
  onUnreadCountChange?: (count: number) => void;
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({
  onNavigateToCourse,
  onNavigateToLesson,
  onNavigateToDashboard,
  onNavigateHome,
  onUnreadCountChange,
}) => {
  const [notifications, setNotifications] = useState<StudentNotification[]>(INITIAL_NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [hiddenTypes, setHiddenTypes] = useState<NotificationType[]>([]);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Modals state
  const [selectedTeacherNotification, setSelectedTeacherNotification] = useState<StudentNotification | null>(null);
  const [selectedSystemNotification, setSelectedSystemNotification] = useState<StudentNotification | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Update parent unread count
  const unreadCount = useMemo(() => {
    return notifications.filter((n) => !n.read && !hiddenTypes.includes(n.type)).length;
  }, [notifications, hiddenTypes]);

  useEffect(() => {
    onUnreadCountChange?.(unreadCount);
  }, [unreadCount, onUnreadCountChange]);

  // Counts for filter tabs
  const filterCounts = useMemo(() => {
    const visible = notifications.filter((n) => !hiddenTypes.includes(n.type));
    return {
      all: visible.length,
      unread: visible.filter((n) => !n.read).length,
      course: visible.filter((n) => n.type === 'course').length,
      teacher: visible.filter((n) => n.type === 'teacher').length,
      system: visible.filter((n) => n.type === 'system').length,
    };
  }, [notifications, hiddenTypes]);

  // Filtered notifications list
  const filteredNotifications = useMemo(() => {
    return notifications.filter((n) => {
      if (hiddenTypes.includes(n.type)) return false;
      if (activeFilter === 'all') return true;
      if (activeFilter === 'unread') return !n.read;
      if (activeFilter === 'course') return n.type === 'course';
      if (activeFilter === 'teacher') return n.type === 'teacher';
      if (activeFilter === 'system') return n.type === 'system';
      return true;
    });
  }, [notifications, activeFilter, hiddenTypes]);

  // Handlers
  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('تم تحديد جميع الإشعارات كمقروءة.');
  };

  const handleToggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const handleDeleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    showToast('تم حذف الإشعار بنجاح.');
  };

  const handleHideType = (type: NotificationType) => {
    setHiddenTypes((prev) => [...prev, type]);
    showToast('تم إخفاء هذا النوع من الإشعارات.');
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setNotifications((prev) => [...prev, ...MORE_NOTIFICATIONS]);
      setHasLoadedMore(true);
      setIsLoadingMore(false);
      showToast('تم تحميل الإشعارات السابقة.');
    }, 400);
  };

  const handleNotificationClick = (notif: StudentNotification) => {
    // Automatically mark as read
    if (!notif.read) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n))
      );
    }

    // Trigger specific action based on type
    switch (notif.type) {
      case 'course':
        if (notif.lessonId && notif.courseId) {
          onNavigateToLesson(notif.lessonId, notif.courseId);
        } else if (notif.courseId) {
          onNavigateToCourse(notif.courseId);
        } else {
          onNavigateToCourse('master-grammar');
        }
        break;
      case 'teacher':
        setSelectedTeacherNotification(notif);
        break;
      case 'reminder':
        if (notif.lessonId && notif.courseId) {
          onNavigateToLesson(notif.lessonId, notif.courseId);
        } else {
          onNavigateToDashboard();
        }
        break;
      case 'system':
        setSelectedSystemNotification(notif);
        break;
      default:
        break;
    }
  };

  return (
    <div 
      id="student-notifications-center"
      className="min-h-screen bg-[#070707] text-[#F5F1E8] pt-24 sm:pt-28 pb-24 selection:bg-[#D6B978]/30 selection:text-[#F5F1E8] relative overflow-x-hidden"
    >
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#151311] border border-[#D6B978]/50 text-xs sm:text-sm font-semibold text-[#F5F1E8] shadow-2xl flex items-center gap-2.5 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#D6B978]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Centered Premium Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* 1. Refined Page Header */}
        <NotificationsHeader
          unreadCount={unreadCount}
          totalCount={notifications.length}
          onMarkAllAsRead={handleMarkAllAsRead}
        />

        {/* 2. Clean Category Filters */}
        <NotificationFilters
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          counts={filterCounts}
        />

        {/* 3. Notification Timeline / List */}
        <NotificationList
          notifications={filteredNotifications}
          hasMore={!hasLoadedMore}
          isLoadingMore={isLoadingMore}
          onLoadMore={handleLoadMore}
          onNotificationClick={handleNotificationClick}
          onToggleRead={handleToggleRead}
          onDelete={handleDeleteNotification}
          onHideType={handleHideType}
          isFiltered={activeFilter !== 'all'}
          onResetFilter={() => setActiveFilter('all')}
        />

      </main>

      {/* Interactive Modals for Teacher Messages & System Updates */}
      <TeacherMessageModal
        isOpen={!!selectedTeacherNotification}
        onClose={() => setSelectedTeacherNotification(null)}
        notification={selectedTeacherNotification}
      />

      <SystemUpdateModal
        isOpen={!!selectedSystemNotification}
        onClose={() => setSelectedSystemNotification(null)}
        notification={selectedSystemNotification}
        onExploreFeatures={onNavigateToDashboard}
      />
    </div>
  );
};
