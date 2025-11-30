import React from 'react';
import { HeroSection } from '@/presentation/components/home/HeroSection';
import { WhyQixSection } from '@/presentation/components/home/WhyQixSection';
import { GlanceSection } from '@/presentation/components/home/GlanceSection';
import { EcosystemSection } from '@/presentation/components/home/EcosystemSection';
import { CtaSection } from '@/presentation/components/home/CtaSection';

export const HomePage: React.FC = () => {
  return (
    <article>
      {/* 1. Hero Section - Full-width with network illustration */}
      <HeroSection />

      {/* 2. Why QIX Exists - Key value proposition cards */}
      <WhyQixSection />

      {/* 3. QIX at a Glance - Key statistics */}
      <GlanceSection />

      {/* 4. Who Connects to QIX - Ecosystem preview */}
      <EcosystemSection />

      {/* 5. Call-to-Action Strip */}
      <CtaSection />
    </article>
  );
};
