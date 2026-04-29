'use client'
import Image from 'next/image'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { navLinks, siteConfig } from '@/config/site'
import styles from './Header.module.css'

/**
 * Header — CLIENT COMPONENT
 * Required: interactive mobile menu, scroll detection, dropdown
 * Data: none (config-driven only)
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Nexus 4K IPTV home" title="Nexus 4K IPTV - Back to Home">
          <Image src="/logo.png" alt="Nexus 4K IPTV" width={180} height={45} className={styles.logoImage} priority />
          <span className="sr-only">Nexus 4K IPTV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={styles.desktopNav}
          aria-label="Main navigation"
          ref={dropdownRef}
        >
          {navLinks.map((link) => (
            <div key={link.href} className={styles.navItem}>
              {'children' in link && link.children ? (
                <>
                  <button
                    className={styles.navLink}
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <span className={styles.chevron} aria-hidden="true">
                      {openDropdown === link.label ? '▲' : '▼'}
                    </span>
                  </button>
                  {openDropdown === link.label && (
                    <div className={styles.dropdown} role="menu">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={styles.dropdownLink}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                          title={`Explore ${child.label} channels`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} className={styles.navLink} title={`Go to ${link.label} page`}>
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm" title="Contact us on WhatsApp to get started">
            Get Started Now
          </Link>
          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {navLinks.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
              title={`Go to ${link.label} page`}
            >
              {link.label}
            </Link>
            {'children' in link && link.children && (
              <div className={styles.mobileSubNav}>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={styles.mobileSubLink}
                    onClick={() => setMobileOpen(false)}
                    title={`Explore ${child.label} channels`}
                  >
                    → {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsappMessage)}`}
          target="_blank" rel="noopener noreferrer"
          className="btn btn--primary"
          style={{ marginTop: '1rem', width: '100%' }}
          onClick={() => setMobileOpen(false)}
          title="Contact us on WhatsApp to get started"
        >
          Join Nexus Today
        </Link>
      </nav>
    </header>
  )
}
