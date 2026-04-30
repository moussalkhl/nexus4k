import Link from 'next/link'
import { pricingPlans } from '@/config/site'
import styles from './PricingSection.module.css'

/**
 * PricingSection — SERVER COMPONENT
 * Static pricing grid with CSS hover effects only.
 */
export function PricingSection() {
  return (
    <section className={`section ${styles.pricing}`} id="pricing" aria-labelledby="pricing-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        {/* Section header */}
        <header className={styles.header}>
          <span className="section-label">Pricing Plans</span>
          <h2 className="section-title" id="pricing-heading">
            <span className="text-gradient">Nexus4kTV</span> Pricing Plans
          </h2>
          <p className="section-subtitle">
            All plans include instant activation, 24/7 uptime monitoring, and
            crystal-clear streaming across all your devices.
          </p>
        </header>

        {/* Plans grid */}
        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ''}`}
              aria-label={`${plan.name} plan`}
            >
              {plan.badge && (
                <div className={styles.badge} aria-label={`Badge: ${plan.badge}`}>
                  {plan.badge === 'Most Popular' ? '⭐ ' : '🏆 '}
                  {plan.badge}
                </div>
              )}

              <div className={styles.planHeader}>
                <p className={styles.planLabel}>{plan.name}</p>
                <div className={styles.priceRow}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                </div>
              </div>

              <ul className={styles.featureList} aria-label={`${plan.name} features`}>
                {plan.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`${styles.btn} ${styles.cta}`}
                aria-label={`${plan.cta} — ${plan.name} for $${plan.price}`}
                title={`Subscribe to the ${plan.name} IPTV plan`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
