import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView?: 'home' | 'explore' | 'course' | 'lesson' | 'dashboard' | 'profile' | 'notifications';
  onNavigate?: (view: 'home' | 'explore' | 'course' | 'lesson' | 'dashboard' | 'profile' | 'notifications') => void;
  onOpenSearch: () => void;
  onOpenAI: () => void;
  onSelectCategory?: (categoryId: string) => void;
  onOpenCoursePreview?: (courseId: string) => void;
  unreadCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView = 'home',
  onNavigate,
  onOpenSearch, 
  onOpenAI,
  unreadCount = 3,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const activeNav = currentView;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      onNavigate?.('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setIsMoreDropdownOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070707]/90 backdrop-blur-md border-b border-[#292521] shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3.5'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Right side in RTL: Brand Identity */}
            <div className="flex items-center gap-8">
              <a 
                href="#hero" 
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                className="flex items-center gap-3 group focus:outline-none rounded-lg"
              >
                {/* Custom Monogram Emblem */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#181614] to-[#0C0B0A] border border-[#292521] group-hover:border-[#D6B978]/60 flex items-center justify-center transition-colors shadow-inner">
                  <span className="font-['Amiri',_serif] text-xl font-bold text-[#D6B978]">
                    ض
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-[#F5F1E8] font-['Cairo',_sans-serif] group-hover:text-[#D6B978] transition-colors">
                    أكاديمية أحمد محمود
                  </span>
                  <span className="text-[11px] text-[#AAA39A] font-medium tracking-wide">
                    تعليم اللغة العربية الفصحى
                  </span>
                </div>
              </a>

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2 mr-4" aria-label="التنقل الرئيسي">
                <button
                  id="nav-link-home"
                  onClick={() => {
                    onNavigate?.('home');
                    if (currentView === 'home') {
                      scrollToSection('hero');
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    activeNav === 'home'
                      ? 'text-[#F5F1E8] bg-[#151311] border border-[#292521]'
                      : 'text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#121110]'
                  }`}
                >
                  <span>الرئيسية</span>
                  {activeNav === 'home' && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D6B978]" />
                  )}
                </button>

                <button
                  id="nav-link-explore"
                  onClick={() => {
                    onNavigate?.('explore');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    activeNav === 'explore'
                      ? 'text-[#F5F1E8] bg-[#151311] border border-[#292521]'
                      : 'text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#121110]'
                  }`}
                >
                  <span>استكشف</span>
                  {activeNav === 'explore' && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D6B978]" />
                  )}
                </button>

                <button
                  id="nav-link-dashboard"
                  onClick={() => {
                    onNavigate?.('dashboard');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    activeNav === 'dashboard'
                      ? 'text-[#D6B978] bg-[#151311] border border-[#D6B978]/40 shadow-inner'
                      : 'text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#121110]'
                  }`}
                >
                  <span>لوحة الطالب</span>
                  {activeNav === 'dashboard' && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D6B978]" />
                  )}
                </button>

                <button
                  id="nav-link-profile"
                  onClick={() => {
                    onNavigate?.('profile');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    activeNav === 'profile'
                      ? 'text-[#D6B978] bg-[#151311] border border-[#D6B978]/40 shadow-inner'
                      : 'text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#121110]'
                  }`}
                >
                  <span>ملفي</span>
                  {activeNav === 'profile' && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D6B978]" />
                  )}
                </button>

                <button
                  id="nav-link-journey"
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => {
                      scrollToSection('learning-journey');
                    }, 50);
                  }}
                  className="relative px-3.5 py-1.5 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#121110] transition-all"
                >
                  <span>المسارات</span>
                </button>

                {/* 'المزيد' dropdown */}
                <div className="relative">
                  <button
                    id="nav-more-button"
                    onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                    onBlur={() => setTimeout(() => setIsMoreDropdownOpen(false), 200)}
                    className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#121110] transition-all"
                    aria-expanded={isMoreDropdownOpen}
                  >
                    <span>المزيد</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180 text-[#D6B978]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isMoreDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 bg-[#121110] border border-[#292521] rounded-xl shadow-2xl p-2 z-50 text-right backdrop-blur-xl"
                      >
                        <button
                          onClick={() => scrollToSection('teacher-story')}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#F5F1E8] hover:bg-[#181614] hover:text-[#D6B978] rounded-lg transition-colors"
                        >
                          <User className="w-4 h-4 text-[#D6B978]" />
                          <span>نبذة عن الأستاذ أحمد</span>
                        </button>
                        <button
                          onClick={() => scrollToSection('learning-experience')}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#F5F1E8] hover:bg-[#181614] hover:text-[#D6B978] rounded-lg transition-colors"
                        >
                          <GraduationCap className="w-4 h-4 text-[#D6B978]" />
                          <span>مميزات التجربة التعليمية</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsMoreDropdownOpen(false);
                            onOpenAI();
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#F5F1E8] hover:bg-[#181614] hover:text-[#D6B978] rounded-lg transition-colors"
                        >
                          <Sparkles className="w-4 h-4 text-[#D6B978]" />
                          <span>المساعد الذكي</span>
                        </button>
                        <div className="h-px bg-[#292521] my-1" />
                        <button
                          onClick={() => scrollToSection('footer')}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#181614] rounded-lg transition-colors"
                        >
                          <HelpCircle className="w-4 h-4 text-[#777169]" />
                          <span>الأسئلة الشائعة والمساعدة</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </div>

            {/* Left side in RTL: Utility Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                id="navbar-search-btn"
                onClick={onOpenSearch}
                aria-label="بحث في الدورات والدروس"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#121110] border border-[#292521] hover:border-[#D6B978]/50 text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Notification Button */}
              <button
                id="navbar-notification-btn"
                onClick={() => {
                  onNavigate?.('notifications');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="مركز الإشعارات"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border transition-colors flex items-center justify-center relative cursor-pointer ${
                  activeNav === 'notifications'
                    ? 'bg-[#181614] border-[#D6B978]/60 text-[#D6B978]'
                    : 'bg-[#121110] border-[#292521] hover:border-[#D6B978]/50 text-[#AAA39A] hover:text-[#F5F1E8]'
                }`}
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#D6B978] text-[#070707] text-[10px] font-bold font-mono flex items-center justify-center shadow-md shadow-[#D6B978]/20 animate-fade-in">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Primary Action Button (Sign in / Account) */}
              <button
                id="navbar-account-btn"
                onClick={() => {
                  onNavigate?.('profile');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#070707] bg-[#D6B978] hover:bg-[#E7D29A] shadow-[0_2px_14px_rgba(214,185,120,0.18)] transition-all active:scale-95 cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>حساب الطالب (ياسين)</span>
              </button>

              {/* Mobile Menu Trigger */}
              <button
                id="navbar-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="القائمة الجانبية"
                className="md:hidden w-9 h-9 rounded-xl bg-[#121110] border border-[#292521] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0C0B0A] border-b border-[#292521] px-4 pt-3 pb-6 overflow-hidden"
            >
              <div className="flex flex-col gap-2 text-right">
                <button
                  onClick={() => {
                    onNavigate?.('home');
                    setIsMobileMenuOpen(false);
                    if (currentView === 'home') {
                      scrollToSection('hero');
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#F5F1E8] hover:bg-[#151311]"
                >
                  الرئيسية
                </button>
                <button
                  onClick={() => {
                    onNavigate?.('dashboard');
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#151311]"
                >
                  لوحة الطالب
                </button>
                <button
                  onClick={() => {
                    onNavigate?.('profile');
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#151311]"
                >
                  ملفي الشخصي (ياسين)
                </button>
                <button
                  onClick={() => {
                    onNavigate?.('notifications');
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#D6B978] hover:text-[#E7D29A] hover:bg-[#151311] flex items-center justify-between"
                >
                  <span>الإشعارات</span>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#D6B978] text-[#070707] text-xs font-bold font-mono">
                      {unreadCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => {
                    onNavigate?.('explore');
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#151311]"
                >
                  استكشف الدورات
                </button>
                <button
                  onClick={() => {
                    onNavigate?.('home');
                    setIsMobileMenuOpen(false);
                    setTimeout(() => scrollToSection('learning-journey'), 50);
                  }}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#151311]"
                >
                  المسارات التعليمية
                </button>
                <button
                  onClick={() => scrollToSection('featured-course')}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#151311]"
                >
                  الدورة الرئيسية المميزة
                </button>
                <button
                  onClick={() => scrollToSection('teacher-story')}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#AAA39A] hover:text-[#F5F1E8] hover:bg-[#151311]"
                >
                  عن الأستاذ أحمد محمود
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAI();
                  }}
                  className="w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium text-[#D6B978] hover:bg-[#151311]"
                >
                  المساعد الذكي
                </button>

                <div className="pt-3 mt-2 border-t border-[#292521] flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenSearch();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#121110] border border-[#292521] text-xs font-medium text-[#F5F1E8]"
                  >
                    <Search className="w-4 h-4 text-[#D6B978]" />
                    <span>بحث سريع في المنصة</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToSection('final-cta');
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#D6B978] text-xs font-semibold text-[#070707]"
                  >
                    <User className="w-4 h-4" />
                    <span>تسجيل الدخول للأكاديمية</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
