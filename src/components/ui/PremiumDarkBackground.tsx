'use client'

import styles from './PremiumDarkBackground.module.css'

export function PremiumDarkBackground() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.glowTopLeft} />
      <div className={styles.glowTopRight} />
      <div className={styles.glowBottomCenter} />
      <div className={styles.gridOverlay} />
    </div>
  )
}
