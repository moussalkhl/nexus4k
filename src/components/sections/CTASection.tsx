import Link from 'next/link';
import styles from './CTASection.module.css';

const features = [
  {
    title: 'Instant Setup',
    desc: 'Get connected in under 5 minutes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    title: 'Instant Activation',
    desc: 'Credentials delivered immediately.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    title: 'All Your Devices',
    desc: 'Firestick, TV, Android, iOS, PC.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    title: 'Setup Support',
    desc: 'Step-by-step guides included.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    )
  }
];

export function CTASection() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        
        {/* Top Mini Features Row */}
        <div className={styles.featuresRow}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureItem}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureText}>
                <div className={styles.featureTitle}>{f.title}</div>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className={styles.ctaCard}>
          {/* Animated cosmic background behind card */}
          <div className={styles.cardGlow} aria-hidden="true" />
          
          <div className={styles.cardContent}>
            <h2 className={styles.title} id="cta-heading">
              Ready to Upgrade Your <span className={styles.gradientText}>TV Experience?</span>
            </h2>
            
            <p className={styles.subtitle}>
              Premium access, instant delivery. Join 20K+ happy customers today and never miss a game again.
            </p>

            <div className={styles.btnGroup}>
              <Link href="https://wa.me/447476603520?text=Hi!%20I%27m%20ready%20to%20upgrade%20my%20entertainment%20with%20a%20premium%20Nexus%204K%20IPTV%20subscription.%20How%20can%20I%20get%20started%3F" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} title="Contact us on WhatsApp for premium IPTV access">
                Get Premium Access
              </Link>
              <Link href="/#pricing" className={styles.secondaryBtn} title="View all our IPTV pricing plans">
                View All Plans
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
