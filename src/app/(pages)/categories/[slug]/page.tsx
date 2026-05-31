import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { notFound } from 'next/navigation'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { categories } from '@/config/site'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CTASection } from '@/components/sections/CTASection'
import styles from './category.module.css'
import Link from 'next/link'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.id === slug)

  if (!category) return {}

  // LSI keyword enriched titles
  const seoTitles: Record<string, string> = {
    sports: 'Best Sports IPTV Subscription | Live Football, UFC & F1 in 4K',
    movies: 'Premium Movies IPTV | Stream VOD & 4K Blockbusters',
    series: 'Top Series IPTV Provider | Binge TV Shows on Demand',
    documentaries: 'Documentaries IPTV Channels | Nature & History in HD',
    anime: 'Best Anime IPTV | Sub & Dub Channels Streaming in HD'
  };

  const title = seoTitles[category.id] || `${category.name} IPTV Subscription | Free Trial`;

  return genMeta({
    title,
    description: `Get the best ${category.name} IPTV subscription with a free trial. Stream ${category.channelCount} live ${category.name.toLowerCase()} channels in 4K/UHD without buffering. Trusted by 20,000+ users worldwide.`,
    canonical: category.href,
    keywords: [
      `${category.name.toLowerCase()} iptv`,
      `best iptv for ${category.name.toLowerCase()}`,
      `live ${category.name.toLowerCase()} streaming`,
      `4k ${category.name.toLowerCase()} channels`,
      `buffer-free ${category.name.toLowerCase()} iptv`
    ]
  })
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.id,
  }))
}

// ─── SEO Content Data ────────────────────────────────────────────────────────
const getSeoContent = (slug: string) => {
  switch (slug) {
    case 'sports':
      return {
        h2_1: 'Why Nexus 4K IPTV is the Ultimate Choice for Sports Fans',
        p_1: 'For die-hard sports enthusiasts, missing a crucial goal, a knockout punch, or a photo-finish because of a freezing stream is completely unacceptable. The best sports IPTV subscription needs to offer absolute stability, zero-buffering technology, and crystal-clear 4K UHD resolution. At Nexus 4K IPTV, we have engineered our servers specifically to handle high-demand, high-bandwidth live sports broadcasting. Whether you are cutting the cord or simply looking for an upgrade over your local cable provider, our premium sports IPTV service guarantees you never miss a second of the action.',
        h3_1: 'Unrestricted Access to Global Leagues',
        p_2: 'With over 3,500 dedicated sports channels, you are no longer limited by regional blackouts or expensive geographical sports packages. Stream live NFL, NBA, Premier League football, Champions League, UFC Pay-Per-Views, and Formula 1 races from any location in the world. Our extensive channel list includes premium sports networks from the US, UK, Canada, and across Europe, delivered directly to your Smart TV, Firestick, or mobile device.',
        h3_2: 'Zero Buffering with Anti-Freeze Technology',
        p_3: 'Live sports require real-time data delivery. Our robust global CDN (Content Delivery Network) ensures that your stream remains uninterrupted even during peak events like the Super Bowl or the World Cup final. Paired with our 99.9% uptime guarantee and seamless catch-up features, Nexus 4K IPTV stands unmatched as the premier provider for live sports streaming.'
      };
    case 'movies':
      return {
        h2_1: 'Experience Cinematic Brilliance with Premium Movies IPTV',
        p_1: 'Transform your living room into a private theater with Nexus 4K IPTV. If you are tired of juggling multiple expensive streaming subscriptions just to watch the latest releases, our Movies IPTV package is the ultimate all-in-one solution. We provide instant access to an incredibly vast Video-on-Demand (VOD) library featuring over 70,000 titles. From Hollywood blockbusters and critically acclaimed indie films to timeless classics, everything is available at your fingertips in stunning 4K and Full HD quality.',
        h3_1: 'A Constantly Updated 4K VOD Library',
        p_2: 'Our dedicated team updates the movie library daily, ensuring you get access to theatrical releases and exclusive streaming movies almost immediately. Enjoy seamless playback with support for high-fidelity audio, multiple subtitle languages, and dual-audio tracks. Forget about low-quality streams; our premium servers guarantee a true cinematic experience without the frustrating buffering circles.',
        h3_2: 'Watch Across All Your Devices',
        p_3: 'Whether you prefer watching on a massive OLED Smart TV, a PC, or an Android tablet while traveling, our service is universally compatible. Download any top-rated IPTV player, enter your credentials, and dive directly into the greatest collection of movies available on the internet today.'
      };
    case 'series':
      return {
        h2_1: 'Binge-Watch Without Limits: The Best Series IPTV Provider',
        p_1: 'The golden age of television is here, but keeping up with every hit series across dozens of different platforms is expensive and exhausting. Nexus 4K IPTV simplifies your entertainment by bringing every major TV show into one massive, easy-to-navigate library. Our Series IPTV package features full box sets of the most popular dramas, comedies, reality TV shows, and sci-fi epics in pristine 4K and 1080p resolution.',
        h3_1: 'Complete Seasons and Instant Updates',
        p_2: 'We know how frustrating it is to start a series only to find missing episodes. Our VOD library is meticulously organized, featuring complete seasons with episodes added within hours of their original broadcast. Whether you are looking for the latest trending premium cable drama or a nostalgic sitcom from the 90s, our search function will help you find exactly what you want to watch instantly.',
        h3_3: 'Seamless Catch-Up TV Features',
        p_3: 'In addition to our VOD library, our live entertainment channels feature a 7-day catch-up capability. If you miss the live premiere of your favorite show, you don\'t have to wait for it to hit the on-demand section—simply rewind the live channel and start watching. This flexibility is exactly why cord-cutters choose Nexus 4K IPTV.'
      };
    default:
      return {
        h2_1: `Premium ${categories.find(c => c.id === slug)?.name} Streaming with Nexus 4K IPTV`,
        p_1: `Discover the ultimate way to stream ${categories.find(c => c.id === slug)?.name?.toLowerCase()} content. Our premium IPTV subscription provides you with thousands of high-definition channels dedicated entirely to your favorite niche. With 4K streaming capabilities, advanced anti-freeze technology, and universal device compatibility, we are the industry-leading choice for cord-cutters worldwide.`,
        h3_1: `Unmatched ${categories.find(c => c.id === slug)?.name} Content Variety`,
        p_2: `Stop paying for expensive cable packages that force you to buy channels you never watch. With Nexus 4K IPTV, you get direct access to the world's best ${categories.find(c => c.id === slug)?.name?.toLowerCase()} networks. Enjoy unrestricted, global access to premium content, continuously updated to ensure you never run out of things to watch.`,
        h3_2: 'Next-Generation Streaming Stability',
        p_3: 'Experience true reliability. Our global CDN infrastructure guarantees 99.9% uptime, meaning your streams start instantly and stay crystal clear. Coupled with 24/7 customer support and an easy setup process, transitioning to Nexus 4K IPTV is the smartest decision for your entertainment needs.'
      };
  }
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

  const seo = getSeoContent(slug);

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

      {/* Semantic SEO Long-Form Content */}
      <section className="section">
        <div className="container">
          <article className={styles.content}>
            <h2>{seo.h2_1}</h2>
            <p>
              {seo.p_1} For more information on pricing, visit our <Link href="/#pricing" className={styles.internalLink}>premium subscription plans</Link>.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>{seo.h3_1}</h3>
                <p>{seo.p_2}</p>
              </div>
              <div className={styles.feature}>
                <h3>{seo.h3_2}</h3>
                <p>{seo.p_3} Need help setting up? Check our <Link href="/blog" className={styles.internalLink}>installation guides</Link>.</p>
              </div>
              <div className={styles.feature}>
                <h3>High Definition 4K Support</h3>
                <p>Experience content the way it was meant to be seen. All of our {category.name.toLowerCase()} streams are optimized for large displays, offering true 1080p and 4K Ultra HD clarity without bandwidth throttling.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  )
}
