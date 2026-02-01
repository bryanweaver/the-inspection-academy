'use client';

import { trackEnrollClick, trackScheduleCall, trackEvent } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  trackingType: 'enroll' | 'schedule' | 'phone';
  location: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({
  href,
  trackingType,
  location,
  children,
  className,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    switch (trackingType) {
      case 'enroll':
        trackEnrollClick(location);
        break;
      case 'schedule':
        trackScheduleCall(location);
        break;
      case 'phone':
        trackEvent('phone_call', { location });
        break;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
