'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsSection.module.css';

const SPORTS_ITEMS = ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🥊', '🏏', '⛳', '🎯'];

interface Stat {
  end: number;
  label: string;
  decimals: number;
  format: (val: number) => string;
}

const STATS: Stat[] = [
  {
    end: 20,
    label: 'Active Users',
    decimals: 0,
    format: (v) => `${Math.round(v)}K+`,
  },
  {
    end: 30000,
    label: 'Live Channels',
    decimals: 0,
    format: (v) => `${Math.round(v).toLocaleString()}+`,
  },
  {
    end: 100000,
    label: 'VOD Titles',
    decimals: 0,
    format: (v) => `${Math.round(v).toLocaleString()}+`,
  },
  {
    end: 99.9,
    label: 'Server Uptime',
    decimals: 1,
    format: (v) => `${v.toFixed(1)}%`,
  },
];

const DURATION = 2000; // ms
const EASING = (t: number) => 1 - Math.pow(1 - t, 3); // ease-out cubic

function useCountUp(end: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const easedProgress = EASING(progress);
      const current = easedProgress * end;
      setValue(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, end, decimals]);

  return value;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.end, stat.decimals, active);
  return (
    <div className={styles.statItem}>
      <div className={styles.number}>{stat.format(value)}</div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

// Stable floating items — generated once outside the component
const FLOATING_ITEMS = Array.from({ length: 30 }).map((_, i) => {
  const radius = 100 + ((i * 137.508) % 400);
  const duration = 20 + ((i * 13) % 40);
  const size = 1.5 + ((i * 0.17) % 3);
  const opacity = 0.1 + ((i * 0.023) % 0.2);
  return {
    id: i,
    emoji: SPORTS_ITEMS[i % SPORTS_ITEMS.length],
    radius,
    duration: `${duration}s`,
    delay: `-${(i * duration) / 30}s`,
    size: `${size}rem`,
    opacity,
  };
});

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset then re-trigger so the count restarts each visit
          setActive(false);
          requestAnimationFrame(() => setActive(true));
        } else {
          setActive(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.statsSection} aria-label="Platform Statistics">
      {/* Galactic floating sports background */}
      <div className={styles.galaxyBackground} aria-hidden="true">
        {FLOATING_ITEMS.map((item) => (
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
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
