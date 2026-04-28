import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { getAllBlogPosts } from '@/services/blog'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import styles from './page.module.css'

export const metadata: Metadata = genMeta({
  // Final: "Nexus 4K IPTV Blog – Guides & Tutorials | Nexus 4K IPTV" = 57 chars
  title: 'Nexus 4K IPTV Blog – Guides & Tutorials',
  description: 'Read the latest news, setup guides, and tutorials for IPTV streaming. Learn how to optimize your setup for the best viewing experience.',
  canonical: '/blog',
})

// Revalidate this page every 1 hour (ISR)
export const revalidate = 3600

/**
 * Blog Index Page — ISR
 */
export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts()
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
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
              Streaming <span className="text-gradient">Insights & Guides</span>
            </h1>
            <p className="section-subtitle">
              Expert advice, setup tutorials, and the latest news from the world of IPTV streaming.
            </p>
          </header>

          <div className={styles.grid}>
            {posts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <div className={styles.imageWrap}>
                  {post.coverImage && (
                    <Image 
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <span className={styles.categoryBadge}>{post.category}</span>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h2 className={styles.title}>
                    <Link href={`/blog/${post.slug}`} className={styles.link}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.footer}>
                    <span className={styles.author}>{post.author}</span>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore} aria-label={`Read more about ${post.title}`}>
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
