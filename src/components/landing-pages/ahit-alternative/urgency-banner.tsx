'use client';

import { useEffect, useState } from 'react';
import { Clock, Users } from 'lucide-react';
import { urgencyContent } from '@/data/landing-pages/ahit-alternative';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(urgencyContent.nextCohortDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(urgencyContent.nextCohortDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-amber-500 text-white py-3">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
          <div className="flex items-center gap-2 font-medium">
            <Clock className="h-4 w-4" />
            <span>{urgencyContent.headline}</span>
          </div>
        </div>
      </div>
    );
  }

  // If countdown has passed, don't show
  if (!timeLeft) {
    return null;
  }

  return (
    <div className="bg-amber-500 text-white py-3">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
        {/* Headline */}
        <div className="flex items-center gap-2 font-medium">
          <Clock className="h-4 w-4" />
          <span>{urgencyContent.headline}</span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1">
          <div className="bg-white/20 rounded px-2 py-1 min-w-[40px] text-center">
            <span className="font-bold">{timeLeft.days}</span>
            <span className="text-xs ml-1">d</span>
          </div>
          <span>:</span>
          <div className="bg-white/20 rounded px-2 py-1 min-w-[40px] text-center">
            <span className="font-bold">{timeLeft.hours}</span>
            <span className="text-xs ml-1">h</span>
          </div>
          <span>:</span>
          <div className="bg-white/20 rounded px-2 py-1 min-w-[40px] text-center">
            <span className="font-bold">{timeLeft.minutes}</span>
            <span className="text-xs ml-1">m</span>
          </div>
          <span className="hidden sm:inline">:</span>
          <div className="hidden sm:block bg-white/20 rounded px-2 py-1 min-w-[40px] text-center">
            <span className="font-bold">{timeLeft.seconds}</span>
            <span className="text-xs ml-1">s</span>
          </div>
        </div>

        {/* Spots Left */}
        {urgencyContent.spotsLeft && (
          <div className="flex items-center gap-2 text-amber-100">
            <Users className="h-4 w-4" />
            <span>
              <strong>{urgencyContent.spotsLeft}</strong> {urgencyContent.spotsText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
