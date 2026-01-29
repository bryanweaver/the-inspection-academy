import Link from 'next/link';
import {
  TrendingUp,
  DollarSign,
  MapPin,
  Target,
  CreditCard,
  Shield,
} from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { sixReasons } from '@/data/landing-pages/ahit-alternative';

const iconMap = {
  TrendingUp,
  DollarSign,
  MapPin,
  Target,
  CreditCard,
  Shield,
};

export function SixReasons() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            6 Reasons to Choose TIA Over AHIT
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            For Texas Home Inspection Training
          </p>

          <div className="space-y-6">
            {sixReasons.map((reason) => {
              const Icon = iconMap[reason.icon as keyof typeof iconMap];
              const isGuarantee = reason.id === 'money-back-guarantee';

              return (
                <Card key={reason.id} className="overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon and Number */}
                      <div className="flex items-center gap-4 md:flex-col md:items-center md:w-24 flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {reason.number}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {isGuarantee ? (
                            <>
                              <Link href="/money-back-guarantee" className="terms-link">{reason.title}</Link>
                              <Link href="/money-back-guarantee" className="text-green-600 hover:text-green-700 align-super text-sm ml-0.5">*</Link>
                            </>
                          ) : (
                            reason.title
                          )}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {reason.subtitle}
                        </p>

                        {reason.stats && (
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                              <div className="text-xs text-green-600 font-medium mb-1">
                                TIA
                              </div>
                              <div className="text-sm text-gray-700">
                                {isGuarantee ? (
                                  <>
                                    <Link href="/money-back-guarantee" className="terms-link">{reason.stats.tia}</Link>
                                    <Link href="/money-back-guarantee" className="text-green-600 hover:text-green-700 align-super text-xs ml-0.5">*</Link>
                                  </>
                                ) : (
                                  reason.stats.tia
                                )}
                              </div>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                              <div className="text-xs text-gray-500 font-medium mb-1">
                                AHIT
                              </div>
                              <div className="text-sm text-gray-700">
                                {reason.stats.ahit}
                              </div>
                            </div>
                          </div>
                        )}

                        {reason.stats?.difference && (
                          <p className="text-sm font-medium text-green-600 mb-3">
                            {reason.stats.difference}
                          </p>
                        )}

                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
