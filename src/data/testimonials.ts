export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  image?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'I had a great experience with The Inspection Academy. The course material was clear, thorough, and easy to follow, making the licensing process much less stressful. Matthew has done an excellent job structuring the program so it\'s practical, up to date, and focused on what you actually need to become certified. Highly recommend this course to anyone serious about becoming a licensed home inspector.',
    author: 'Monte S.',
    title: 'Licensed TX Inspector',
    rating: 5,
  },
];
