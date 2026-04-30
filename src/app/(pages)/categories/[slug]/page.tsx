import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { notFound } from 'next/navigation'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { categories } from '@/config/site'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CTASection } from '@/components/sections/CTASection'
import styles from './category.module.css'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.id === slug)

  if (!category) return {}

  // Pattern: "[Name] on Nexus4kTV – Live & HD | Nexus4kTV"
  // Range: 51–59 chars across all categories (Sports → Documentaries)
  return genMeta({
    title: `${category.name} on Nexus4kTV – Live & HD`,
    description: `Stream ${category.channelCount} live ${category.name} channels in HD, FHD, and 4K. ${category.description}`,
    canonical: category.href,
    keywords: [`${category.name.toLowerCase()} iptv`, `live ${category.name.toLowerCase()}`, `stream ${category.name.toLowerCase()}`, 'iptv channels'],
  })
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.id,
  }))
}

/**
 * Individual Category Page — SSG
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.id === slug)

  if (!category) {
    notFound()
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: category.name, href: category.href },
  ]

  return (
    <>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className={`section ${styles.hero}`} style={{ '--accent': category.color } as CSSProperties}>
        <div className={styles.glow} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.iconWrap}>
              <span className={styles.icon} aria-hidden="true">{category.icon}</span>
            </div>
            <h1 className={styles.title}>
              {category.name} <span className={styles.titleAccent}>Channels</span>
            </h1>
            <p className={styles.subtitle}>{category.description}</p>
            <div className={styles.meta}>
              <span className="badge badge--accent" style={{ background: `color-mix(in srgb, ${category.color} 15%, transparent)`, color: category.color, borderColor: `color-mix(in srgb, ${category.color} 30%, transparent)` }}>
                {category.channelCount} Channels
              </span>
              <span className="badge" style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-default)' }}>
                HD / FHD / 4K
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <h2>Why Choose Nexus4kTV for {category.name}?</h2>
            <p>
              When it comes to streaming <strong>{category.name.toLowerCase()}</strong>, reliability and quality are paramount. 
              Our premium infrastructure ensures that all {category.channelCount} channels in this category are delivered with 
              zero buffering and maximum clarity.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Global Coverage</h3>
                <p>Access local and international broadcasts. Never miss content from your home country or favorite global networks.</p>
              </div>
              <div className={styles.feature}>
                <h3>Catch-Up Ready</h3>
                <p>Missed a live broadcast? Use our 7-day catch-up feature available on most major channels in this category.</p>
              </div>
              <div className={styles.feature}>
                <h3>High Definition</h3>
                <p>Experience content the way it was meant to be seen with true 1080p and 4K Ultra HD streams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
