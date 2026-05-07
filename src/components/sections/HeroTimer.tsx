'use client';

import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

export function HeroTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 59,
    seconds: 59
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if there's a saved end time in localStorage to keep it consistent across reloads
    const savedEndTime = localStorage.getItem('heroTimerEndTime');
    let targetTime: number;

    if (savedEndTime) {
      targetTime = parseInt(savedEndTime, 10);
      // If the target time is already passed, reset the timer to 12 hours from now
      if (Date.now() > targetTime) {
        targetTime = Date.now() + 12 * 60 * 60 * 1000;
        localStorage.setItem('heroTimerEndTime', targetTime.toString());
      }
    } else {
      // Default to 11h 59m 59s from now
      targetTime = Date.now() + (11 * 60 * 60 * 1000) + (59 * 60 * 1000) + (59 * 1000);
      localStorage.setItem('heroTimerEndTime', targetTime.toString());
    }

    // Update immediately so we don't wait 1s for the first correct time
    const updateTimer = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        // Reset timer when it ends
        const newTargetTime = Date.now() + 12 * 60 * 60 * 1000;
        localStorage.setItem('heroTimerEndTime', newTargetTime.toString());
        targetTime = newTargetTime;
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format with leading zeros
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  // SSR Safe rendering (avoid hydration mismatch by rendering static 11:59:59 first)
  const displayHours = mounted ? formatTime(timeLeft.hours) : "11";
  const displayMinutes = mounted ? formatTime(timeLeft.minutes) : "59";
  const displaySeconds = mounted ? formatTime(timeLeft.seconds) : "59";

  return (
    <div className={styles.timerSection}>
      <p className={styles.timerLabel}>LIMITED TIME OFFER ENDS IN:</p>
      <div className={styles.timerBox}>
        <div className={styles.timeBlock}>
          <span className={styles.timeNum}>{displayHours}</span>
          <span className={styles.timeText}>HRS</span>
        </div>
        <span className={styles.timeColon}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.timeNum}>{displayMinutes}</span>
          <span className={styles.timeText}>MIN</span>
        </div>
        <span className={styles.timeColon}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.timeNum} style={{ color: 'var(--color-primary)' }}>{displaySeconds}</span>
          <span className={styles.timeText}>SEC</span>
        </div>
      </div>
    </div>
  );
}
