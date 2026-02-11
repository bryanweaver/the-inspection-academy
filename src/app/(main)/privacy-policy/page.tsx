import type { Metadata } from 'next';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Inspection Academy',
  description: 'Privacy Policy for The Inspection Academy. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.theinspectionacademy.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tableOfContents = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'how-we-share', title: '4. How We Share Your Information' },
  { id: 'your-rights', title: '5. Your Rights and Choices' },
  { id: 'data-retention', title: '6. Data Retention' },
  { id: 'data-security', title: '7. Data Security' },
  { id: 'childrens-privacy', title: "8. Children's Privacy" },
  { id: 'third-party', title: '9. Third-Party Links' },
  { id: 'changes', title: '10. Changes to This Policy' },
  { id: 'contact', title: '11. Contact Us' },
  { id: 'consent', title: '12. Consent and Acceptance' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-8" background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Privacy Policy
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Effective: December 17, 2025 | Last Updated: December 17, 2025
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white" className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[250px_1fr] gap-8">

              {/* Table of Contents - Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                    Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="space-y-12 [&_section]:scroll-mt-24">

                {/* 1. Introduction */}
                <section id="introduction">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    1. Introduction
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Welcome to The Inspection Academy LLC (&quot;TIA,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information.
                  </p>
                  <p className="text-gray-600 mb-4">This Privacy Policy explains our practices regarding information we collect when you:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>Visit our website at theinspectionacademy.com</li>
                    <li>Enroll in our courses through our Learning Management System (LMS)</li>
                    <li>Apply for scholarships or promotions</li>
                    <li>Subscribe to our email communications</li>
                    <li>Contact us for support or information</li>
                  </ul>
                  <p className="text-gray-600 mb-6">
                    By using our services, you agree to the collection and use of information as described in this Privacy Policy.
                  </p>

                  <Card className="bg-gray-50 border-0">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <p className="font-medium text-gray-900">The Inspection Academy LLC</p>
                        <div className="flex items-start gap-3 text-gray-600">
                          <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>2702 Park Meadows Ave., Deer Park, TX 77536</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary hover:underline">{SITE_CONFIG.phone}</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* 2. Information We Collect */}
                <section id="information-we-collect">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    2. Information We Collect
                  </h2>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide Directly</h3>

                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-2">Course Enrollment</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Full name, email address, phone number, mailing address</li>
                        <li>Payment information (processed securely through third-party processors)</li>
                        <li>Username, password, and date of birth (for age verification)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-2">Scholarship Applications</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Name, email, phone, city, zip code, employment status</li>
                        <li>Essay responses and proof of Texas residency</li>
                        <li>SSN/Tax ID (winners only, for IRS Form 1099-MISC)</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-2">Communications and Support</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Information in emails, messages, or communications you send us</li>
                        <li>Feedback, questions, or testimonials you provide</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2.2 Information We Collect Automatically</h3>
                  <p className="text-gray-600 mb-4">When you use our website or LMS, we automatically collect:</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-2">Usage Data</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>IP address, browser type, device info</li>
                        <li>Pages visited and time spent</li>
                        <li>Course progress and quiz scores</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-2">Cookies & Tracking</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Cookies and web beacons</li>
                        <li>Preference and session data</li>
                        <li>Analytics information</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2.3 Information from Third Parties</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li><strong>Payment processors:</strong> Transaction confirmations (not full card details)</li>
                    <li><strong>Analytics providers:</strong> Aggregated usage data (e.g., Google Analytics)</li>
                    <li><strong>Social media:</strong> If you interact with us or share our content</li>
                  </ul>
                </section>

                {/* 3. How We Use Your Information */}
                <section id="how-we-use">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    3. How We Use Your Information
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 To Provide Educational Services</h3>
                      <p className="text-gray-600">Process enrollment, grant LMS access, track progress, issue certificates, and provide support.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 For Scholarship Administration</h3>
                      <p className="text-gray-600">Process applications, evaluate eligibility, notify winners, and issue required tax forms.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 To Communicate With You</h3>
                      <p className="text-gray-600">Send transactional emails, marketing communications (opt-out available), and respond to inquiries.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3.4 To Improve Our Services</h3>
                      <p className="text-gray-600">Analyze usage patterns, test features, monitor outcomes, and enhance our educational offerings.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3.5 For Compliance and Protection</h3>
                      <p className="text-gray-600">Meet legal obligations, enforce agreements, prevent fraud, and protect rights and safety.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">3.6 For Marketing and Analytics</h3>
                      <p className="text-gray-600">Send promotional materials (with consent), measure campaign effectiveness, and gather feedback.</p>
                    </div>
                  </div>
                </section>

                {/* 4. How We Share Your Information */}
                <section id="how-we-share">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    4. How We Share Your Information
                  </h2>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="font-semibold text-green-800">We do not sell your personal information to third parties.</p>
                  </div>

                  <p className="text-gray-600 mb-4">We may share your information in these limited circumstances:</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Service Providers</h3>
                      <p className="text-gray-600 mb-2">Trusted partners who help operate our business:</p>
                      <ul className="text-gray-600 text-sm space-y-1 ml-4">
                        <li>LMS platforms, payment processors (Stripe, PayPal), email providers</li>
                        <li>Cloud storage, analytics tools (Google Analytics)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Legal Requirements</h3>
                      <p className="text-gray-600">When required by law, court orders, or to protect against fraud and security threats.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Business Transfers</h3>
                      <p className="text-gray-600">In case of merger, acquisition, or sale of assets (with notification).</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">4.4 With Your Consent</h3>
                      <p className="text-gray-600">Scholarship winner announcements, testimonials (with explicit permission).</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">4.5 Aggregated Data</h3>
                      <p className="text-gray-600">De-identified data that cannot identify you (e.g., pass rate statistics).</p>
                    </div>
                  </div>
                </section>

                {/* 5. Your Rights and Choices */}
                <section id="your-rights">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    5. Your Rights and Choices
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Access and Update</h3>
                      <p className="text-gray-600">Log into your LMS account or email us at {SITE_CONFIG.email} to access or correct your data.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Opt-Out of Marketing</h3>
                      <p className="text-gray-600">Click &quot;unsubscribe&quot; in any email, update LMS preferences, or email us. Note: transactional emails will still be sent.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Cookie Controls</h3>
                      <p className="text-gray-600">Manage cookies through your browser settings. Disabling may limit some functionality.</p>
                    </div>

                    <Card className="bg-amber-50 border-amber-200">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">5.4 California Privacy Rights (CCPA)</h3>
                        <p className="text-gray-600 text-sm mb-3">California residents have the right to:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li><strong>Know</strong> what personal information we collect and share</li>
                          <li><strong>Delete</strong> your personal information (with exceptions)</li>
                          <li><strong>Opt-out</strong> of sale (we don&apos;t sell data)</li>
                          <li><strong>Non-discrimination</strong> for exercising your rights</li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-3">Contact us with subject line &quot;CCPA Request&quot;. Response within 45 days.</p>
                      </CardContent>
                    </Card>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">5.5 Data Deletion</h3>
                      <p className="text-gray-600">Email {SITE_CONFIG.email} to request deletion. Some records may be retained for legal compliance.</p>
                    </div>
                  </div>
                </section>

                {/* 6. Data Retention */}
                <section id="data-retention">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    6. Data Retention
                  </h2>
                  <p className="text-gray-600 mb-4">We retain information only as long as necessary:</p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 pr-4 font-semibold text-gray-900">Data Type</th>
                          <th className="text-left py-3 font-semibold text-gray-900">Retention Period</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b">
                          <td className="py-3 pr-4">Active Student Accounts</td>
                          <td className="py-3">Active + 3 years after last login</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4">Scholarship Applications</td>
                          <td className="py-3">2 years after program concludes</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4">Financial Records</td>
                          <td className="py-3">7 years (tax requirements)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4">Marketing Lists</td>
                          <td className="py-3">Until unsubscribe or deletion request</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4">Course Completion Records</td>
                          <td className="py-3">7 years (education regulations)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 7. Data Security */}
                <section id="data-security">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    7. Data Security
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-2">Our Measures</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>SSL/TLS encryption</li>
                        <li>Secure password requirements</li>
                        <li>Regular security assessments</li>
                        <li>Need-to-know access restrictions</li>
                        <li>Secure cloud hosting</li>
                        <li>Regular backups</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-medium text-gray-900 mb-2">How You Can Help</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Use strong, unique passwords</li>
                        <li>Don&apos;t share login credentials</li>
                        <li>Log out on shared devices</li>
                        <li>Keep contact info updated</li>
                        <li>Report suspicious activity</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 italic">
                    Note: No method of internet transmission is 100% secure. We use industry-standard practices but cannot guarantee absolute security.
                  </p>
                </section>

                {/* 8. Children's Privacy */}
                <section id="childrens-privacy">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    8. Children&apos;s Privacy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our services are for individuals 18 years or older. We do not knowingly collect information from minors. If you believe we have collected information from someone under 18, please contact us immediately.
                  </p>
                </section>

                {/* 9. Third-Party Links */}
                <section id="third-party">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    9. Third-Party Links and Services
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our website may link to third-party sites (TREC, payment processors, social media). We are not responsible for their privacy practices. Please review their policies.
                  </p>
                </section>

                {/* 10. Changes */}
                <section id="changes">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    10. Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We may update this policy periodically. Changes will be indicated by the &quot;Last Updated&quot; date. Material changes will be communicated via email. Continued use constitutes acceptance.
                  </p>
                </section>

                {/* 11. Contact Us */}
                <section id="contact">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    11. Contact Us
                  </h2>

                  <Card className="bg-gray-50 border-0">
                    <CardContent className="p-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="font-semibold text-gray-900 mb-3">The Inspection Academy LLC</p>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p><a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a></p>
                            <p><a href={`tel:${SITE_CONFIG.phone}`} className="text-primary hover:underline">{SITE_CONFIG.phone}</a></p>
                            <p>2702 Park Meadows Ave.<br />Deer Park, TX 77536</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-3">Special Requests</p>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p><strong>CCPA:</strong> Include &quot;CCPA Request&quot; in subject</p>
                            <p><strong>Data Deletion:</strong> Include &quot;Data Deletion Request&quot; in subject</p>
                            <p className="text-gray-500 italic">Response within 30 days</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* 12. Consent */}
                <section id="consent">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b">
                    12. Consent and Acceptance
                  </h2>
                  <p className="text-gray-600 mb-4">
                    By using The Inspection Academy&apos;s website, enrolling in courses, or applying for scholarships, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                  </p>
                  <p className="font-semibold text-gray-900">
                    If you do not agree with this Privacy Policy, please do not use our services.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
