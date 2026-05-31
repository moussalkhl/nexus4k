import styles from './DynamicWhiteBackground.module.css'

export function DynamicWhiteBackground() {
  return (
    <div className={styles.container}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.grid}></div>
    </div>
  )
}
