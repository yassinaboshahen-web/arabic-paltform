import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Settings, 
  CheckCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LessonDetailPayload } from '../../types';

interface SecureVideoPlayerProps {
  lesson: LessonDetailPayload;
  onLessonComplete?: () => void;
  isCompleted?: boolean;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  initialTime?: number;
  isFocusMode?: boolean;
}

export const SecureVideoPlayer: React.FC<SecureVideoPlayerProps> = ({
  lesson,
  onLessonComplete,
  isCompleted = false,
  onTimeUpdate,
  initialTime = 490, // Default to ~68% of 12 minutes (720 seconds)
  isFocusMode = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Video playback simulated state
  const totalDuration = lesson.durationMinutes * 60; // in seconds
  const [currentTime, setCurrentTime] = useState<number>(initialTime);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [quality, setQuality] = useState<string>('1080p');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [showSettingsMenu, setShowSettingsMenu] = useState<boolean>(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<number>(0);
  const [isCompletedState, setIsCompletedState] = useState<boolean>(isCompleted);
  const [showWatermark, setShowWatermark] = useState<boolean>(true);

  // Sync state if lesson changes
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [lesson.id]);

  // Handle video ticker when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isLoading) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1 * playbackSpeed;
          if (next >= totalDuration) {
            setIsPlaying(false);
            setIsCompletedState(true);
            onLessonComplete?.();
            return totalDuration;
          }
          onTimeUpdate?.(next, totalDuration);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isLoading, playbackSpeed, totalDuration, onLessonComplete, onTimeUpdate]);

  // Auto hide controls when playing
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
        setShowSettingsMenu(false);
      }, 3500);
    }
  };

  // Keyboard controls listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMute();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        seekRelative(-10); // In RTL: right arrow seeks backward 10s
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        seekRelative(10); // In RTL: left arrow seeks forward 10s
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isMuted, volume]);

  const togglePlay = () => {
    if (currentTime >= totalDuration) {
      setCurrentTime(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const seekRelative = (seconds: number) => {
    setCurrentTime((prev) => {
      const next = Math.max(0, Math.min(totalDuration, prev + seconds));
      return next;
    });
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    // In RTL, the right side is 0% and left side is 100%
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const ratio = Math.max(0, Math.min(1, 1 - clickX / width));
    const targetSeconds = Math.round(ratio * totalDuration);
    setCurrentTime(targetSeconds);
  };

  const handleProgressBarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const ratio = Math.max(0, Math.min(1, 1 - clickX / width));
    setHoverTime(Math.round(ratio * totalDuration));
    setHoverPosition(clickX);
  };

  const handleProgressBarMouseLeave = () => {
    setHoverTime(null);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercentage = (currentTime / totalDuration) * 100;

  return (
    <div 
      ref={containerRef}
      id="secure-video-player-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`relative w-full aspect-video rounded-2xl lg:rounded-3xl overflow-hidden bg-[#070707] border border-[#292521] shadow-2xl transition-all select-none group ${
        isFocusMode ? 'ring-1 ring-[#D6B978]/30 shadow-[#651F2A]/20' : ''
      }`}
    >
      
      {/* 1. Cinematic Video Frame / Poster */}
      <div 
        onClick={togglePlay}
        className="absolute inset-0 cursor-pointer overflow-hidden bg-[#0C0B0A]"
      >
        <img 
          src={lesson.posterImage}
          alt={lesson.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isPlaying ? 'scale-105 filter brightness-[0.88]' : 'scale-100 filter brightness-[0.75]'
          }`}
        />

        {/* Ambient Dark Gradients & Atmospheric Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/30 to-black/60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#651F2A]/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* 2. Security Watermark Layer (Subtle Luxury Demo Watermark) */}
      {showWatermark && (
        <div className="absolute top-6 left-6 z-20 pointer-events-none opacity-40 select-none">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#070707]/60 border border-[#292521]/60 text-[10px] font-mono text-[#AAA39A] tracking-wider">
            <ShieldCheck className="w-3 h-3 text-[#D6B978]" />
            <span>أحمد محمود • yassin@example.com</span>
          </div>
        </div>
      )}

      {/* 3. Central Play / Loading Indicator when Paused */}
      <AnimatePresence>
        {(!isPlaying || isLoading) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={togglePlay}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
          >
            {isLoading ? (
              <div className="w-20 h-20 rounded-full bg-[#121110]/90 backdrop-blur-md border border-[#D6B978]/40 flex items-center justify-center text-[#D6B978] shadow-2xl">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D6B978] hover:bg-[#E7D29A] text-[#070707] flex items-center justify-center shadow-2xl shadow-[#D6B978]/25 transition-transform duration-300 hover:scale-105 group-hover:shadow-[#D6B978]/40">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                </div>
                
                <div className="mt-4 px-4 py-1.5 rounded-full bg-[#0C0B0A]/85 backdrop-blur-md border border-[#292521] text-xs font-semibold text-[#F5F1E8]">
                  انقر للتشغيل أو اضغط المسافة (Space)
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Top Overlay Badges */}
      <div className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0C0B0A]/85 backdrop-blur-md border border-[#292521]">
          <span className="w-2 h-2 rounded-full bg-[#D6B978] animate-pulse" />
          <span className="text-xs font-bold text-[#F5F1E8] font-['Cairo',_sans-serif]">
            {lesson.title}
          </span>
          <span className="text-[11px] text-[#AAA39A]">({lesson.durationLabel})</span>
        </div>
      </div>

      {/* 5. Custom Cinematic Video Controls Bar */}
      <div 
        className={`absolute bottom-0 inset-x-0 z-30 bg-gradient-to-t from-[#070707] via-[#070707]/90 to-transparent pt-12 pb-4 px-4 sm:px-6 transition-all duration-300 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        
        {/* Timeline Scrubber */}
        <div 
          ref={progressBarRef}
          onClick={handleProgressBarClick}
          onMouseMove={handleProgressBarMouseMove}
          onMouseLeave={handleProgressBarMouseLeave}
          className="relative w-full h-2 hover:h-3.5 bg-[#292521]/80 rounded-full cursor-pointer mb-3.5 transition-all group/bar"
        >
          {/* Active Played Track (Right to Left in RTL) */}
          <div 
            className="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-[#D6B978] to-[#E7D29A] rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />

          {/* Current Position Scrubber Handle */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#F5F1E8] border-2 border-[#D6B978] shadow-md transition-transform transform scale-0 group-hover/bar:scale-100"
            style={{ right: `calc(${progressPercentage}% - 7px)` }}
          />

          {/* Hover Time Tooltip */}
          {hoverTime !== null && (
            <div 
              className="absolute -top-8 -translate-x-1/2 px-2 py-0.5 rounded bg-[#121110] border border-[#292521] text-[10px] font-mono text-[#F5F1E8] shadow-lg pointer-events-none"
              style={{ left: `${hoverPosition}px` }}
            >
              {formatTime(hoverTime)}
            </div>
          )}
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between gap-4 text-xs">
          
          {/* Right Group (RTL): Play/Pause, Rewind/Forward, Volume, Time */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Play/Pause Button */}
            <button
              id="player-control-play-btn"
              onClick={togglePlay}
              className="w-9 h-9 rounded-xl bg-[#151311] hover:bg-[#D6B978] text-[#F5F1E8] hover:text-[#070707] border border-[#292521] hover:border-[#D6B978] flex items-center justify-center transition-all"
              title={isPlaying ? 'إيقاف مؤقت (Space)' : 'تشغيل (Space)'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current translate-x-0.5" />
              )}
            </button>

            {/* Rewind 10s */}
            <button
              id="player-control-rewind-btn"
              onClick={() => seekRelative(-10)}
              className="w-8 h-8 rounded-lg bg-[#151311]/80 hover:bg-[#181614] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
              title="ترجيع 10 ثوانٍ (→)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Forward 10s */}
            <button
              id="player-control-forward-btn"
              onClick={() => seekRelative(10)}
              className="w-8 h-8 rounded-lg bg-[#151311]/80 hover:bg-[#181614] text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
              title="تقديم 10 ثوانٍ (←)"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Volume & Mute */}
            <div className="flex items-center gap-2 group/vol">
              <button
                id="player-control-mute-btn"
                onClick={toggleMute}
                className="w-8 h-8 rounded-lg text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
                title={isMuted ? 'إلغاء كتم الصوت (M)' : 'كتم الصوت (M)'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-[#E7D29A]" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <input 
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setIsMuted(false);
                }}
                className="w-16 h-1 bg-[#292521] rounded-lg appearance-none cursor-pointer accent-[#D6B978] hidden sm:inline-block"
                title="مستوى الصوت"
              />
            </div>

            {/* Time Stamp */}
            <div className="text-xs font-mono text-[#AAA39A] pr-1">
              <span className="text-[#F5F1E8] font-bold">{formatTime(currentTime)}</span>
              <span className="mx-1 text-[#777169]">/</span>
              <span>{formatTime(totalDuration)}</span>
            </div>

          </div>

          {/* Left Group (RTL): Speed, Quality, Settings, Fullscreen */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Playback Speed Selector */}
            <div className="relative">
              <button
                id="player-speed-btn"
                onClick={() => {
                  const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];
                  const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                  setPlaybackSpeed(speeds[nextIdx]);
                }}
                className="px-2.5 py-1 rounded-lg bg-[#151311]/90 hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 text-xs font-mono font-bold text-[#D6B978] transition-all"
                title="سرعة التشغيل"
              >
                {playbackSpeed}x
              </button>
            </div>

            {/* Quality Indicator */}
            <button
              id="player-quality-btn"
              onClick={() => {
                const qualities = ['1080p', '720p', '480p'];
                const nextIdx = (qualities.indexOf(quality) + 1) % qualities.length;
                setQuality(qualities[nextIdx]);
              }}
              className="hidden sm:inline-flex px-2 py-1 rounded-lg bg-[#151311]/90 hover:bg-[#181614] border border-[#292521] text-[11px] font-mono text-[#AAA39A] hover:text-[#F5F1E8] transition-colors"
              title="جودة الفيديو"
            >
              {quality} HD
            </button>

            {/* Fullscreen Button */}
            <button
              id="player-control-fullscreen-btn"
              onClick={toggleFullscreen}
              className="w-8 h-8 rounded-lg bg-[#151311]/90 hover:bg-[#181614] border border-[#292521] hover:border-[#D6B978]/40 text-[#AAA39A] hover:text-[#F5F1E8] flex items-center justify-center transition-colors"
              title="ملء الشاشة (F)"
            >
              {isFullscreen ? (
                <Minimize className="w-4 h-4" />
              ) : (
                <Maximize className="w-4 h-4" />
              )}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};
