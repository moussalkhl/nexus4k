'use client';

import { useEffect, useState } from 'react';
import styles from './StatsSection.module.css';

const SPORTS_ITEMS = ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🥊', '🏏', '⛳', '🎯'];

interface FloatingItem {
  id: number;
  emoji: string;
  radius: number;
  duration: string;
  delay: string;
  size: string;
  opacity: number;
}

export function StatsSection() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate stable random items on client to avoid hydration mismatch
    const generatedItems = Array.from({ length: 30 }).map((_, i) => {
      const radius = 100 + Math.random() * 400; // Orbit radius between 100px and 500px
      const duration = 20 + Math.random() * 40; // Full orbit takes 20s to 60s
      
      return {
        id: i,
        emoji: SPORTS_ITEMS[Math.floor(Math.random() * SPORTS_ITEMS.length)],
        radius,
        duration: `${duration}s`,
        delay: `-${Math.random() * duration}s`, // Start at different points in orbit
        size: `${1.5 + Math.random() * 3}rem`, // Size between 1.5rem and 4.5rem
        opacity: 0.1 + Math.random() * 0.2, // Opacity between 0.1 and 0.3
      };
    });
    setItems(generatedItems);
  }, []);

  return (
    <section className={styles.statsSection} aria-label="Platform Statistics">
      {/* Galactic floating sports background */}
      <div className={styles.galaxyBackground} aria-hidden="true">
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.floatingItem}
            style={{
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            <div 
              className={styles.floatingItemInner}
              style={{
                transform: `translateX(${item.radius}px)`,
                fontSize: item.size,
                opacity: item.opacity,
              }}
            >
              {item.emoji}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.statItem}>
            <div className={styles.number}>
              20K<span className={styles.accent}>+</span>
            </div>
            <div className={styles.label}>Active Users</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.number}>
              30,000<span className={styles.accent}>+</span>
            </div>
            <div className={styles.label}>Live Channels</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.number}>
              100,000<span className={styles.accent}>+</span>
            </div>
            <div className={styles.label}>VOD Titles</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.number}>
              99.9<span className={styles.accent}>%</span>
            </div>
            <div className={styles.label}>Server Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
