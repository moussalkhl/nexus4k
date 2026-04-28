import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { siteConfig } from '@/config/site'
import styles from './page.module.css'

export const metadata: Metadata = genMeta({
  title: 'Legal & Privacy Policy | Nexus 4K IPTV IPTV',
  description: 'Terms of service, privacy policy, and legal information for Nexus 4K IPTV IPTV users.',
  canonical: '/legal',
})

export default function LegalPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Legal', href: '/legal' },
  ]

  return (
    <>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="section">
        <div className="container">
          <header className={styles.header}>
            <h1 className="section-title">
              Legal & <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="section-subtitle">
              Last updated: April 22, 2026
            </p>
          </header>

          <div className={styles.content}>
            <h2>1. Introduction</h2>
            <p>
              Welcome to {siteConfig.name}. By accessing our website and using our IPTV services, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>

            <h2>2. Service Usage</h2>
            <p>
              Our service provides access to digital media streams. You agree to use this service for personal, non-commercial purposes only. Reselling, restreaming, or sharing your account credentials is strictly prohibited and will result in immediate termination without refund.
            </p>
            <ul>
              <li>Accounts are limited to the number of simultaneous connections specified in your plan.</li>
              <li>You are responsible for maintaining the confidentiality of your account details.</li>
              <li>We reserve the right to modify the channel lineup at any time without prior notice.</li>
            </ul>

            <h2>3. Privacy Policy & Data Collection</h2>
            <p>
              We value your privacy. Nexus 4K IPTV operates with a strict no-logs policy regarding your streaming activity.
            </p>
            <ul>
              <li><strong>What we collect:</strong> Email address for account management, payment information (processed securely via third-party gateways), and basic technical logs necessary for service delivery.</li>
              <li><strong>What we DO NOT collect:</strong> We do not log your viewing history, IP address (beyond active session tracking for connection limits), or browsing activity.</li>
              <li>We do not sell or share your personal data with third parties.</li>
            </ul>

            <h2>4. Refund Policy</h2>
            <p>
              We offer a 30-day money-back guarantee for new subscribers. If you are unsatisfied with the service, contact support within 30 days of your initial purchase for a full refund. Refunds do not apply to renewals or subsequent purchases.
            </p>

            <h2>5. Content Availability & Copyright</h2>
            <p>
              Nexus 4K IPTV acts as an indexer and directory of links available publicly on the internet. We do not host, upload, or own the rights to any of the broadcast streams. If you hold copyright to any content and wish to have it removed from our directory, please contact our abuse team.
            </p>

            <div className={styles.contact}>
              <h3>Questions about our legal policies?</h3>
              <p>Contact our legal team at <a href={`mailto:legal@nexus4ktv.pro`}>legal@nexus4ktv.pro</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
