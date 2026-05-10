import styles from './TestimonialsSection.module.css';

const REVIEWS = [
  {
    name: 'Marcus T.',
    role: 'Sports Enthusiast',
    text: "I've tried 4 different providers before finding Nexus 4K IPTV. The difference is night and day. Every single Premier League game streams perfectly in 4K with literally zero buffering. Best IPTV service on the market.",
    initials: 'MT'
  },
  {
    name: 'Sarah L.',
    role: 'Cord Cutter',
    text: "Setting up Nexus 4K IPTV on my LG Smart TV took less than 5 minutes. The VOD library is massive and updated daily. My whole family uses this premium IPTV service across 3 devices without a single hitch.",
    initials: 'SL'
  },
  {
    name: 'Omar K.',
    role: 'Tech Savvy User',
    text: "The stability of Nexus 4K IPTV is simply unmatched. Even during massive UFC and PPV events, the anti-freeze servers hold up perfectly. The 24/7 WhatsApp support team is also incredibly fast and helpful.",
    initials: 'OK'
  },
  {
    name: 'Emma R.',
    role: 'Movie Buff',
    text: "The 4K movie and series selection on Nexus 4K IPTV is mind-blowing. I dropped all my expensive cable subscriptions. I highly recommend this premium IPTV subscription to anyone looking to cut the cord.",
    initials: 'ER'
  },
  {
    name: 'David W.',
    role: 'Expat',
    text: "Thanks to Nexus 4K IPTV, I can finally watch all my local international channels in crystal clear HD and 4K quality. The 7-day catch-up TV feature has been an absolute lifesaver for my family.",
    initials: 'DW'
  },
  {
    name: 'Alex J.',
    role: 'Binge Watcher',
    text: "From the slick live TV interface to the massive anime collection, everything about Nexus 4K IPTV is perfectly polished. The TV guide (EPG) is incredibly accurate. Easily a 10/10 streaming experience.",
    initials: 'AJ'
  }
];

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className={styles.reviewText}>"{review.text}"</p>
      
      <div className={styles.user}>
        <div className={styles.avatar}>
          {review.initials}
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{review.name}</div>
          <span className={styles.userRole}>{review.role}</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h2 className={styles.title} id="testimonials-heading">
            What Our <span className={styles.highlight}>Nexus 4K IPTV Customers Say</span>
          </h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. See what our community has to say about their streaming experience.
          </p>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        {/* First group */}
        <div className={styles.marqueeGroup}>
          {REVIEWS.map((review, index) => (
            <ReviewCard key={`g1-${index}`} review={review} />
          ))}
        </div>
        
        {/* Duplicated group for seamless infinite scrolling */}
        <div className={styles.marqueeGroup} aria-hidden="true" data-nosnippet role="presentation">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={`g2-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
