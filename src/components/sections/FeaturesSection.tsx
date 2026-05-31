import React from 'react';
import styles from './FeaturesSection.module.css';

const FEATURES = [
  {
    id: 'channels',
    title: '30,000+',
    subtitle: 'Live Channels Worldwide',
    description: 'Dive into the ultimate galaxy of premium sports, news, and entertainment from 150+ countries. Zero geo-blocks. Absolute freedom.',
    colSpan: 2,
    rowSpan: 1,
    accent: '#8b5cf6', // purple
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
    ),
  },
  {
    id: 'quality',
    title: '4K / UHD',
    subtitle: 'Crystal Clear Streams',
    description: 'Experience every detail perfectly with our adaptive bitrate and direct-source technology.',
    colSpan: 1,
    rowSpan: 2,
    accent: '#0ea5e9', // cyan
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
    ),
  },
  {
    id: 'speed',
    title: 'Zero',
    subtitle: 'Buffering & Lag',
    description: 'Our high-performance global CDN network guarantees flawlessly smooth streaming even during peak times.',
    colSpan: 1,
    rowSpan: 1,
    accent: '#f43f5e', // rose
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    ),
  },
  {
    id: 'vod',
    title: '100k+',
    subtitle: 'VOD Universe',
    description: 'An endless, massive library of blockbuster movies & series updated daily.',
    colSpan: 1,
    rowSpan: 1,
    accent: '#10b981', // emerald
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="10 8 16 12 10 16 10 8"></polygon><circle cx="12" cy="12" r="10"></circle></svg>
    ),
  },
  {
    id: 'uptime',
    title: '99.9%',
    subtitle: 'Uptime Guarantee',
    description: 'Enterprise-grade server infrastructure ensures you never miss a crucial moment of your favorite live sports or breaking news.',
    colSpan: 2,
    rowSpan: 1,
    accent: '#f59e0b', // amber
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
    ),
  },
  {
    id: 'devices',
    title: 'Any',
    subtitle: 'Device Supported',
    description: 'Watch seamlessly on Firestick, Smart TVs, Android, iOS, Apple TV, and PC.',
    colSpan: 1,
    rowSpan: 1,
    accent: '#ec4899', // pink
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    ),
  },
];

function BentoCard({ feature }: { feature: typeof FEATURES[0] }) {
  const customStyle = {
    '--accent': feature.accent,
    '--col-span': feature.colSpan,
    '--row-span': feature.rowSpan,
  } as React.CSSProperties;

  return (
    <div className={`${styles.card} ${styles[feature.id]}`} style={customStyle}>
      <div className={styles.cardBgGlow} />
      
      {/* Massive Watermark Icon */}
      <div className={styles.watermarkIcon}>
        {feature.icon}
      </div>

      <div className={styles.content}>
        <div className={styles.iconWrap}>
          {feature.icon}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.cardTitle}>{feature.title}</div>
          <div className={styles.cardSubtitle}>{feature.subtitle}</div>
          <p className={styles.cardDescription}>{feature.description}</p>
        </div>
      </div>
      
      {/* Interactive hover effects */}
      <div className={styles.borderHighlight} />
      <div className={styles.shine} />
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="features-heading">
      <div className={styles.ambientGlow} aria-hidden="true" />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <header className={styles.header}>
          <span className={styles.pill}>Next-Gen Infrastructure</span>
          <h2 className={styles.mainHeading} id="features-heading">
            Unleash the Power of <span className="text-gradient">Nexus 4K</span>
          </h2>
          <p className={styles.subHeading}>
            We've completely re-engineered the streaming experience from the ground up, delivering unmatched speeds, perfect reliability, and breathtaking quality.
          </p>
        </header>

        <div className={styles.bentoGrid}>
          {FEATURES.map((feature) => (
            <BentoCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
