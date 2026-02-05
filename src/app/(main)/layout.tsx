import { Header, Footer, StickyCTA } from '@/components/layout';
import { AnalyticsProvider } from '@/components/providers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnalyticsProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <StickyCTA />
    </AnalyticsProvider>
  );
}
