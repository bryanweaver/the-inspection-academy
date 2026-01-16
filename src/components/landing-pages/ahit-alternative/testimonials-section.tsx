import { Star, Quote, MapPin, Award } from 'lucide-react';
import { Section, Container } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials, testimonialsContent } from '@/data/landing-pages/ahit-alternative';

export function TestimonialsSection() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {testimonialsContent.title}
            </h2>
            <p className="text-lg text-gray-600">
              {testimonialsContent.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                    <div className="flex items-center text-sm text-green-600 font-medium mt-2">
                      <Award className="h-3 w-3 mr-1" />
                      {testimonial.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
