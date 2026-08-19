import React from 'react';
import { Bell, CheckCheck, Sparkles } from 'lucide-react';

interface NotificationsHeaderProps {
  unreadCount: number;
  totalCount: number;
  onMarkAllAsRead: () => void;
}

export const NotificationsHeader: React.FC<NotificationsHeaderProps> = ({
  unreadCount,
  totalCount,
  onMarkAllAsRead,
}) => {
  return (
    <header 
      id="notifications-header"
      className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#151311] via-[#121110] to-[#0C0B0A] border border-[#292521] shadow-2xl relative overflow-hidden select-none text-right"
    >
      {/* Subtle atmospheric Burgundy/Champagne glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#651F2A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#D6B978]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top subtle golden line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D6B978]/60 to-transparent" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        
        {/* Right side in RTL: Title & Supporting Text */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#181614] border border-[#D6B978]/30 flex items-center justify-center text-[#D6B978] shadow-inner">
              <Bell className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#F5F1E8] font-['Cairo',_sans-serif] tracking-tight">
                الإشعارات
              </h1>

              {/* Dynamic Unread Badge */}
              {unreadCount > 0 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181614] border border-[#D6B978]/40 text-[#D6B978] text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6B978] animate-pulse" />
                  <span>{unreadCount} غير مقروءة</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121110] border border-[#292521] text-[#AAA39A] text-xs">
                  <Sparkles className="w-3 h-3 text-[#D6B978]" />
                  <span>أنت على اطلاع بكل شيء</span>
                </span>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#AAA39A] font-light max-w-xl pr-1">
            ابقَ على اطلاع بكل ما يهم رحلتك التعليمية ومستجدات المقررات ورسائل المدرس.
          </p>
        </div>

        {/* Left side in RTL: Action Button */}
        <div className="self-start sm:self-center">
          <button
            id="mark-all-read-btn"
            onClick={onMarkAllAsRead}
            disabled={unreadCount === 0}
            className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              unreadCount > 0
                ? 'bg-[#181614] hover:bg-[#292521] border-[#292521] hover:border-[#D6B978]/50 text-[#F5F1E8] shadow-md hover:text-[#D6B978]'
                : 'bg-[#0C0B0A] border-[#292521]/50 text-[#777169] cursor-not-allowed opacity-60'
            }`}
          >
            <CheckCheck className={`w-4 h-4 ${unreadCount > 0 ? 'text-[#D6B978]' : 'text-[#777169]'}`} />
            <span>تحديد الكل كمقروء</span>
          </button>
        </div>

      </div>
    </header>
  );
};
