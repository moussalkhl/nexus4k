import Link from 'next/link';
import Image from 'next/image';
import styles from './GuidesSection.module.css';
import { getAllBlogPosts } from '@/services/blog';

const FEATURED_GUIDES = [
  {
    id: 1,
    type: 'GUIDE',
    date: 'Apr 2, 2026',
    readTime: '12 min read',
    title: 'Best IPTV Players for 4K Streaming in 2026',
    excerpt: 'Discover the most reliable and feature-rich IPTV players optimized for seamless 4K streaming and EPG loading...',
    href: '/blog/best-iptv-players-4k-streaming-2026',
    image: '/images/blog/best-iptv-players-4k.png',
  },
  {
    id: 2,
    type: 'TUTORIAL',
    date: 'Apr 3, 2026',
    readTime: '15 min read',
    title: 'How to Setup IPTV on Firestick: Complete Guide 2026',
    excerpt: 'A complete step-by-step guide to setting up IPTV on any Firestick model — from enabling developer options to installation...',
    href: '/blog/how-to-setup-iptv-on-firestick-complete-guide-2026',
    image: '/images/blog/firestick-setup-2026.png',
  },
  {
    id: 3,
    type: 'COMPARISON',
    date: 'Apr 4, 2026',
    readTime: '10 min read',
    title: 'IPTV vs Cable TV in 2026: The Complete Comparison',
    excerpt: 'An honest, data-driven comparison of IPTV and traditional cable TV covering real costs, channel availability, and quality...',
    href: '/blog/iptv-vs-cable-tv-comparison-2026',
    image: '/images/blog/iptv-vs-cable-2026.png',
  },
];

export async function GuidesSection() {
  const allPosts = await getAllBlogPosts();
  const sortedPosts = allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const recentPostsData = sortedPosts.slice(0, 4).map(post => ({
    id: post.slug,
    type: post.category.toUpperCase(),
    isNew: true,
    title: post.title,
    excerpt: post.excerpt,
    date: new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: `${post.readTime} min read`,
    href: `/blog/${post.slug}`,
    image: post.coverImage,
  }));

  return (
    <section className={styles.section} aria-labelledby="guides-heading">
      
      {/* ─── Top Section: Featured Guides ─── */}
      <div className="container">
        <header className={styles.header}>
          <div className={styles.badge}>FROM THE BLOG</div>
          <h2 className={styles.title} id="guides-heading">
            IPTV Guides & Streaming Tips
          </h2>
          <p className={styles.subtitle}>
            Everything you need to get the most out of your Nexus 4K IPTV subscription.
          </p>
        </header>

        <div className={styles.featuredGrid}>
          {FEATURED_GUIDES.map((post) => (
            <div key={post.id} className={styles.featuredCard}>
              <div className={styles.imageWrapper}>
                {post.image && (
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className={styles.postImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className={styles.postType}>{post.type}</div>
                <Link href={post.href} className={styles.stretchedLink} title={`Read guide: ${post.title}`} aria-label={`Read guide: ${post.title}`} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                  <span className={styles.dot}>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={post.href} title={`Read guide: ${post.title}`}>{post.title}</Link>
                </h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.readMore}>
                  <Link href={post.href} title={`Read guide: ${post.title}`}>Read Full Guide<span className="sr-only"> on {post.title}</span> <span className={styles.arrow}>→</span></Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.centerBtn}>
          <Link href="/blog" className={styles.outlineBtn} title="View all our IPTV guides and streaming tips">
            View All Guides <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>

      {/* ─── Bottom Section: Recently Published ─── */}
      <div className={styles.recentSection}>
        <div className="container">
          <header className={styles.header}>
            <div className={styles.badge}>FRESH FROM Nexus 4K IPTV</div>
            <h2 className={styles.title}>Recently Published</h2>
            <p className={styles.subtitle}>
              Updated weekly with new guides, fixes, and comparisons to keep your streaming experience optimized.
            </p>
            <div className={styles.centerBtnTop}>
              <Link href="/blog/recent" className={styles.outlineBtn} title="Browse all our recently published articles">
                All Articles <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </header>

          <div className={styles.recentGrid}>
            {recentPostsData.map((post) => (
              <div key={post.id} className={styles.recentCard}>
                {post.image && (
                  <div className={styles.recentImageWrapper}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill
                      className={styles.postImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Link href={post.href} className={styles.stretchedLink} title={`Read article: ${post.title}`} aria-label={`Read article: ${post.title}`} />
                  </div>
                )}
                <div className={styles.recentCardContent}>
                  <div className={styles.cardTags}>
                    <span className={styles.tagType}>{post.type}</span>
                    {post.isNew && <span className={styles.tagNew}>NEW</span>}
                  </div>
                  <h3 className={styles.recentTitle}>
                    <Link href={post.href} title={`Read article: ${post.title}`}>{post.title}</Link>
                  </h3>
                  <p className={styles.recentExcerpt}>{post.excerpt}</p>
                  <div className={styles.recentFooter}>
                    <div className={styles.meta}>
                      <span>{post.date}</span>
                      <span className={styles.dot}>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className={styles.readMore}>
                      <Link href={post.href} title={`Read article: ${post.title}`}>Read More<span className="sr-only"> on {post.title}</span> <span className={styles.arrow}>→</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
