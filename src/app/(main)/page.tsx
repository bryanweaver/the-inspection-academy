import {
  Hero,
  ProblemSolution,
  HowItWorks,
  BulletproofTestPrep,
  WhatsIncluded,
  SpectoraTraining,
  Credentials,
  CourseBundles,
  CostOfFailure,
  Testimonials,
  CTA,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* ABOVE THE FOLD */}
      <Hero />

      {/* BELOW THE FOLD - In order of importance */}
      <ProblemSolution />      {/* The problem: 58.79% fail, why schools fail */}
      <HowItWorks />           {/* 3-step process */}
      <BulletproofTestPrep />  {/* Key differentiator: adaptive test prep */}
      <WhatsIncluded />        {/* 6 courses + bonuses */}
      <SpectoraTraining />     {/* Real software training */}
      <Credentials />          {/* Trust: Master's in Ed, licensed inspectors */}
      <CostOfFailure />        {/* Stakes: what failure really costs */}
      <CourseBundles />        {/* The offer: pricing */}
      <Testimonials />         {/* Social proof */}
      <CTA />                  {/* Final push */}
    </>
  );
}
