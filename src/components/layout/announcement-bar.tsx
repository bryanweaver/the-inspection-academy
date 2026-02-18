import { Gift } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white">
      <a
        href={SITE_CONFIG.links.scholarship}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 px-4 text-center text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        <span className="inline-flex items-center gap-2">
          <Gift className="h-4 w-4 flex-shrink-0" />
          <span>
            Win <strong>$2,495</strong> in free home inspector training — Enter our Q1 2026 scholarship!
          </span>
          <span className="hidden sm:inline underline">Apply now &rarr;</span>
        </span>
      </a>
    </div>
  );
}
