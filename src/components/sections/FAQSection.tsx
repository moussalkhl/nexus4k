'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './FAQSection.module.css';
import { generateFAQJsonLd } from '@/seo/metadata';

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
    question: 'How many simultaneous connections can I use?',
    answer:
      'Our Nexus 4K IPTV plans are flexible. The Basic plan includes 1 connection, Premium includes 3 connections, and the Ultra Galaxy plan supports up to 5 simultaneous connections, allowing your entire family to stream at once.',
  },
  {
    question: 'What internet speed do I need for 4K streaming?',
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
    question: 'Is there a TV Guide (EPG) included?',
    answer:
      'Yes, every Nexus 4K IPTV plan includes a fully integrated, highly accurate Electronic Program Guide (EPG). It updates automatically, making it easy to browse live TV schedules and plan your viewing.',
  },
  {
    question: 'Is it safe to use a VPN with Nexus 4K IPTV?',
    answer:
      'Nexus 4K IPTV is fully VPN-friendly. In fact, we strongly recommend using a VPN while streaming to ensure your internet service provider cannot throttle your connection, guaranteeing maximum privacy and top speeds.',
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const faqJsonLd = generateFAQJsonLd(FAQ_ITEMS);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Ambient background glow */}
      <div className={styles.ambientGlow} />

      <div className={`container ${styles.inner}`}>
        {/* Left: Sticky header + CTA */}
        <div className={styles.left}>
          {/* Giant decorative watermark */}
          <div className={styles.watermark}>?</div>
          
          <div className={styles.stickyContent}>
            <span className={styles.pill}>Help Center</span>
            <h2 className={styles.title} id="faq-heading">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className={styles.subtitle}>
              Everything you need to know about setting up and enjoying your Nexus 4K IPTV subscription. Can't find your answer? Our support team is standing by 24/7.
            </p>
            <Link href="/contact" className={styles.btn} title="Contact IPTV Support">
              Contact Support
            </Link>
          </div>
        </div>

        {/* Right: Interactive Glassmorphic FAQ list */}
        <div className={styles.right}>
          <div className={styles.accordion}>
            {FAQ_ITEMS.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.questionWrapper}>
                    <h3 className={styles.question}>{item.question}</h3>
                    <div className={`${styles.iconWrap} ${isActive ? styles.iconActive : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  <div className={`${styles.answerWrapper} ${isActive ? styles.answerOpen : ''}`}>
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
