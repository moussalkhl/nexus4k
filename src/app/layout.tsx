import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GalaxyBackground } from '@/components/ui/GalaxyBackground'
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/seo/metadata'
import { siteConfig } from '@/config/site'

import { Inter, Outfit } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nexus 4K IPTV – 20K+ Channels | Free Trial',
    template: '%s | Nexus 4K IPTV',
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = generateOrganizationJsonLd()
  const siteJsonLd = generateWebSiteJsonLd()

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020408" />
        
        {/* SEO Required Tags */}
        <link rel="alternate" hrefLang="en" href="https://nexus4ktv.pro/" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <GalaxyBackground />
        <a href="#main-content" className="sr-only" title="Skip to main content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
