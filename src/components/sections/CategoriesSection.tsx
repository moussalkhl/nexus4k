'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/config/site';
import styles from './CategoriesSection.module.css';

const bgGradients = [
  'linear-gradient(135deg, #001f3f, #00d4ff)', // Sports - Cyan
  'linear-gradient(135deg, #3f000f, #ff4757)', // Movies - Red
  'linear-gradient(135deg, #1f003f, #a855f7)', // Series - Purple
  'linear-gradient(135deg, #003f1f, #2ed573)', // Documentaries - Green
  'linear-gradient(135deg, #3f2a00, #ffa502)', // Anime - Yellow
];

const categoryIcons: Record<string, React.ReactNode> = {
  sports: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  ),
  movies: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
  ),
  series: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
      <polyline points="17 2 12 7 7 2"></polyline>
    </svg>
  ),
  documentaries: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  ),
  anime: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
};

export function CategoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="categories-heading">
      <div className="container">
        <header className={styles.header}>
          <span className="section-label">What We Stream</span>
          <h2 className="section-title" id="categories-heading">
            What's Included in Your <span className="text-gradient">Nexus IPTV Subscription</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From live sports and Hollywood blockbusters to anime and documentaries —
            Nexus 4K IPTV has every category covered in stunning HD quality.
          </p>
        </header>

        <div className={styles.accordionContainer}>
          {categories.map((cat, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={cat.id}
                className={`${styles.card} ${isActive ? styles.active : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                style={{ background: bgGradients[index] }}
              >
                <div className={styles.cardOverlay} />
                
                <div className={styles.iconWrap}>
                  {categoryIcons[cat.id] || <span className={styles.iconText}>{cat.icon}</span>}
                </div>

                <div className={styles.content}>
                  <div className={styles.textContent}>
                    <h3 className={styles.name}>{cat.name}</h3>
                    <p className={styles.count}>{cat.channelCount} Channels</p>
                    <p className={styles.description}>{cat.description}</p>
                    <Link href={cat.href} className={styles.exploreBtn}>
                      Explore {cat.name} <span>→</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.verticalTitle}>
                  {cat.name}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <Link href="/categories" className="btn btn--secondary">
            Explore All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
