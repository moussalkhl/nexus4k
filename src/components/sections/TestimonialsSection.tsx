import styles from './TestimonialsSection.module.css';

const REVIEWS = [
  {
    name: 'Marcus T.',
    role: 'Sports Enthusiast',
    text: "I've tried 4 different IPTV providers before finding Nexus 4K IPTV. The difference is night and day. Every single Premier League game in 4K with literally zero buffering. Incredible service.",
    initials: 'MT'
  },
  {
    name: 'Sarah L.',
    role: 'Cord Cutter',
    text: "Setting it up on my LG Smart TV took less than 5 minutes. The VOD library is massive and updated faster than Netflix. My whole family uses it across 3 devices without a hitch.",
    initials: 'SL'
  },
  {
    name: 'Omar K.',
    role: 'Tech Savvy User',
    text: "The stability is unmatched. Even during huge PPV events with heavy traffic, the server holds up perfectly. The support team on WhatsApp is also fantastic.",
    initials: 'OK'
  },
  {
    name: 'Emma R.',
    role: 'Movie Buff',
    text: "The 4K movie selection is simply mind-blowing. I dropped all my other streaming subscriptions. Highly recommend to anyone on the fence.",
    initials: 'ER'
  },
  {
    name: 'David W.',
    role: 'Expat',
    text: "Finally I can watch my local channels from back home in crystal clear quality. The catch-up feature has been an absolute lifesaver.",
    initials: 'DW'
  },
  {
    name: 'Alex J.',
    role: 'Binge Watcher',
    text: "From the slick interface to the massive anime collection, everything is polished. The EPG is incredibly accurate too. 10/10.",
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
            What Our <span className={styles.highlight}>Nexus IPTV Customers Say</span>
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
