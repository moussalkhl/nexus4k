import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './CTASection.module.css';

const features = [
  {
    title: 'Instant Setup',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    title: 'Zero Buffering',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    title: 'All Devices',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    title: '24/7 Support',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    )
  }
];

export function CTASection() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      {/* Massive cosmic background glow for the entire section */}
      <div className={styles.sectionGlow} />

      <div className="container">
        {/* Main CTA Card */}
        <div className={styles.ctaCard}>
          {/* Animated cosmic background behind card */}
          <div className={styles.cardGlow} aria-hidden="true" />
          
          {/* Spinning gradient border */}
          <div className={styles.spinningBorder} />
          
          <div className={styles.cardContent}>
            
            {/* Top Mini Features Floating Pills */}
            <div className={styles.featuresPills}>
              {features.map((f, i) => (
                <div key={i} className={styles.pill}>
                  <div className={styles.pillIcon}>{f.icon}</div>
                  <span className={styles.pillText}>{f.title}</span>
                </div>
              ))}
            </div>

            <h2 className={styles.title} id="cta-heading">
              Ready to Upgrade Your <br className={styles.breakMobile} /><span className={styles.gradientText}>TV Experience?</span>
            </h2>
            
            <p className={styles.subtitle}>
              Premium access, instant delivery. Join 20K+ happy customers today and never miss a game again. Stop paying for expensive cable.
            </p>

            <div className={styles.btnGroup}>
              <Link href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsappMessage)}`} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} title="Activate your Nexus IPTV subscription on WhatsApp">
                <span className={styles.btnPulse} />
                <span className={styles.btnText}>Activate IPTV Now</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.btnIcon}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              
              <Link href="/contact" className={styles.secondaryBtn} title="Contact our support team for help">
                Get Setup Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
