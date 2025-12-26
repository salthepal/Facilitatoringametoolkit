import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const percentage = (timeLeft / 300) * 100;
  const isLowTime = timeLeft <= 60 && timeLeft > 0;
  const isTimeUp = timeLeft === 0;

  return (
    <div style={{ 
      background: 'var(--cc-bg-secondary)', 
      borderColor: isTimeUp ? 'var(--cc-accent-red)' : 'rgba(255,255,255,0.1)' 
    }} className="rounded-lg border p-4">
      <div className="flex items-center gap-2 mb-3">
        <div style={{ 
          background: 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)' 
        }} className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
          <Clock className="w-3.5 h-3.5 text-white" />
        </div>
        <span style={{ color: 'var(--cc-accent-orange)' }} className="text-xs uppercase tracking-wide">
          Round Timer
        </span>
      </div>

      {/* Timer Display */}
      <div className="mb-3 text-center">
        <div 
          style={{ 
            color: isTimeUp ? 'var(--cc-accent-red)' : isLowTime ? '#fbbf24' : 'var(--cc-text-main)' 
          }} 
          className="text-5xl font-mono tracking-wider leading-none mb-2"
        >
          {formatTime(timeLeft)}
        </div>
        
        {/* Progress Bar */}
        <div style={{ background: 'var(--cc-bg-primary)' }} className="h-2 rounded-full overflow-hidden">
          <div 
            style={{ 
              width: `${percentage}%`,
              background: isLowTime || isTimeUp 
                ? 'var(--cc-accent-red)' 
                : 'linear-gradient(90deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)',
              transition: 'width 1s linear'
            }} 
            className="h-full"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={handleStartPause}
          style={{
            background: isRunning 
              ? 'var(--cc-bg-primary)' 
              : 'linear-gradient(135deg, var(--cc-accent-orange) 0%, var(--cc-accent-red) 100%)',
            borderColor: isRunning ? 'rgba(255,255,255,0.2)' : 'transparent',
            color: 'white'
          }}
          className="flex-1 py-2 rounded-lg transition-all hover:opacity-90 flex items-center justify-center gap-2 border text-sm"
        >
          {isRunning ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Start</span>
            </>
          )}
        </button>
        
        <button
          onClick={handleReset}
          style={{
            background: 'var(--cc-bg-primary)',
            borderColor: 'rgba(255,255,255,0.2)',
            color: 'var(--cc-text-main)'
          }}
          className="px-4 py-2 rounded-lg transition-all hover:bg-[var(--cc-bg-secondary)] border flex items-center justify-center gap-2 text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>

      {isTimeUp && (
        <div style={{ color: 'var(--cc-accent-red)' }} className="text-center mt-2 text-xs uppercase tracking-wide animate-pulse">
          Time's Up!
        </div>
      )}
    </div>
  );
}
