import Link from 'next/link';
import { categories } from '@/config/site';
import styles from './CategoriesSection.module.css';

const categoryAssets = [
  {
    bg: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop', // Sports
    accent: '#00d4ff',
  },
  {
    bg: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop', // Movies
    accent: '#ff4757',
  },
  {
    bg: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000&auto=format&fit=crop', // Series
    accent: '#a855f7',
  },
  {
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop', // Documentaries
    accent: '#2ed573',
  },
  {
    bg: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop', // Anime
    accent: '#ffa502',
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  sports: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
  ),
  movies: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
  ),
  series: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
  ),
  documentaries: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
  ),
  anime: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  ),
};

export function CategoriesSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="categories-heading">
      <div className="container">
        <header className={styles.header}>
          <span className="section-label">Endless Entertainment</span>
          <h2 className="section-title" id="categories-heading">
            Explore Your <span className="text-gradient">Content Universe</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From live sports and Hollywood blockbusters to anime and documentaries —
            Nexus 4K IPTV brings you the best of every world in flawless quality.
          </p>
        </header>

        <div className={styles.galleryContainer}>
          {categories.map((cat, index) => {
            const asset = categoryAssets[index] || categoryAssets[0];
            return (
              <div 
                key={cat.id}
                className={styles.card}
                style={{ 
                  '--accent': asset.accent,
                  backgroundImage: `url(${asset.bg})`
                } as React.CSSProperties}
              >
                {/* Dark overlay for contrast */}
                <div className={styles.cardOverlay} />
                
                {/* Glowing border effect */}
                <div className={styles.cardGlowBorder} />

                {/* Massive Index Number */}
                <div className={styles.hugeNumber}>0{index + 1}</div>

                <div className={styles.contentWrapper}>
                  {/* Closed State Title (Horizontal) */}
                  <div className={styles.collapsedBadge}>
                    <div className={styles.iconWrapSmall}>
                      {categoryIcons[cat.id]}
                    </div>
                    <span>{cat.name}</span>
                  </div>

                  {/* Expanded Content */}
                  <div className={styles.expandedContent}>
                    <div className={styles.iconWrapLarge}>
                      {categoryIcons[cat.id]}
                    </div>
                    
                    <div className={styles.textContent}>
                      <h3 className={styles.name}>{cat.name}</h3>
                      <div className={styles.countBadge}>{cat.channelCount} Channels</div>
                      <p className={styles.description}>{cat.description}</p>
                      
                      <Link href={cat.href} className={styles.exploreBtn} title={`Explore ${cat.name}`}>
                        <span>Explore {cat.name}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <Link href="/categories" className="btn btn--secondary" title="Browse all IPTV channel categories">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
