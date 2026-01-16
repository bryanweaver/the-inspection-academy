import { AlertTriangle } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { costOfFailureContent } from '@/data/landing-pages/ahit-alternative';

export function CostOfFailureSection() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            {costOfFailureContent.title}
          </h2>

          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  {costOfFailureContent.description}
                </p>
              </div>

              {/* Cost List */}
              <ul className="space-y-3 mb-6 ml-4">
                {costOfFailureContent.costs.map((cost, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                    {cost}
                  </li>
                ))}
              </ul>

              {/* Total Cost */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700 font-semibold text-lg text-center">
                  {costOfFailureContent.totalCost}
                </p>
              </div>

              {/* Conclusion */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium text-center">
                  {costOfFailureContent.conclusion}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
