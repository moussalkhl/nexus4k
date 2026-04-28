/**
 * Breadcrumb — SERVER COMPONENT
 * Renders semantic breadcrumb navigation with JSON-LD.
 */
import Link from 'next/link'
import { generateBreadcrumbJsonLd } from '@/seo/metadata'
import type { BreadcrumbItem } from '@/types'
import styles from './Breadcrumb.module.css'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = generateBreadcrumbJsonLd(items)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={styles.nav}>
        <ol className={styles.list} itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li
                key={item.href}
                className={styles.item}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span className={styles.current} aria-current="page" itemProp="name">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className={styles.link} itemProp="item">
                      <span itemProp="name">{item.label}</span>
                    </Link>
                    <span className={styles.separator} aria-hidden="true">/</span>
                  </>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
