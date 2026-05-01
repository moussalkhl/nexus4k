import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface GenerateMetadataOptions {
  title: string | { absolute: string }
  description?: string
  canonical?: string
  noindex?: boolean
  ogImage?: string
  ogType?: 'website' | 'article'
  keywords?: string[]
}

/**
 * Generates fully-formed Next.js Metadata for any page.
 * Every page should call this — never write ad-hoc metadata.
 */
export function generateMetadata({
  title,
  description = siteConfig.description,
  canonical,
  noindex = false,
  ogImage = siteConfig.ogImage,
  ogType = 'website',
  keywords = [],
}: GenerateMetadataOptions): Metadata {
  const metaTitle = typeof title === 'object' 
    ? title.absolute 
    : (title === siteConfig.name ? title : `${title} | ${siteConfig.name}`)
  const canonicalUrl = canonical
    ? `${siteConfig.url}${canonical}`
    : siteConfig.url

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      title: metaTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [{ url: '/logo.png' }],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
  }
}

// ─── JSON-LD Generators ──────────────────────────────────────────────────────

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexus4kTV',
    url: 'https://nexus4ktv.pro',
    logo: 'https://nexus4ktv.pro/logo.png',
    sameAs: [],
  }
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://nexus4ktv.pro',
    name: 'Nexus4kTV',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nexus4ktv.pro/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateFAQJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function generateBreadcrumbJsonLd(
  items: Array<{ label: string; href: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  }
}

export function generateProductJsonLd({
  name,
  description,
  price,
}: {
  name: string
  description: string
  price: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: 'https://nexus4ktv.pro/logo.png',
    brand: { '@type': 'Brand', name: siteConfig.name },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/#pricing`,
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      },
    },
  }
}
