'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 22, minutes: 19, seconds: 39 });

  // Live countdown timer for extra creativity & conversion urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 24; // loop back for infinite urgency
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Immersive Galactic Background */}
      <div className={styles.bgGlowMain} aria-hidden="true" />
      <div className={styles.bgGlowAccent} aria-hidden="true" />
      
      {/* Animated Perspective Grid Floor (Creative Out of the Box touch) */}
      <div className={styles.gridFloor} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Top Badge */}
        <div className={styles.badge} role="text">
          <span className={styles.pulseDot} aria-hidden="true" />
          <span>#1 Rated IPTV 2026</span>
        </div>

        {/* Massive Headline (H1 - Exactly One) */}
        <h1 className={styles.heading}>
          Nexus 4K IPTV – The Premium Streaming Service
        </h1>
        
        {/* SEO Required Subtitle (First 100 words focus keyword) */}
        <p className={styles.subtitle} style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Experience the ultimate entertainment with <strong>Nexus 4K IPTV</strong>. Stream over 30,000+ live TV channels, sports, movies, and VODs in breathtaking 4K UHD quality with zero buffering.
        </p>
        
        {/* SEO Required Hero Image (for alt text and preload) */}
        <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
          <Image 
            src="/images/og-default.jpg" 
            alt="Nexus 4K IPTV streaming service – live TV channels on all devices" 
            width={1200} 
            height={630} 
            priority
          />
        </div>

        {/* Urgency Timer Box */}
        <div className={styles.timerSection}>
          <p className={styles.timerLabel}>LIMITED TIME OFFER ENDS IN:</p>
          <div className={styles.timerBox}>
            <div className={styles.timeBlock}>
              <span className={styles.timeNum}>{formatTime(timeLeft.hours)}</span>
              <span className={styles.timeText}>HRS</span>
            </div>
            <span className={styles.timeColon}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.timeNum}>{formatTime(timeLeft.minutes)}</span>
              <span className={styles.timeText}>MIN</span>
            </div>
            <span className={styles.timeColon}>:</span>
            <div className={styles.timeBlock}>
              <span className={styles.timeNum} style={{ color: 'var(--color-primary)' }}>{formatTime(timeLeft.seconds)}</span>
              <span className={styles.timeText}>SEC</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={styles.ctas}>
          <Link href="https://wa.me/447476603520?text=Hi!%20I%27m%20ready%20to%20upgrade%20my%20entertainment%20with%20a%20premium%20Nexus%204K%20IPTV%20subscription.%20How%20can%20I%20get%20started%3F" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} title="Contact us on WhatsApp for premium IPTV access">
            Get Premium Access
          </Link>
          <Link href="/#pricing" className={styles.secondaryBtn} title="View our competitive IPTV pricing plans">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            See Pricing
          </Link>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className={styles.trustBarWrapper}>
        <div className="container">
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>30K+</div>
              <p>CHANNELS</p>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>4K UHD</div>
              <p>QUALITY</p>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>99.9%</div>
              <p>UPTIME</p>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>24/7</div>
              <p>SUPPORT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
