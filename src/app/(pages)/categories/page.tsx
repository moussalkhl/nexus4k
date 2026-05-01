import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { categories } from '@/config/site'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import styles from './page.module.css'

export const metadata: Metadata = genMeta({
  // Final: "Nexus 4K IPTV Channels – Live TV & VOD | Nexus 4K IPTV" = 60 chars
  title: 'Nexus 4K IPTV Channels – Live TV & VOD',
  description: 'Explore our massive IPTV channel categories including Live Sports, 4K Movies, Top Series, and Anime. Browse over 30,000 HD channels available for streaming.',
  canonical: '/categories',
})

/**
 * Categories Index Page — SSG
 */
export default function CategoriesIndexPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
  ]

  return (
    <>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <header className={styles.header}>
            <h1 className="section-title">
              Explore Our <span className="text-gradient">Categories</span>
            </h1>
            <p className="section-subtitle">
              Find exactly what you want to watch across our massive library of 30,000+ live channels.
            </p>
          </header>

          <div className={styles.grid}>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className={styles.card}
                style={{ '--accent': cat.color } as CSSProperties}
              >
                <div className={styles.icon} aria-hidden="true">{cat.icon}</div>
                <div className={styles.info}>
                  <h2 className={styles.name}>{cat.name}</h2>
                  <p className={styles.count}>{cat.channelCount} channels</p>
                  <p className={styles.description}>{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
