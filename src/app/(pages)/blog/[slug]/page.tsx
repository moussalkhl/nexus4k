import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/services/blog'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CTASection } from '@/components/sections/CTASection'
import styles from './post.module.css'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) return {}

  // Truncate post title to 36 chars so the final output:
  // "[truncated title] | Nexus4kTV" stays within 50–60 chars
  const truncatedTitle =
    post.title.length > 36 ? post.title.slice(0, 33).trimEnd() + '...' : post.title

  return genMeta({
    title: { absolute: post.title },
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    ogType: 'article',
    keywords: post.tags,
    ogImage: post.coverImage,
  })
}

export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export const revalidate = 3600

/**
 * Individual Blog Post Page — ISR
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ]

  // Article JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: [{ '@type': 'Person', name: post.author }],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <article className={styles.article}>
        {/* Header */}
        <header className={styles.header}>
          <div className="container">
            <div className={styles.headerInner}>
              <span className={styles.category}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <span className={styles.author}>By {post.author}</span>
                <span className={styles.divider}>·</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className={styles.divider}>·</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Placeholder */}
        <div className="container">
          <div className={styles.content}>
            <p className={styles.lead}>{post.excerpt}</p>
            <div className={styles.body}>
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <>
                  <p>This is a placeholder for the full article content. In a production environment, this would be rendered from markdown or a CMS rich text field.</p>
                  <h2>Setting Up Your Service</h2>
                  <p>When configuring your new IPTV subscription, it's crucial to understand the requirements for optimal playback. Our servers support all major protocols including M3U, Xtream Codes, and Stalker Portal.</p>
                  <ul>
                    <li>Ensure you have a stable internet connection.</li>
                    <li>Use a wired ethernet connection when possible.</li>
                    <li>Keep your streaming app updated to the latest version.</li>
                  </ul>
                  <h3>Troubleshooting Common Issues</h3>
                  <p>If you experience buffering, the most common culprit is network congestion or ISP throttling. We highly recommend using the included VPN service to bypass any ISP restrictions.</p>
                </>
              )}
            </div>
            
            <div className={styles.tags}>
              <span className={styles.tagsLabel}>Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  )
}
