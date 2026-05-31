import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const REVIEWS = [
  {
    name: 'Marcus T.',
    role: 'Sports Enthusiast',
    text: "I've tried 4 different providers before finding Nexus4kTv. The difference is night and day. Every single Premier League game streams perfectly in 4K with literally zero buffering on their Nexus 4K IPTV service. Best IPTV service on the market.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Sarah L.',
    role: 'Cord Cutter',
    text: "Setting up the Nexus4kTv streaming experience on my LG Smart TV took less than 5 minutes. The VOD library is massive and updated daily. My whole family uses this premium Nexus 4K IPTV service across 3 devices without a single hitch.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Omar K.',
    role: 'Tech Savvy User',
    text: "The stability of Nexus 4K IPTV is simply unmatched. Even during massive UFC and PPV events, the anti-freeze servers hold up perfectly. The 24/7 WhatsApp support team is also incredibly fast and helpful.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Emma R.',
    role: 'Movie Buff',
    text: "The 4K movie and series selection on Nexus 4K IPTV is mind-blowing. I dropped all my expensive cable subscriptions. I highly recommend this premium IPTV subscription to anyone looking to cut the cord.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'David W.',
    role: 'Expat',
    text: "Thanks to Nexus 4K IPTV, I can finally watch all my local international channels in crystal clear HD and 4K quality. The 7-day catch-up TV feature has been an absolute lifesaver for my family.",
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Alex J.',
    role: 'Binge Watcher',
    text: "From the slick live TV interface to the massive anime collection, everything about Nexus 4K IPTV is perfectly polished. The TV guide (EPG) is incredibly accurate. Easily a 10/10 streaming experience.",
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop'
  }
];

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#00d4ff" stroke="#00d4ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.6))' }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function ReviewCard({ review, index }: { review: typeof REVIEWS[0], index: number }) {
  // Alternate vertical position for a dynamic scattered look
  const isStaggered = index % 2 !== 0;

  return (
    <div className={`${styles.card} ${isStaggered ? styles.cardStagger : ''}`}>
      {/* Massive Watermark Quote */}
      <div className={styles.quoteMark}>"</div>

      <div className={styles.content}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        
        <p className={styles.reviewText}>"{review.text}"</p>
        
        <div className={styles.user}>
          <div className={styles.avatarWrap}>
            {/* Using standard img for external fast loading, Next.js Image requires config for unsplash */}
            <img src={review.avatar} alt={review.name} className={styles.avatar} loading="lazy" />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{review.name}</div>
            <span className={styles.userRole}>{review.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.ambientGlow} aria-hidden="true" />
      
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <span className={styles.pill}>Community Reviews</span>
          <h2 className={styles.title} id="testimonials-heading">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. Read raw, honest reviews from users who have upgraded their streaming experience.
          </p>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        {/* First group */}
        <div className={styles.marqueeGroup}>
          {REVIEWS.map((review, index) => (
            <ReviewCard key={`g1-${index}`} review={review} index={index} />
          ))}
        </div>
        
        {/* Duplicated group for seamless infinite scrolling */}
        <div className={styles.marqueeGroup} aria-hidden="true" data-nosnippet role="presentation">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={`g2-${index}`} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
