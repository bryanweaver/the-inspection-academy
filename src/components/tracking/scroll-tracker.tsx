'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

const THRESHOLDS = [25, 50, 75, 100];

export function ScrollTracker() {
  const trackedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrolled = (window.scrollY / scrollHeight) * 100;

      THRESHOLDS.forEach((threshold) => {
        if (scrolled >= threshold && !trackedRef.current.has(threshold)) {
          trackedRef.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
