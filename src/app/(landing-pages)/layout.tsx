import { LandingPageHeader, LandingPageFooter } from '@/components/layout';
import { AnalyticsProvider } from '@/components/providers';
import { ScrollTracker } from '@/components/tracking';

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnalyticsProvider>
      <LandingPageHeader />
      <main className="min-h-screen">{children}</main>
      <LandingPageFooter />
      <ScrollTracker />
    </AnalyticsProvider>
  );
}
