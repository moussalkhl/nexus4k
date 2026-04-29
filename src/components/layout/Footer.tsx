import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappMsg = encodeURIComponent("I'm interested in Nexus 4K IPTV IPTV.")

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="Nexus 4K IPTV home" title="Nexus 4K IPTV - Back to Home">
              <Image src="/logo.png" alt="Nexus 4K IPTV" width={220} height={55} className={styles.logoImage} />
            </Link>
            <p className={styles.description}>
              Stream 30,000+ Channels in 4K — Zero Buffering. Ever.
            </p>
            <p className={styles.copyright}>
              © {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Pages Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Pages</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" title="Back to Home Page">Home</Link></li>
              <li><Link href="/#features" title="Learn about our IPTV features">Features</Link></li>
              <li><Link href="/#pricing" title="View our pricing plans">Pricing</Link></li>
              <li><Link href="/blog" title="Read our latest blog posts">Blog</Link></li>
              <li><Link href="/contact" title="Get in touch with our support team">Support</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li><Link href="/blog/setup" title="How to set up your IPTV service">Setup Guides</Link></li>
              <li><Link href="/#faq" title="Frequently asked questions">FAQ</Link></li>
              <li><Link href="/blog" title="Browse our blog for tips and news">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" title="Contact our support on WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp: {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer" title="Join our Telegram channel">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Telegram
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} title="Send an email to our support team">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Support
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMsg}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.floatingWhatsApp}
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  )
}
