'use client';

import { Check, X, Users, User, Clock, Handshake } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { fieldExperienceContent } from '@/data/landing-pages/ahit-alternative';

export function FieldExperienceSection() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {fieldExperienceContent.title}
            </h2>
            <p className="text-lg text-primary font-medium mb-4">
              {fieldExperienceContent.subtitle}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {fieldExperienceContent.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* AHIT Approach */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {fieldExperienceContent.ahitApproach.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {fieldExperienceContent.ahitApproach.description}
                </p>
                <ul className="space-y-3">
                  {fieldExperienceContent.ahitApproach.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* TIA Approach */}
            <Card className="border-2 border-green-500 bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {fieldExperienceContent.tiaApproach.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {fieldExperienceContent.tiaApproach.description}
                </p>
                <ul className="space-y-3">
                  {fieldExperienceContent.tiaApproach.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Cost Comparison */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Cost comparison:</span>{' '}
                {fieldExperienceContent.costComparison.replace('Cost comparison: ', '')}
              </p>
            </div>
          </div>

          {/* Network Note */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-green-700 font-medium">
              <Handshake className="h-5 w-5" />
              <span>{fieldExperienceContent.networkNote}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
