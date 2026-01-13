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
    quote: 'The adaptive test prep was a game-changer. I knew exactly what I needed to focus on and passed on my first try.',
    author: 'John D.',
    title: 'Licensed TX Inspector',
    rating: 5,
  },
  {
    id: '2',
    quote: 'As a non-native English speaker, the multi-language support made all the difference. I could learn the material in Spanish and still pass the exam.',
    author: 'Maria G.',
    title: 'Licensed TX Inspector',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The Spectora training alone was worth the price. I started my business knowing exactly how to use industry-standard software.',
    author: 'Robert M.',
    title: 'Licensed TX Inspector',
    rating: 5,
  },
  {
    id: '4',
    quote: 'I tried another school first and failed the exam. TIA\'s approach to teaching actually helped me understand the material, not just memorize it.',
    author: 'James T.',
    title: 'Licensed TX Inspector',
    rating: 5,
  },
];
