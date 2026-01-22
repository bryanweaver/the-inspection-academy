import { MapPin, Building2 } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { texasKeywordsContent } from '@/data/landing-pages/ahit-alternative';

export function TexasKeywordsSection() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {texasKeywordsContent.title}
            </h2>
            <p className="text-gray-600">
              {texasKeywordsContent.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* AHIT Texas */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-gray-500" />
                </div>
                <h3 className="font-bold text-gray-900">
                  {texasKeywordsContent.ahitApproach.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {texasKeywordsContent.ahitApproach.text}
              </p>
            </div>

            {/* TIA Texas */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900">
                  {texasKeywordsContent.tiaApproach.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm">
                {texasKeywordsContent.tiaApproach.text}
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              {texasKeywordsContent.conclusion}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
