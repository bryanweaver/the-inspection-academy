import {
  Hero,
  ProblemSolution,
  HowItWorks,
  CourseBundles,
  Features,
  CostOfFailure,
  Testimonials,
  CTA,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <CourseBundles />
      <Features />
      <CostOfFailure />
      <Testimonials />
      <CTA />
    </>
  );
}
