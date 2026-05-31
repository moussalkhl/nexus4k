import Image from 'next/image';
import styles from './ContentShowcase.module.css';

export function ContentShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.glowBg} />
      <div className={`container ${styles.container}`}>
        
        {/* Live Sports Block */}
        <div className={styles.block}>
          <h2 className={styles.title}>
            All Premium <span className={styles.highlight}>Live Sports</span>
          </h2>
          <p className={styles.subtitle}>
            Never miss a match. Stream the NFL, Champions League, NBA, Premier League, Formula 1, and every major global sporting event live in breathtaking 4K UHD.
          </p>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/sports-collage.jpg" 
              alt="Live Sports Channels on Nexus 4K IPTV including NFL, NBA, Premier League, Champions League, F1, and NHL" 
              width={1600} 
              height={400} 
              className={styles.collage}
              loading="lazy"
            />
          </div>
        </div>

        {/* Movies Block */}
        <div className={styles.block}>
          <h2 className={styles.title}>
            Unlimited <span className={styles.highlight}>VOD Movies & Series</span>
          </h2>
          <p className={styles.subtitle}>
            Access a massive library of 100,000+ top-rated movies, trending TV series, and cinematic masterpieces updated daily.
          </p>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/movies-collage.jpg" 
              alt="Latest VOD Movies on Nexus 4K IPTV including Oppenheimer, Spider-Man, Scream VI, and Extraction 2" 
              width={1600} 
              height={400} 
              className={styles.collage}
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
