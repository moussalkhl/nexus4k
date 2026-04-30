'use client';

import { useRef, useState } from 'react';
import styles from './FeaturesSection.module.css';

const FEATURES = [
  {
    id: 'channels',
    title: '30,000+ Live Channels',
    description: 'Dive into the ultimate galaxy of premium sports, news, and entertainment from 150+ countries.',
    span: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    id: 'quality',
    title: '4K / UHD Streams',
    description: 'Crystal clear feeds with our adaptive bitrate technology.',
    span: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
  },
  {
    id: 'vod',
    title: 'VOD Universe',
    description: '100,000+ movies & series updated daily.',
    span: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    ),
  },
  {
    id: 'speed',
    title: 'Zero Buffering',
    description: 'High-performance global CDN guarantees smooth streaming.',
    span: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: 'devices',
    title: 'All Devices',
    description: 'Watch on Firestick, Smart TVs, Android, iOS, and PC.',
    span: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: 'uptime',
    title: '99.9% Uptime Guarantee',
    description: 'Our enterprise-grade server infrastructure ensures that you never miss a crucial moment of your favorite live sports or shows.',
    span: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
];

function BentoCard({ feature }: { feature: typeof FEATURES[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${styles[`span${feature.span}`]}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Background image for specific cards */}
      {feature.id === 'channels' && <div className={styles.galaxyImage} />}
      {feature.id === 'uptime' && <div className={styles.gridOverlay} />}
      
      {/* Interactive spotlight glow */}
      <div 
        className={styles.spotlight} 
        style={{ opacity: isHovering ? 1 : 0 }} 
      />
      
      {/* Glow border overlay */}
      <div 
        className={styles.borderGlow} 
        style={{ opacity: isHovering ? 1 : 0 }} 
      />
      
      <div className={styles.content}>
        <div className={styles.iconWrap}>
          {feature.icon}
        </div>
        <div>
          <div className={styles.cardTitle}>{feature.title}</div>
          <p className={styles.cardDescription}>{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="features-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <header className={styles.header}>
          <span className="section-label">Why Nexus4kTV</span>
          <h2 className="section-title" id="features-heading">
            Why Choose <span className="text-gradient">Nexus4kTV?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Experience the next generation of IPTV with advanced features tailored for
            cord-cutters and sports enthusiasts.
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
