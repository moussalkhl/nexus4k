import Link from 'next/link'
import styles from './FAQSection.module.css'
import { generateFAQJsonLd } from '@/seo/metadata'

const FAQ_ITEMS = [
  {
    question: 'What is IPTV and how does Nexus 4K IPTV work?',
    answer:
      'IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over the internet. Nexus 4K IPTV provides a premium subscription-based service with 30,000+ channels streamed via our anti-freeze server network directly to your smart device.',
  },
  {
    question: 'Which devices are compatible with Nexus 4K IPTV?',
    answer:
      'Nexus 4K IPTV works seamlessly on Smart TVs (Samsung, LG, Sony), Amazon Firestick, Android TV boxes, Apple TV, iOS & Android smartphones, Windows, Mac, and any application that supports M3U or Xtream Codes.',
  },
  {
    question: 'How many simultaneous connections can I use with Nexus 4K IPTV?',
    answer:
      'Our Nexus 4K IPTV plans are flexible. The Basic plan includes 1 connection, Premium includes 3 connections, and the Ultra Galaxy plan supports up to 5 simultaneous connections, allowing your entire family to stream at once.',
  },
  {
    question: 'What internet speed do I need for Nexus 4K IPTV streaming?',
    answer:
      'For the best buffer-free experience with Nexus 4K IPTV, we recommend at least 25 Mbps for 4K/UHD channels, 10 Mbps for FHD 1080p, and 5 Mbps for HD 720p. A stable wired ethernet connection is ideal for live sports.',
  },
  {
    question: 'Is Nexus 4K IPTV available worldwide?',
    answer:
      'Yes. Nexus 4K IPTV operates globally across 150+ countries. Our advanced CDN infrastructure ensures low-latency, high-speed streaming regardless of your geographic location.',
  },
  {
    question: 'Does Nexus 4K IPTV include live sports and PPV events?',
    answer:
      'Absolutely. A Nexus 4K IPTV subscription provides VIP access to all major live sports networks, including NFL, NBA, Premier League, Champions League, and exclusive UFC PPV events in stunning 4K quality with zero buffering.',
  },
  {
    question: 'Is there a TV Guide (EPG) included with Nexus 4K IPTV?',
    answer:
      'Yes, every Nexus 4K IPTV plan includes a fully integrated, highly accurate Electronic Program Guide (EPG). It updates automatically, making it easy to browse live TV schedules and plan your viewing.',
  },
  {
    question: 'Does Nexus 4K IPTV offer Video on Demand (VOD) movies and series?',
    answer:
      'Yes! Alongside our live TV channels, Nexus 4K IPTV features a massive, daily-updated VOD library containing over 100,000 4K movies, top-rated TV series, anime, and complete box sets from all major streaming platforms.',
  },
  {
    question: 'Is it safe to use a VPN with Nexus 4K IPTV?',
    answer:
      'Nexus 4K IPTV is fully VPN-friendly. In fact, we strongly recommend using a VPN while streaming to ensure your internet service provider cannot throttle your connection, guaranteeing maximum privacy and top speeds.',
  },
  {
    question: 'Can I try Nexus 4K IPTV before purchasing a full subscription?',
    answer:
      'Yes, we offer a free trial period. Contact our 24/7 WhatsApp support team to request your trial credentials and test the premium performance of Nexus 4K IPTV on your device before committing to a plan.',
  },
]

/**
 * FAQSection — SERVER COMPONENT
 * Includes FAQ JSON-LD structured data for SEO.
 */
export function FAQSection() {
  const faqJsonLd = generateFAQJsonLd(FAQ_ITEMS)

  return (
    <section className={`section ${styles.section}`} aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container">
        <div className={styles.inner}>
          {/* Left: header + CTA */}
          <div className={styles.left}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title" id="faq-heading">
              Frequently Asked Questions About <span className="text-gradient">Nexus 4K IPTV</span>
            </h2>
            <p className={styles.subtitle}>
              Everything you need to know about Nexus 4K IPTV. Can&apos;t find your
              answer? Our support team is available 24/7.
            </p>
            <Link href="/contact" className="btn btn--primary" title="Ask our support team a specific question about our IPTV service">
              Ask a Question
            </Link>
          </div>

          {/* Right: FAQ list */}
          <div className={styles.right}>
            <dl className={styles.list} data-nosnippet>
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className={styles.item}>
                  <dt className={styles.question}>{item.question}</dt>
                  <dd className={styles.answer}>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
