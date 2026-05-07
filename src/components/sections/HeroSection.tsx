import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './HeroSection.module.css';
import { HeroTimer } from './HeroTimer';

export function HeroSection() {

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Immersive Galactic Background */}
      <div className={styles.bgGlowMain} aria-hidden="true" />
      <div className={styles.bgGlowAccent} aria-hidden="true" />
      
      {/* Animated Perspective Grid Floor (Creative Out of the Box touch) */}
      <div className={styles.gridFloor} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Top Badge */}
        <div className={styles.badge} role="text">
          <span className={styles.pulseDot} aria-hidden="true" />
          <span>#1 Rated IPTV 2026</span>
        </div>

        {/* Massive Headline (H1 - Exactly One) */}
        <h1 className={styles.heading}>
          Nexus 4K IPTV – The Premium Streaming Service
        </h1>
        
        {/* SEO Required Subtitle (First 100 words focus keyword) */}
        <p className={styles.subtitle} style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Experience the ultimate entertainment with <strong>Nexus 4K IPTV</strong>. Stream over 30,000+ live TV channels, sports, movies, and VODs in breathtaking 4K UHD quality with zero buffering.
        </p>

        {/* Urgency Timer Box */}
        <HeroTimer />

        {/* CTA Buttons */}
        <div className={styles.ctas}>
          <Link href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsappMessage)}`} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} title="Contact us on WhatsApp for premium IPTV access">
            Get Free Trial
          </Link>
          <Link href="/#pricing" className={styles.secondaryBtn} title="View our competitive IPTV pricing plans">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            See Pricing
          </Link>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className={styles.trustBarWrapper}>
        <div className="container">
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>30K+</div>
              <p>CHANNELS</p>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>4K UHD</div>
              <p>QUALITY</p>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>99.9%</div>
              <p>UPTIME</p>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>24/7</div>
              <p>SUPPORT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
