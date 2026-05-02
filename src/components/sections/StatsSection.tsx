
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

function StatItem({ stat }: { stat: Stat }) {
  return (
    <div className={styles.statItem}>
      <div className={styles.number}>{stat.format(stat.end)}</div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export function StatsSection() {
  // Generate floating sports emojis purely on the server to avoid hydration issues and JS load
  const items: FloatingItem[] = Array.from({ length: 30 }).map((_, i) => {
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
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
