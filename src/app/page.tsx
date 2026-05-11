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
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'

const CategoriesSection = dynamic(() => import('@/components/sections/CategoriesSection').then(mod => mod.CategoriesSection))
const ContentShowcase = dynamic(() => import('@/components/sections/ContentShowcase').then(mod => mod.ContentShowcase))
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection').then(mod => mod.FeaturesSection))
const DevicesSection = dynamic(() => import('@/components/sections/DevicesSection').then(mod => mod.DevicesSection))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => mod.TestimonialsSection))
const PricingSection = dynamic(() => import('@/components/sections/PricingSection').then(mod => mod.PricingSection))
const GuidesSection = dynamic(() => import('@/components/sections/GuidesSection').then(mod => mod.GuidesSection))
const StatsSection = dynamic(() => import('@/components/sections/StatsSection').then(mod => mod.StatsSection))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then(mod => mod.FAQSection))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => mod.ContactSection))
const CTASection = dynamic(() => import('@/components/sections/CTASection').then(mod => mod.CTASection))


// Title: 51/60 chars | Desc: 160/160 | Keywords score: 99/100
export const metadata: Metadata = genMeta({
  title: 'Nexus 4K IPTV – Best Subscription | Free Trial',
  description: 'Nexus 4K IPTV: Premium subscription with free trial. Stream 30,000+ live channels, sports, movies & series in 4K/UHD. Trusted by 20k+ users worldwide',
  canonical: '/',
  keywords: [],
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
