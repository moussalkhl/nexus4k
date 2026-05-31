import type { CSSProperties } from 'react';
import Image from 'next/image';
import styles from './ContentShowcase.module.css';

const SPORT_LOGOS = [
  { name: 'Champions League', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/UEFA_Champions_League_logo.svg',  accent: '#c9a227' },
  { name: 'NBA',              img: 'https://upload.wikimedia.org/wikipedia/en/0/03/National_Basketball_Association_logo.svg',  accent: '#c9082a' },
  { name: 'Eurosport',        img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Eurosport_Logo_2015.svg',  accent: '#0057a8' },
  { name: 'Premier League',   img: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',  accent: '#3d195b' },
  { name: 'Sport1',           img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Sport1_Logo_2024.svg',  accent: '#e30613' },
  { name: 'MLB',              img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Major_League_Baseball_logo.svg',  accent: '#002d72' },
  { name: 'NFL',              img: 'https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg',  accent: '#013369' },
  { name: 'LaLiga',           img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg',  accent: '#fe4b44' },
  { name: 'Bundesliga',       img: 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg',  accent: '#d9000d' },
  { name: 'Ligue 1',          img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Ligue_1_Uber_Eats_logo.svg', accent: '#5f7eb3' },
];

const MOVIE_ITEMS = [
  { name: 'Dune: Part Two', img: 'https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg' },
  { name: 'Deadpool & Wolverine', img: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg' },
  { name: 'Inside Out 2', img: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg' },
  { name: 'Shōgun', img: 'https://static.tvmaze.com/uploads/images/original_untouched/506/1265637.jpg' },
  { name: 'Fallout', img: 'https://static.tvmaze.com/uploads/images/original_untouched/599/1499142.jpg' },
  { name: 'Oppenheimer', img: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg' },
  { name: 'The Last of Us', img: 'https://static.tvmaze.com/uploads/images/original_untouched/563/1409008.jpg' },
  { name: 'The Boys', img: 'https://static.tvmaze.com/uploads/images/original_untouched/619/1547768.jpg' },
  { name: 'House of the Dragon', img: 'https://static.tvmaze.com/uploads/images/original_untouched/627/1567790.jpg' },
  { name: 'Godzilla x Kong', img: 'https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg' }
];

const KIDS_ITEMS = [
  { name: 'SpongeBob SquarePants', img: 'https://static.tvmaze.com/uploads/images/original_untouched/594/1486607.jpg' },
  { name: 'Gravity Falls', img: 'https://static.tvmaze.com/uploads/images/original_untouched/2/6140.jpg' },
  { name: 'Peppa Pig', img: 'https://static.tvmaze.com/uploads/images/original_untouched/569/1423757.jpg' },
  { name: 'Miraculous Ladybug', img: 'https://static.tvmaze.com/uploads/images/original_untouched/599/1499134.jpg' },
  { name: 'Avatar: The Last Airbender', img: 'https://static.tvmaze.com/uploads/images/original_untouched/620/1550004.jpg' },
  { name: 'The Amazing World of Gumball', img: 'https://static.tvmaze.com/uploads/images/original_untouched/17/43096.jpg' },
  { name: 'Bluey', img: 'https://static.tvmaze.com/uploads/images/original_untouched/512/1281879.jpg' },
  { name: 'Adventure Time', img: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4898.jpg' },
  { name: 'Phineas and Ferb', img: 'https://static.tvmaze.com/uploads/images/original_untouched/595/1489325.jpg' },
  { name: 'PAW Patrol', img: 'https://static.tvmaze.com/uploads/images/original_untouched/608/1521295.jpg' }
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
