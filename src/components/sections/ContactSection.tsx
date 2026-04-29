'use client';

import styles from './ContactSection.module.css';
import { siteConfig } from '@/config/site';
import { ContactForm } from '@/app/(pages)/contact/ContactForm';

export function ContactSection() {
  return (
    <section className={styles.section} aria-labelledby="contact-heading" id="contact">
      <div className="container">
        <div className={styles.grid}>
          
          {/* ─── Left Side: Contact Info ─── */}
          <div className={styles.infoCol}>
            <header className={styles.header}>
              <h2 className={styles.title} id="contact-heading">
                Get in Touch <span className={styles.highlight}>24/7.</span>
              </h2>
              <p className={styles.subtitle}>
                For the fastest response, we recommend reaching out via WhatsApp or Telegram. Our support agents usually reply within 15 minutes.
              </p>
            </header>

            <div className={styles.contactList}>
              {/* WhatsApp */}
              <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsappMessage)}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <div className={styles.contactTitle}>WhatsApp Support <span className={styles.number}>{siteConfig.phone}</span></div>
                  <p>Instant replies, best for live troubleshooting.</p>
                </div>
              </a>

              {/* Telegram */}
              <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(0, 136, 204, 0.1)', color: '#0088cc' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <div className={styles.contactTitle}>Telegram</div>
                  <p>Secure and fast communication channel.</p>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${siteConfig.email}`} className={styles.contactItem}>
                <div className={styles.iconWrapper} style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <div className={styles.contactTitle}>Email Support</div>
                  <p>{siteConfig.email} (Reply within 24h)</p>
                </div>
              </a>
            </div>
          </div>

          {/* ─── Right Side: Form ─── */}
          <div className={styles.formCol}>
            <div className={styles.cardGlow} />
            <div className={styles.card}>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
