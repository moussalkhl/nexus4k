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
  { name: 'Dune: Part Two', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Dune_Part_Two_poster.jpeg/250px-Dune_Part_Two_poster.jpeg' },
  { name: 'Deadpool & Wolverine', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg' },
  { name: 'Inside Out 2', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg' },
  { name: 'Shōgun', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Sh%C5%8Dgun_%282024_miniseries%29_poster.jpg/250px-Sh%C5%8Dgun_%282024_miniseries%29_poster.jpg' },
  { name: 'Fallout', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Fallout_television_series_logo.svg/250px-Fallout_television_series_logo.svg.png' },
  { name: 'Oppenheimer', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg' },
  { name: 'The Last of Us', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/The_Last_of_Us_logo.svg/250px-The_Last_of_Us_logo.svg.png' },
  { name: 'The Boys', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Boys_TV_series_logo.svg/250px-The_Boys_TV_series_logo.svg.png' },
  { name: 'House of the Dragon', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/House_of_the_dragon_logo.png/250px-House_of_the_dragon_logo.png' },
  { name: 'Godzilla x Kong', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Godzilla_x_kong_the_new_empire_poster.jpg/250px-Godzilla_x_kong_the_new_empire_poster.jpg' }
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
