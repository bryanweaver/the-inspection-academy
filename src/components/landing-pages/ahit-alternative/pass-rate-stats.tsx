'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { passRateStats, passRateContent } from '@/data/landing-pages/ahit-alternative';
import { trackOutboundClick } from '@/lib/analytics';

const colorClasses = {
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
};

const textColorClasses = {
  success: 'text-green-600',
  warning: 'text-amber-600',
  danger: 'text-red-600',
};

export function PassRateStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleLinkClick = () => {
    trackOutboundClick(passRateContent.ctaLink, passRateContent.ctaText);
  };

  return (
    <Section background="gray">
      <Container>
        <div className="max-w-4xl mx-auto" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            {passRateContent.title}
          </h2>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-sm mb-8">
            <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-16 h-64">
              {passRateStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center flex-1 max-w-[100px] sm:max-w-[120px]"
                >
                  {/* Bar */}
                  <div className="w-full flex flex-col items-center justify-end h-48">
                    <div
                      className={`w-full max-w-[60px] sm:max-w-[80px] rounded-t-lg ${colorClasses[stat.color]} transition-all duration-1000 ease-out relative`}
                      style={{
                        height: isVisible ? `${(stat.value / 70) * 100}%` : '0%',
                        transitionDelay: `${index * 200}ms`,
                      }}
                    >
                      {/* Value on bar */}
                      <div
                        className={`absolute -top-7 left-1/2 -translate-x-1/2 text-base sm:text-lg font-bold transition-opacity duration-500 whitespace-nowrap ${textColorClasses[stat.color]}`}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${index * 200 + 500}ms`,
                        }}
                      >
                        {stat.value}%
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <span className="mt-3 text-xs sm:text-sm md:text-base text-gray-600 text-center font-medium leading-tight">
                    {stat.label === 'Texas Average' ? (
                      <>
                        <span className="sm:hidden">TX Avg</span>
                        <span className="hidden sm:inline">Texas Average</span>
                      </>
                    ) : (
                      stat.label
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500" />
                <span className="text-xs sm:text-sm text-gray-600">Above Average</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-500" />
                <span className="text-xs sm:text-sm text-gray-600">Texas Average</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500" />
                <span className="text-xs sm:text-sm text-gray-600">Below Average</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-gray max-w-none text-center">
            <p className="text-gray-600 mb-2">
              Texas is the only state that publicly posts school-specific pass rates.
            </p>
            <p className="text-gray-600 font-medium">
              Don&apos;t take our word for it—verify yourself.
            </p>
          </div>

          {/* CTA Link */}
          <div className="mt-6 text-center">
            <a
              href={passRateContent.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Official TREC Data
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
