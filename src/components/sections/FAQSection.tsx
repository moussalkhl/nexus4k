import Link from 'next/link'
import styles from './FAQSection.module.css'
import { generateFAQJsonLd } from '@/seo/metadata'

const FAQ_ITEMS = [
  {
    question: 'What is IPTV and how does Nexus 4K IPTV work?',
    answer:
      'IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over the internet. Nexus 4K IPTV provides a subscription-based service with 30,000+ channels streamed via our premium server network to any device.',
  },
  {
    question: 'Which devices are compatible with Nexus 4K IPTV?',
    answer:
      'Nexus 4K IPTV works on Smart TVs (Samsung, LG, Sony), Amazon Firestick, Android TV boxes, Android & iOS phones/tablets, Windows and Mac computers, MAG boxes, Formuler, and any IPTV player app.',
  },
  {
    question: 'How many simultaneous connections can I use?',
    answer:
      'The Basic plan includes 1 connection, Premium includes 3, and the Ultra Galaxy plan supports up to 5 simultaneous connections on different devices.',
  },
  {
    question: 'What internet speed do I need for 4K streaming?',
    answer:
      'We recommend at least 25 Mbps for 4K/UHD channels, 10 Mbps for FHD 1080p, and 5 Mbps for HD 720p. A stable wired connection or strong Wi-Fi is ideal.',
  },
  {
    question: 'Is Nexus 4K IPTV available worldwide?',
    answer:
      'Yes. Nexus 4K IPTV operates globally across 150+ countries. Our CDN infrastructure ensures low-latency, buffer-free streaming regardless of your location.',
  },
  {
    question: 'Can I try Nexus 4K IPTV before subscribing?',
    answer:
      'Yes, we offer a free trial period. Contact our support team to request your trial credentials and test the service on your device before committing to a plan.',
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
            <dl className={styles.list}>
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
