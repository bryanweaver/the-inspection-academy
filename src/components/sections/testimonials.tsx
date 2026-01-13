'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container, Section } from '@/components/layout';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="font-semibold text-gray-900">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-gray-500">
                  {testimonials[activeIndex].title}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
