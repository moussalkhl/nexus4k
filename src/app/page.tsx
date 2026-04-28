/**
 * Homepage — STATICALLY GENERATED (SSG)
 *
 * Rendering: SSG (generateStaticParams not needed — single route)
 * Role: SEO authority hub — maximum internal linking, structured data, hero conversion
 * Revalidate: none (fully static, only changes on deploy)
 */

import type { Metadata } from 'next'
import { generateProductJsonLd } from '@/seo/metadata'
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
export const metadata: Metadata = {
  title: { absolute: 'Nexus 4K IPTV – 20K+ Channels | Free Trial' },
  description: 'Nexus 4K IPTV delivers 30,000+ live TV channels, sports, PPV, movies and VODs in 4K/UHD quality. Get premium access at nexus4ktv.pro today.',
  keywords: [
    'Nexus 4K IPTV',
    'Nexus4kTV',
    'Nexus IPTV subscription',
    'Nexus 4K streaming service',
    'best IPTV provider Nexus',
    'Nexus 4K live TV channels',
    'nexus4ktv.pro',
  ].join(', '),
}

export default function HomePage() {
  // Product schema for pricing (boosts rich results)
  const productSchemas = pricingPlans.map((plan) =>
    generateProductJsonLd({
      name: `Nexus 4K IPTV ${plan.name} Plan`,
      description: plan.features.join(', '),
      price: plan.price,
    })
  )

  return (
    <>
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
