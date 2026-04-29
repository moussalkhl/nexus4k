'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './GuidesSection.module.css';

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

const RECENT_POSTS = [
  {
    id: 4,
    type: 'SETUP',
    isNew: true,
    title: 'How to Set Up IPTV on a MAG Box — 2026 Step-by-Step Guide',
    excerpt: 'Set up Nexus 4K IPTV IPTV on any MAG box in under 10 minutes. Portal URL, MAC address, and troubleshooting — works on all models.',
    date: 'Apr 20, 2026',
    readTime: '10 min read',
    href: '/blog/mag-box-setup-2026',
    image: '/images/blog/mag-box-setup-2026.png',
  },
  {
    id: 5,
    type: 'SETUP',
    isNew: true,
    title: 'How to Watch IPTV on Apple TV: Best Apps & Setup Guide',
    excerpt: 'Watch Nexus 4K IPTV IPTV on Apple TV in minutes. We cover the best tvOS apps — iPlayTV, GSE Smart IPTV, Smarters — with a full guide.',
    date: 'Apr 20, 2026',
    readTime: '12 min read',
    href: '/blog/apple-tv-iptv-2026',
    image: '/images/blog/apple-tv-iptv-2026.png',
  },
  {
    id: 6,
    type: 'TROUBLESHOOTING',
    isNew: true,
    title: 'Developer Options Disappeared on Fire TV — Here\'s What Happened',
    excerpt: 'Fire TV Developer Options missing after an update? There are two completely different causes — one is fixable in 30 seconds.',
    date: 'Apr 20, 2026',
    readTime: '9 min read',
    href: '/blog/firetv-developer-options-2026',
    image: '/images/blog/firetv-developer-options-2026.png',
  },
  {
    id: 7,
    type: 'GUIDE',
    isNew: true,
    title: 'Best IPTV Players for Android TV in 2026 (Ranked & Tested)',
    excerpt: 'We tested every major IPTV player with Nexus 4K IPTV 4K streams. Here are the top 7 apps ranked by performance and EPG quality.',
    date: 'Apr 17, 2026',
    readTime: '13 min read',
    href: '/blog/android-tv-players-2026',
    image: '/images/blog/android-tv-players-2026.png',
  },
];

export function GuidesSection() {
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
            Everything you need to get the most out of your Nexus 4K IPTV IPTV subscription.
          </p>
        </header>

        <div className={styles.featuredGrid}>
          {FEATURED_GUIDES.map((post) => (
            <Link key={post.id} href={post.href} className={styles.featuredCard} title={`Read our guide: ${post.title}`}>
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
              </div>
              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                  <span className={styles.dot}>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.readMore}>
                  Read Full Guide <span className={styles.arrow}>→</span>
                </div>
              </div>
            </Link>
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
            <div className={styles.badge}>FRESH FROM NEXUS 4K IPTV</div>
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
            {RECENT_POSTS.map((post) => (
              <Link key={post.id} href={post.href} className={styles.recentCard} title={`Read article: ${post.title}`}>
                {post.image && (
                  <div className={styles.recentImageWrapper}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill
                      className={styles.postImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className={styles.recentCardContent}>
                  <div className={styles.cardTags}>
                    <span className={styles.tagType}>{post.type}</span>
                    {post.isNew && <span className={styles.tagNew}>NEW</span>}
                  </div>
                  <h3 className={styles.recentTitle}>{post.title}</h3>
                  <p className={styles.recentExcerpt}>{post.excerpt}</p>
                  <div className={styles.recentFooter}>
                    <div className={styles.meta}>
                      <span>{post.date}</span>
                      <span className={styles.dot}>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className={styles.readMore}>
                      Read More <span className={styles.arrow}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
