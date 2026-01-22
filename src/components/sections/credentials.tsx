import { GraduationCap, Award, Shield, Users } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { SITE_CONFIG } from '@/lib/constants';

const credentials = [
  {
    icon: GraduationCap,
    title: "Master's in Education",
    description:
      'Our curriculum is designed by an educator with advanced degrees in education—not just inspectors who know the trade.',
  },
  {
    icon: Award,
    title: 'Licensed TX Inspectors',
    description:
      'Our instructional team includes licensed Texas professional inspectors with real-world experience.',
  },
  {
    icon: Shield,
    title: 'TREC Approved',
    description: `Official TREC-approved provider #${SITE_CONFIG.trecNumber}. All courses meet Texas licensing requirements.`,
  },
  {
    icon: Users,
    title: 'Adult Learning Theory',
    description:
      'Built on proven educational research about how adults actually learn—not outdated classroom methods.',
  },
];

export function Credentials() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Trust The Inspection Academy?
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re educators first, built on credentials that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((credential) => (
              <div
                key={credential.title}
                className="flex items-start p-6 bg-gray-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-5">
                  <credential.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-gray-600">{credential.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700">
                TREC Approved Provider{' '}
                <strong className="text-primary">#{SITE_CONFIG.trecNumber}</strong>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
