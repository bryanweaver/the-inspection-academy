import Link from 'next/link';
import { Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

export function MoneyBackGuarantee() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border-2 border-green-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Pass-or-Get-Your-Money-Back Guarantee
              </h2>
              <p className="text-xl text-gray-700">
                Pass your licensing exam on your first attempt — or we refund every dollar you paid.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                Complete our training, pass five sample exams on Bulletproof Test Prep, take the state exam, and if you don&apos;t pass on your first try, we give you your money back.
              </p>
              <p className="text-gray-900 font-semibold">
                No fine print. No games. Just a guarantee backed by real results.
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                We&apos;re this confident because our system works.{' '}
                <span className="font-bold text-gray-900">67% of our students pass on the first try—#2 in Texas.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/money-back-guarantee">
                  See Full Terms
                </Link>
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold" asChild>
                <a href={SITE_CONFIG.links.courseCatalog} target="_blank" rel="noopener noreferrer">
                  Start Your Training
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
