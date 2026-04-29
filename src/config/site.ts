// ─── Site Configuration ─────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Nexus 4K IPTV',
  tagline: 'Stream Everything. Anywhere. Anytime.',
  description:
    'Experience Nexus 4K IPTV with 30,000+ live channels, sports, movies, and VOD in stunning UHD. Get your premium streaming subscription at nexus4ktv.pro today.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexus4ktv.pro',
  ogImage: '/images/og-default.jpg',
  twitterHandle: '@Nexus4KIPTV',
  email: 'support@nexus4ktv.pro',
  phone: '+44 747 660 3520',
  whatsappNumber: '447476603520',
  telegramUrl: 'https://t.me/nexus4kiptv',
} as const

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Categories',
    href: '/categories',
    children: [
      { label: 'Sports', href: '/categories/sports' },
      { label: 'Movies', href: '/categories/movies' },
      { label: 'Series', href: '/categories/series' },
      { label: 'Documentaries', href: '/categories/documentaries' },
      { label: 'Anime', href: '/categories/anime' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

// ─── Pricing Plans ───────────────────────────────────────────────────────────

export const pricingPlans = [
  {
    id: '3-months',
    name: '3 Months',
    price: 35,
    period: '',
    highlight: false,
    badge: null,
    features: [
      '+30,000 Channels & VOD',
      '+70 000 worldwide movies & series',
      '99% Stable',
      'Catch-up Feature',
      'TV Guide (EPG)',
      'Extend Anytime',
      '24/7 Active support',
    ],
    cta: 'Get Started',
    href: 'https://wa.me/447476603520?text=I%27m%20interested%20in%20the%203%20Months%20plan.',
  },
  {
    id: '6-months',
    name: '6 Months',
    price: 49,
    period: '',
    highlight: false,
    badge: null,
    features: [
      '+30,000 Channels & VOD',
      '+70 000 worldwide movies & series',
      '99% Stable',
      'Catch-up Feature',
      'TV Guide (EPG)',
      'Extend Anytime',
      '24/7 Active support',
    ],
    cta: 'Get Started',
    href: 'https://wa.me/447476603520?text=I%27m%20interested%20in%20the%206%20Months%20plan.',
  },
  {
    id: '12-months',
    name: '12 Months',
    price: 69,
    period: '',
    highlight: true,
    badge: 'Most Popular',
    features: [
      '+30,000 Channels & VOD',
      '+70 000 worldwide movies & series',
      '99% Stable',
      'Catch-up Feature',
      'TV Guide (EPG)',
      'Extend Anytime',
      '24/7 Active support',
    ],
    cta: 'Get Started',
    href: 'https://wa.me/447476603520?text=I%27m%20interested%20in%20the%2012%20Months%20plan.',
  },
] as const

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories = [
  {
    id: 'sports',
    name: 'Sports',
    href: '/categories/sports',
    icon: '🏆',
    channelCount: '3,500+',
    description: 'Live football, basketball, UFC, Formula 1, tennis, and more from every league worldwide.',
    color: '#00d4ff',
  },
  {
    id: 'movies',
    name: 'Movies',
    href: '/categories/movies',
    icon: '🎬',
    channelCount: '5,000+',
    description: 'Blockbusters, indie gems, classics, and the latest theatrical releases in stunning 4K.',
    color: '#ff6b6b',
  },
  {
    id: 'series',
    name: 'Series',
    href: '/categories/series',
    icon: '📺',
    channelCount: '2,000+',
    description: 'Binge the hottest TV dramas, comedies, thrillers and reality shows on demand.',
    color: '#a78bfa',
  },
  {
    id: 'documentaries',
    name: 'Documentaries',
    href: '/categories/documentaries',
    icon: '🎥',
    channelCount: '800+',
    description: 'Nature, science, history, crime, and culture documentaries from the world\'s best studios.',
    color: '#34d399',
  },
  {
    id: 'anime',
    name: 'Anime',
    href: '/categories/anime',
    icon: '⚡',
    channelCount: '1,200+',
    description: 'Complete anime libraries — sub and dub — from classics to the latest seasonal releases.',
    color: '#f59e0b',
  },
] as const

// ─── Features ────────────────────────────────────────────────────────────────

export const features = [
  { icon: '🔒', title: '2FA Protected', description: 'Bank-grade two-factor authentication' },
  { icon: '🛡️', title: 'SSL Secured', description: 'End-to-end encrypted streams' },
  { icon: '📋', title: 'DRM Compliant', description: 'Licensed content protection' },
  { icon: '🌐', title: 'Anti-Log VPN', description: 'Privacy-first network tunnel' },
] as const
