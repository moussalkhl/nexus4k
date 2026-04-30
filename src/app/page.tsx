/**
 * Homepage — STATICALLY GENERATED (SSG)
 *
 * Rendering: SSG (generateStaticParams not needed — single route)
 * Role: SEO authority hub — maximum internal linking, structured data, hero conversion
 * Revalidate: none (fully static, only changes on deploy)
 */

import type { Metadata } from 'next'
import { generateMetadata as genMeta, generateProductJsonLd } from '@/seo/metadata'
import { pricingPlans } from '@/config/site'
import { HeroSection } from '@/components/sections/HeroSection'
import { CategoriesSection } from '@/components/sections/CategoriesSection'
import { ContentShowcase } from '@/components/sections/ContentShowcase'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { DevicesSection } from '@/components/sections/DevicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { GuidesSection } from '@/components/sections/GuidesSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { CTASection } from '@/components/sections/CTASection'


// Character count: 44 — approved homepage title
export const metadata: Metadata = genMeta({
  title: 'Stream 30,000+ Live Channels, Sports & VODs',
  description: 'Nexus4kTV : Premium IPTV Subscription with Free Trial. Stream 30,000+ live channels, sports & movies in 4K/UHD. Trusted by 20,000+ users worldwide.',
  canonical: '/',
  keywords: [
    'Nexus 4K IPTV',
    'Nexus4kTV',
    'IPTV subscription',
    '4K streaming',
    'Best IPTV',
    'Free Trial',
    'nexus4ktv.pro',
    'PPV',
  ],
})

export default function HomePage() {
  // Product schema for pricing (boosts rich results)
  const productSchemas = {
    '@context': 'https://schema.org',
    '@graph': pricingPlans.map((plan) =>
      generateProductJsonLd({
        name: `Nexus 4K IPTV ${plan.name} Plan`,
        description: plan.features.join(', '),
        price: plan.price,
      })
    ),
  }

  return (
    <>
      {/* Product JSON-LD structured data — wrapped in @graph for valid multi-item schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemas) }}
      />

      {/* Hero — Authority section, primary CTA, H1 */}
      <HeroSection />

      {/* Stats — Big numbers and galactic background */}
      <StatsSection />

      {/* Categories — Discovery section */}
      <CategoriesSection />

      {/* Content Showcase - Automated carousels */}
      <ContentShowcase />

      {/* Pricing — Conversion section (right after Kids section) */}
      <PricingSection />

      {/* Features — Value proposition */}
      <FeaturesSection />

      {/* Devices — Cross-platform support */}
      <DevicesSection />

      {/* Testimonials — Social Proof */}
      <TestimonialsSection />

      {/* Guides — Knowledge base links */}
      <GuidesSection />

      {/* Contact - Direct support block */}
      <ContactSection />

      {/* FAQ — Objection handling */}
      <FAQSection />

      {/* CTA — Conversion section */}
      <CTASection />
    </>
  )
}
