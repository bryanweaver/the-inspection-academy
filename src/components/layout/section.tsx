import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary';
}

export function Section({ children, className, id, background = 'white' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-primary-foreground',
  };

  return (
    <section id={id} className={cn('py-16 md:py-24', bgClasses[background], className)}>
      {children}
    </section>
  );
}
