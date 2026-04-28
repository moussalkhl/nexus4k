'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
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

interface Stat {
  end: number;
  suffix: string;
  prefix: string;
  label: string;
  decimals: number;
  /** format the raw numeric value into the display string */
  format: (val: number) => string;
}

const STATS: Stat[] = [
  {
    end: 20,
    suffix: 'K+',
    prefix: '',
    label: 'Active Users',
    decimals: 0,
    format: (v) => `${Math.round(v)}K+`,
  },
  {
    end: 30000,
    suffix: '+',
    prefix: '',
    label: 'Live Channels',
    decimals: 0,
    format: (v) => `${Math.round(v).toLocaleString()}+`,
  },
  {
    end: 100000,
    suffix: '+',
    prefix: '',
    label: 'VOD Titles',
    decimals: 0,
    format: (v) => `${Math.round(v).toLocaleString()}+`,
  },
  {
    end: 99.9,
    suffix: '%',
    prefix: '',
    label: 'Server Uptime',
    decimals: 1,
    format: (v) => `${v.toFixed(1)}%`,
  },
];

const DURATION = 2000; // ms

function useCountUp(target: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = parseFloat((eased * target).toFixed(decimals));
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    },
    [target, decimals]
  );

  useEffect(() => {
    if (!active) {
      setValue(0);
      startRef.current = null;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      return;
    }
    startRef.current = null;
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, animate]);

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

export function StatsSection() {
  const [items, setItems] = useState<FloatingItem[]>([]);
  const [counting, setCounting] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Generate floating sports emojis client-side
  useEffect(() => {
    const generatedItems = Array.from({ length: 30 }).map((_, i) => {
      const radius = 100 + Math.random() * 400;
      const duration = 20 + Math.random() * 40;
      return {
        id: i,
        emoji: SPORTS_ITEMS[Math.floor(Math.random() * SPORTS_ITEMS.length)],
        radius,
        duration: `${duration}s`,
        delay: `-${Math.random() * duration}s`,
        size: `${1.5 + Math.random() * 3}rem`,
        opacity: 0.1 + Math.random() * 0.2,
      };
    });
    setItems(generatedItems);
  }, []);

  // Intersection Observer — fires every time section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset then re-trigger so animation replays each visit
          setCounting(false);
          requestAnimationFrame(() => setCounting(true));
        } else {
          setCounting(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.statsSection} aria-label="Platform Statistics">
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
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={counting} />
          ))}
        </div>
      </div>
    </section>
  );
}
