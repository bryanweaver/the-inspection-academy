import Script from 'next/script';
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
      {/* MailerLite Universal */}
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2068922');`}
      </Script>
      <LandingPageHeader />
      <main className="min-h-screen">{children}</main>
      <LandingPageFooter />
      <ScrollTracker />
    </AnalyticsProvider>
  );
}
