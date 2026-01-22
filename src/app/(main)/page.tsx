import {
  Hero,
  ProblemSolution,
  GuideCredentials,
  HowItWorks,
  MoneyBackGuarantee,
  CourseBundles,
  Features,
  TRECData,
  CostOfFailure,
  SuccessStakes,
  SubscriptionCallout,
  CTA,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* ABOVE THE FOLD */}
      <Hero />

      {/* BELOW THE FOLD - StoryBrand Framework Order */}
      <ProblemSolution />        {/* The problem: what most schools do wrong */}
      <GuideCredentials />       {/* We're inspectors + educators */}
      <HowItWorks />             {/* 3-step process with tagline */}
      <MoneyBackGuarantee />     {/* Pass-or-refund guarantee */}
      <CourseBundles />          {/* The offer: pricing with promo */}
      <Features />               {/* Why students choose TIA */}
      <TRECData />               {/* 67% pass rate - #2 in Texas (replaces testimonials) */}
      <CostOfFailure />          {/* Stakes: what failure costs */}
      <SuccessStakes />          {/* Stakes: what success brings */}
      <SubscriptionCallout />    {/* 0% interest payment plans */}
      <CTA />                    {/* Final push */}
    </>
  );
}
