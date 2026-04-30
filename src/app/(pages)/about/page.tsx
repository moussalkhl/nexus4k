import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CTASection } from '@/components/sections/CTASection'
import styles from './page.module.css'

export const metadata: Metadata = genMeta({
  // Final: "About Nexus4kTV – Our Story & Mission | Nexus4kTV" = 59 chars
  title: 'About Nexus4kTV – Our Story & Mission',
  description: 'Learn about Nexus4kTV, the premier global provider delivering top-tier streaming since 2020. Discover our mission, technology, and global infrastructure.',
  canonical: '/about',
})

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]

  return (
    <>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="section-title">
              Redefining How the World <span className="text-gradient">Watches TV</span>
            </h1>
            <p className="section-subtitle">
              We built Nexus4kTV because we were tired of expensive cable bills and unreliable streams. Now, we serve over 20,000 customers globally with the highest quality IPTV infrastructure available.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textBlock}>
              <h2>Our Mission</h2>
              <p>
                To democratize access to global entertainment by providing a stable, high-quality, and affordable streaming platform that works anywhere, anytime.
              </p>
              <h2>The Infrastructure</h2>
              <p>
                Nexus4kTV isn't just another reseller. We operate our own load-balanced servers across 15 datacenters worldwide. This true CDN approach means that whether you're in New York, London, or Sydney, you're connecting to a local server for buffer-free 4K streaming.
              </p>
            </div>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>20k+</span>
                <span className={styles.statLabel}>Active Subscribers</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>15</span>
                <span className={styles.statLabel}>Global Datacenters</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>99.9%</span>
                <span className={styles.statLabel}>Uptime SLA</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>2020</span>
                <span className={styles.statLabel}>Year Established</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
