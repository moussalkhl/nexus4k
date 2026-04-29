import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/seo/metadata'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { siteConfig } from '@/config/site'
import { ContactForm } from './ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = genMeta({
  // Final: "Contact Nexus 4K IPTV – 24/7 Live Support | Nexus 4K IPTV" = 59 chars
  title: 'Contact Nexus 4K IPTV – 24/7 Live Support',
  description: 'Need help with your Nexus 4K IPTV subscription? Contact our 24/7 support team for immediate assistance with setup, billing, or technical issues anytime.',
  canonical: '/contact',
})

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
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
              We're Here to <span className="text-gradient">Help</span>
            </h1>
            <p className="section-subtitle">
              Our support team operates 24/7/365 to ensure your streaming experience is flawless.
            </p>
          </header>

          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.card}>
                <h3>Email Support</h3>
                <p>For technical issues, billing, and general inquiries. We aim to respond within 2 hours.</p>
                <a href={`mailto:${siteConfig.email}`} className={styles.link}>{siteConfig.email}</a>
              </div>
              
              <div className={styles.card}>
                <h3>Sales & Trials</h3>
                <p>Interested in a trial or bulk subscription? Contact our sales team.</p>
                <p className={styles.link}>sales@nexus4ktv.pro</p>
              </div>

              <div className={styles.card}>
                <h3>Live Chat</h3>
                <p>For immediate technical assistance during setup.</p>
                <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=I%20need%20immediate%20technical%20assistance.`} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">Start Chat</a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
