// ─── SEO / Metadata Types ────────────────────────────────────────────────────

export interface PageSEO {
  title: string
  description: string
  canonical?: string
  noindex?: boolean
  ogImage?: string
  ogType?: 'website' | 'article'
  jsonLd?: object | object[]
  keywords?: string[]
}

// ─── Navigation Types ────────────────────────────────────────────────────────

export interface NavChild {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
  children?: NavChild[]
}

// ─── Pricing Types ───────────────────────────────────────────────────────────

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  highlight: boolean
  badge: string | null
  channels: string
  connections: number
  resolution: string
  features: readonly string[]
  cta: string
  href: string
}

// ─── Category Types ──────────────────────────────────────────────────────────

export interface Category {
  id: string
  name: string
  href: string
  icon: string
  channelCount: string
  description: string
  color: string
}

// ─── Blog Types ──────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  updatedAt?: string
  author: string
  category: string
  readTime: number
  coverImage?: string
  content?: string
  tags: string[]
}

// ─── FAQ Types ───────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string
  answer: string
}

// ─── Breadcrumb Types ────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string
  href: string
}

// ─── Feature Types ───────────────────────────────────────────────────────────

export interface Feature {
  icon: string
  title: string
  description: string
}
