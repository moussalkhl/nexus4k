import type { CSSProperties } from 'react';
import Image from 'next/image';
import styles from './ContentShowcase.module.css';

const SPORT_LOGOS = [
  { name: 'Champions League', img: '/sports-logos/S2.png',  accent: '#c9a227' },
  { name: 'NBA',              img: '/sports-logos/s1.png',  accent: '#c9082a' },
  { name: 'Eurosport',        img: '/sports-logos/S4.png',  accent: '#0057a8' },
  { name: 'Premier League',  img: '/sports-logos/S5.png',  accent: '#3d195b' },
  { name: 'Sport1',           img: '/sports-logos/S3.png',  accent: '#e30613' },
  { name: 'MLB',              img: '/sports-logos/S6.png',  accent: '#002d72' },
  { name: 'NFL',              img: '/sports-logos/S7.png',  accent: '#013369' },
  { name: 'LaLiga',           img: '/sports-logos/S8.png',  accent: '#fe4b44' },
  { name: 'Bundesliga',       img: '/sports-logos/S9.png',  accent: '#d9000d' },
  { name: 'Ligue 1',          img: '/sports-logos/S10.png', accent: '#5f7eb3' },
];

const MOVIE_ITEMS = [
  { name: 'Dune: Part Two', img: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGqq9TrU.jpg' },
  { name: 'Deadpool & Wolverine', img: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' },
  { name: 'Inside Out 2', img: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzRxMgG2MHe.jpg' },
  { name: 'Shōgun', img: 'https://static.tvmaze.com/uploads/images/original_untouched/506/1265637.jpg' },
  { name: 'Fallout', img: 'https://static.tvmaze.com/uploads/images/original_untouched/599/1499142.jpg' },
  { name: 'Oppenheimer', img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
  { name: 'The Last of Us', img: 'https://static.tvmaze.com/uploads/images/original_untouched/563/1409008.jpg' },
  { name: 'The Boys', img: 'https://static.tvmaze.com/uploads/images/original_untouched/619/1547768.jpg' },
  { name: 'House of the Dragon', img: 'https://static.tvmaze.com/uploads/images/original_untouched/627/1567790.jpg' },
  { name: 'Godzilla x Kong', img: 'https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLvLuPEg0rT1K1r.jpg' }
];

const KIDS_ITEMS = [
  { name: 'Mummies',             img: '/kids-posters/K1.png' },
  { name: 'Finnick',             img: '/kids-posters/K2.png' },
  { name: 'The Angry Birds Movie', img: '/kids-posters/K3.png' },
  { name: 'Teen Titans GO!',     img: '/kids-posters/K4.png' },
  { name: 'Kids Movie 5',        img: '/kids-posters/K5.png' },
  { name: 'Kids Movie 6',        img: '/kids-posters/K6.png' },
  { name: 'Kids Movie 7',        img: '/kids-posters/K7.png' },
  { name: 'Kids Movie 8',        img: '/kids-posters/K8.png' },
];

export function ContentShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.glowBg} />
      <div className={styles.container}>

        {/* ── Sports Row ─────────────────────────────────────── */}
        <div className={styles.rowContainer}>
          <h2 className={styles.rowTitle}>
            {"DON'T MISS THE BEST"} <span className={styles.highlight}>NEXUS 4K IPTV</span> SPORTS
          </h2>
          <div className={styles.carouselWrapper}>
            <div className={`${styles.carouselTrack} ${styles.scrollLeft}`}>
              {[...SPORT_LOGOS, ...SPORT_LOGOS].map((item, i) => (
                <div
                  key={i}
                  className={`${styles.card} ${styles.logoCard}`}
                  style={{ '--accent': item.accent } as CSSProperties}
                >
                  <div className={styles.logoGlow} style={{ background: item.accent }} />
                  <div className={styles.logoImgWrap}>
                    <Image
                      src={item.img}
                      alt={`${item.name} on Nexus 4K IPTV`}
                      loading="lazy"
                      className={styles.logoImg}
                      fill
                      sizes="200px"
                    />
                  </div>
                  <span className={styles.logoLabel}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Movies Row ─────────────────────────────────────── */}
        <div className={styles.rowContainer}>
          <h2 className={styles.rowTitle}>
            POPULAR MOVIES ON <span className={styles.highlight}>NEXUS 4K IPTV</span>
          </h2>
          <div className={styles.carouselWrapper}>
            <div className={`${styles.carouselTrack} ${styles.scrollRight}`}>
              {[...MOVIE_ITEMS, ...MOVIE_ITEMS].map((item, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={item.img} alt={`${item.name} on Nexus 4K IPTV`} loading="lazy" className={styles.cardImage} width={280} height={420} unoptimized referrerPolicy="no-referrer" />
                    <div className={styles.cardOverlay}>
                      <span className={styles.cardTitle}>{item.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Kids Row ───────────────────────────────────────── */}
        <div className={styles.rowContainer}>
          <h2 className={styles.rowTitle}>
            BEST STREAMING FOR <span className={styles.highlight}>KIDS</span>
          </h2>
          <div className={styles.carouselWrapper}>
            <div className={`${styles.carouselTrack} ${styles.scrollLeft}`}>
              {[...KIDS_ITEMS, ...KIDS_ITEMS].map((item, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={item.img} alt={`${item.name} on Nexus 4K IPTV`} loading="lazy" className={styles.cardImage} width={280} height={420} />
                    <div className={styles.cardOverlay}>
                      <span className={styles.cardTitle}>{item.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
