'use client';

import { useEffect, useState } from 'react';
import { X, FileText } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

declare global {
  interface Window {
    ml?: (command: string, ...args: unknown[]) => void;
  }
}

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

  // Re-initialize MailerLite when popup opens to render the form
  useEffect(() => {
    if (isOpen && window.ml) {
      window.ml('init');
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
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
            Wait! Get the Free Comparison Guide
          </h3>

          <p className="text-gray-600 mb-6">
            Download our Texas Home Inspection School Comparison Guide and make an informed decision on your own time.
          </p>

          {/* MailerLite Form */}
          <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />

          <button
            onClick={handleClose}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            No thanks, I&apos;ll keep researching
          </button>
        </div>
      </div>
    </div>
  );
}
