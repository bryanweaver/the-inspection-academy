import { CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout';

const passRates = [
  {
    label: 'TIA First-Time Pass Rate',
    rate: 67,
    color: 'bg-green-500',
    highlight: true,
    badge: '#2 in Texas',
  },
  {
    label: 'Texas State Average',
    rate: 56.8,
    color: 'bg-amber-400',
  },
  {
    label: 'Traditional School Average',
    rate: 58.79,
    color: 'bg-red-400',
  },
];

export function TRECData() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Students Pass at 67%—#2 in Texas
            </h2>
            <p className="text-xl text-gray-600">
              Real results verified by the Texas Real Estate Commission
            </p>
          </div>

          {/* Pass Rate Visualization */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="space-y-6">
              {passRates.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-gray-700 ${item.highlight ? 'font-semibold' : ''}`}>
                      {item.label}
                    </span>
                    <div className="flex items-center">
                      <span className={`text-2xl font-bold ${item.highlight ? 'text-green-600' : 'text-gray-700'}`}>
                        {item.rate}%
                      </span>
                      {item.badge && (
                        <span className="ml-3 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkmarks */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-800">Above State Average</span>
            </div>
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-800">Above Traditional School Average</span>
            </div>
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-800">#2 Highest Pass Rate in Texas</span>
            </div>
          </div>

          {/* Verify Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Texas is the only state that publicly posts school-specific pass rates.
              <br />
              Don&apos;t take our word for it—verify yourself.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.trec.texas.gov/education/education-provider-exam-passage-rates-inspectors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Official TREC Data
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
