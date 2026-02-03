'use client';

import { useEffect, useState } from 'react';
import { X, FileText } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const MAILERLITE_FORM_ID = '89Auv2';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves toward top of viewport
      if (e.clientY <= 10 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        trackEvent('page_view', { exit_intent_shown: true });
      }
    };

    // Only add listener on desktop
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Before you enroll anywhere, get the facts.
          </h3>

          <p className="text-gray-600 mb-6 text-left">
            This free guide provides you with information you need to know, like:
          </p>

          <ul className="text-gray-600 mb-6 text-left text-sm space-y-2">
            <li>• How to assess your learning style & experience level to find the right education system</li>
            <li>• The different types of education systems and the needs they match well with</li>
            <li>• How to check any school&apos;s official pass rate on TREC&apos;s website</li>
            <li>• The questions schools don&apos;t want you to ask them</li>
            <li>• Red flags to watch for before you enroll</li>
            <li>• A side-by-side comparison worksheet to evaluate all of the options in Texas</li>
          </ul>

          <p className="text-gray-700 mb-6 text-sm font-medium">
            Texas is the only state that publishes school pass rates. Use that to your advantage.
          </p>

          {/* MailerLite Form */}
          <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />

          <button
            onClick={handleClose}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
