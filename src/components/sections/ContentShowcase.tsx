'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ContentShowcase.module.css';

// ── Sports logo data — mapped to your uploaded images ────────────────────────
// s1=NBA, S2=Champions League, S3=Sport1, S4=Eurosport, S5=Premier League,
// S6=MLB, S7=NFL, S8=LaLiga, S9=Bundesliga, S10=Ligue1

const SPORT_LOGOS = [
  { name: 'Champions League', img: '/sports-logos/S2.png',  accent: '#1a6fc4' },
  { name: 'NBA',              img: '/sports-logos/s1.png',  accent: '#c9082a' },
  { name: 'Eurosport',        img: '/sports-logos/S4.png',  accent: '#cc1f2d' },
  { name: 'Premier League',  img: '/sports-logos/S5.png',  accent: '#3d195b' },
  { name: 'Sport1',           img: '/sports-logos/S3.png',  accent: '#888888' },
  { name: 'MLB',              img: '/sports-logos/S6.png',  accent: '#002d72' },
  { name: 'NFL',              img: '/sports-logos/S7.png',  accent: '#013369' },
  { name: 'LaLiga',           img: '/sports-logos/S8.png',  accent: '#e8a09a' },
  { name: 'Bundesliga',       img: '/sports-logos/S9.png',  accent: '#d3a598' },
  { name: 'Ligue 1',          img: '/sports-logos/S10.png', accent: '#ffffff' },
];

const MOVIE_ITEMS = [
  { name: 'Chicago Fire',        img: '/movie-posters/M1.png' },
  { name: 'Bridget Jones',       img: '/movie-posters/M2.png' },
  { name: 'The Wild Robot',      img: '/movie-posters/M3.png' },
  { name: 'Nosferatu',           img: '/movie-posters/M4.png' },
  { name: 'The Year Between',    img: '/movie-posters/M5.png' },
  { name: 'Love Hurts',          img: '/movie-posters/M6.png' },
  { name: 'Hypnotic',            img: '/movie-posters/M7.png' },
  { name: 'Brooklyn Nine-Nine',  img: '/movie-posters/M8.png' },
  { name: 'State of Consciousness',img: '/movie-posters/M9.png' },
  { name: 'The Vampire Diaries', img: '/movie-posters/M10.png' },
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
  const tripleLogos = [...SPORT_LOGOS, ...SPORT_LOGOS, ...SPORT_LOGOS];

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.glowBg} />

      <div className={styles.container}>

        {/* ── Sports Logo Row ────────────────────────────────── */}
        <div className={styles.rowContainer}>
          <h2 className={styles.rowTitle}>
            {"DON'T MISS OUT OUR BEST"} <span className={styles.highlight}>SPORT LIVE</span> CHANNELS
          </h2>
          <div className={styles.carouselWrapper}>
            <div className={`${styles.carouselTrack} ${styles.scrollLeft}`}>
              {tripleLogos.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.card} ${styles.logoCard}`}
                  style={{ '--accent': item.accent } as React.CSSProperties}
                >
                  {/* Accent glow blob behind the logo */}
                  <div className={styles.logoGlow} style={{ background: item.accent }} />

                  <div className={styles.logoImgWrap}>
                    <Image
                      src={item.img}
                      alt={`${item.name} on Nexus 4K IPTV - Watch live sports in 4K on Nexus IPTV – PPV and EPG included`}
                      fill
                      unoptimized
                      className={styles.logoImg}
                    />
                  </div>

                  {/* Name label at the bottom */}
                  <span className={styles.logoLabel}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Movies Row ─────────────────────────────────────── */}
        <div className={styles.rowContainer}>
          <h2 className={styles.rowTitle}>
            THE MOST <span className={styles.highlight}>POPULAR</span> MOVIES
          </h2>
          <div className={styles.carouselWrapper}>
            <div className={`${styles.carouselTrack} ${styles.scrollRight}`}>
              {[...MOVIE_ITEMS, ...MOVIE_ITEMS, ...MOVIE_ITEMS].map((item, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={item.img} alt={`${item.name} - 30,000+ live channels available on Nexus 4K IPTV`} fill unoptimized className={styles.cardImage} />
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
              {[...KIDS_ITEMS, ...KIDS_ITEMS, ...KIDS_ITEMS].map((item, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={item.img} alt={`${item.name} - Kids streaming on Nexus 4K IPTV`} fill unoptimized className={styles.cardImage} />
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
