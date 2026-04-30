import type { BlogPost } from '@/types'

// ─── Mock Blog Posts (ISR data source) ────────────────────────────────────────
// In production, replace with CMS/API calls (Contentful, Sanity, etc.)

const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-iptv-players-4k-streaming-2026',
    title: 'Best IPTV Players for 4K Streaming in 2026',
    excerpt: 'Discover the most reliable and feature-rich IPTV players optimized for seamless 4K streaming and EPG loading.',
    publishedAt: '2026-04-02T10:00:00Z',
    author: 'Tech Review Team',
    category: 'Guide',
    readTime: 12,
    coverImage: '/images/blog/best-iptv-players-4k.png',
    tags: ['IPTV Players', '4K Streaming', 'Guide', 'Smart TV'],
    content: `
      <div class="article-content">
        <p class="lead-text" style="font-size: 1.2rem; color: #94a3b8; margin-bottom: 2rem;">When it comes to enjoying your premium IPTV subscription, the application you use is just as important as the service itself. A subpar player can cause buffering, EPG failures, and UI lag. Here are the absolute best IPTV players engineered for flawless 4K streaming in 2026.</p>
        
        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">1. Tivimate Premium (The Undisputed King)</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Tivimate continues to dominate the Android TV ecosystem. Built specifically for the big screen, its interface is unparalleled. With seamless multi-playlist support, lightning-fast EPG loading, and perfect 4K hardware decoding, it's the gold standard for power users.</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #cbd5e1;">
          <li><strong style="color: #00FF7F;">Pros:</strong> Best-in-class UI, powerful catch-up features, reliable recording.</li>
          <li><strong style="color: #ff6b6b;">Cons:</strong> Android TV only (No native Apple or Roku apps).</li>
        </ul>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">2. IBO Player Pro (The Rising Star)</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Available across LG WebOS, Samsung Tizen, and Android, IBO Player Pro is our top recommendation for Smart TV users who don't want to buy an external streaming stick. Its ultra-optimized engine handles massive 30,000+ channel playlists without breaking a sweat.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">3. Smarters Pro (The Reliable Classic)</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">IPTV Smarters Pro remains the most accessible and widely supported app across all platforms (iOS, Android, Windows, Mac). Its classic 4-box layout (Live TV, Movies, Series, Catch Up) is incredibly intuitive for beginners.</p>

        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
          <h3 style="color: #fff; margin-bottom: 1rem;">Ready to test these players?</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">Pair your player with Nexus4kTV for an unbeatable streaming experience. Zero buffering, 30,000+ channels, and true 4K quality.</p>
          <a href="/contact" style="display: inline-block; background: linear-gradient(90deg, #a855f7, #00d4ff); color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Get Your Subscription Now</a>
        </div>
      </div>
    `
  },
  {
    slug: 'how-to-setup-iptv-on-firestick-complete-guide-2026',
    title: 'How to Setup IPTV on Firestick: Complete Guide 2026',
    excerpt: 'A complete step-by-step guide to setting up IPTV on any Firestick model — from enabling developer options to installation.',
    publishedAt: '2026-04-03T10:00:00Z',
    author: 'Tech Review Team',
    category: 'Tutorial',
    readTime: 15,
    coverImage: '/images/blog/firestick-setup-2026.png',
    tags: ['Firestick', 'Setup Guide', 'IPTV Installation', 'Tutorial'],
    content: `
      <div class="article-content">
        <p class="lead-text" style="font-size: 1.2rem; color: #94a3b8; margin-bottom: 2rem;">The Amazon Fire TV Stick is undoubtedly the most popular streaming device in the world, making it the perfect companion for your IPTV subscription. In this comprehensive 2026 guide, we'll walk you through exactly how to set up IPTV on your Firestick in less than 5 minutes.</p>
        
        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">Step 1: Enable Apps from Unknown Sources</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Before we can install a premium IPTV player, we need to allow the Firestick to install third-party applications. This is a safe and standard procedure.</p>
        <ol style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
          <li>From your Firestick home screen, navigate to the <strong>Settings</strong> gear icon on the far right.</li>
          <li>Select <strong>My Fire TV</strong> (or 'Device & Software' on some models).</li>
          <li>Click on <strong>Developer Options</strong>. <em>(Note: If you don't see this, click 'About', then click on your Fire TV Stick name 7 times rapidly to unlock it).</em></li>
          <li>Turn ON <strong>Apps from Unknown Sources</strong>.</li>
        </ol>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">Step 2: Get the Downloader App</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">The Downloader app is your gateway to installing the best IPTV players like Tivimate or IPTV Smarters Pro.</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
          <li>Go back to the Home screen and select the <strong>Find</strong> (magnifying glass) icon.</li>
          <li>Search for <strong>"Downloader"</strong>.</li>
          <li>Select the orange app, click <strong>Download</strong>, and then <strong>Open</strong> it.</li>
        </ul>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">Step 3: Install Your Preferred Player</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">For the absolute best experience with our <a href="/" style="color: #00d4ff; text-decoration: underline; font-weight: 600;">Nexus4kTV premium service</a>, we highly recommend installing Tivimate or Smarters Pro. Open the Downloader app and enter the specific download code provided when you purchase your subscription.</p>

        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
          <h3 style="color: #fff; margin-bottom: 1rem;">Need an ultra-fast IPTV Provider?</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">Now that your Firestick is ready, power it up with the ultimate streaming service. Get 30,000+ channels in true 4K without buffering.</p>
          <a href="/contact" style="display: inline-block; background: linear-gradient(90deg, #a855f7, #00d4ff); color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Unlock Nexus4kTV Now</a>
        </div>
      </div>
    `
  },
  {
    slug: 'iptv-vs-cable-tv-comparison-2026',
    title: 'IPTV vs Cable TV in 2026: The Complete Comparison',
    excerpt: 'An honest, data-driven comparison of IPTV and traditional cable TV covering real costs, channel availability, and quality.',
    publishedAt: '2026-04-04T10:00:00Z',
    author: 'Tech Review Team',
    category: 'Comparison',
    readTime: 10,
    coverImage: '/images/blog/iptv-vs-cable-2026.png',
    tags: ['IPTV vs Cable', 'Streaming', 'Cost Comparison', 'Cord Cutting'],
    content: `
      <div class="article-content">
        <p class="lead-text" style="font-size: 1.2rem; color: #94a3b8; margin-bottom: 2rem;">The era of traditional cable TV is rapidly ending. With skyrocketing monthly bills, hidden fees, and limited channel packages, millions of consumers are completely cutting the cord in 2026. But is IPTV truly the perfect replacement? Let's dive into the ultimate comparison.</p>
        
        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">1. The True Cost Breakdown</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">The biggest driver of the cord-cutting movement is price. Let's look at the average numbers for 2026.</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>Traditional Cable TV:</strong> Averages $120 to $180 per month. This doesn't include hidden fees like "Broadcast TV Surcharges" or equipment rentals. Annual cost: ~$1,800+.</li>
          <li><strong>Premium IPTV:</strong> Averages $10 to $15 per month. No hidden fees, no equipment rentals. Annual cost: ~$100.</li>
        </ul>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;"><strong>Winner: IPTV.</strong> You save over 90% on your annual entertainment budget.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">2. Channel Availability & Global Access</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Cable providers lock you into geographical regions. If you want international sports or channels from your home country, you have to buy expensive add-on packages. IPTV shatters these borders.</p>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">With a top-tier provider, you get immediate access to over 30,000 live channels globally. This includes all premium sports networks, pay-per-view events (PPV), and international news without any geographic restrictions.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">3. Video Quality & Hardware Requirements</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Cable TV relies on outdated coaxial infrastructure that often limits broadcasts to 720p or 1080i. Modern IPTV streams directly over your high-speed internet, allowing for pristine, uncompressed 4K resolution on supported channels.</p>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Furthermore, cable requires you to rent clunky set-top boxes. IPTV runs smoothly on the devices you already own: Smart TVs, Firesticks, Apple TVs, or even your smartphone.</p>

        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
          <h3 style="color: #fff; margin-bottom: 1rem;">Ready to Cut the Cord?</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">Stop overpaying for limited TV. Switch to the future of streaming today and check out our <a href="/#pricing" style="color: #00d4ff; text-decoration: underline; font-weight: 600;">affordable pricing plans</a> to get started.</p>
          <a href="/#pricing" style="display: inline-block; background: linear-gradient(90deg, #a855f7, #00d4ff); color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">View Pricing & Subscribe</a>
        </div>
      </div>
    `
  },
  {
    slug: 'mag-box-setup-2026',
    title: 'How to Set Up IPTV on a MAG Box — 2026 Step-by-Step Guide',
    excerpt: 'Set up Nexus4kTV IPTV on any MAG box in under 10 minutes. Portal URL, MAC address, and troubleshooting — works on all models.',
    publishedAt: '2026-04-20T10:00:00Z',
    author: 'Tech Review Team',
    category: 'Setup',
    readTime: 10,
    coverImage: '/images/blog/mag-box-setup-2026.png',
    tags: ['MAG Box', 'Setup', 'Portal URL', 'IPTV'],
    content: `
      <div class="article-content">
        <p class="lead-text" style="font-size: 1.2rem; color: #94a3b8; margin-bottom: 2rem;">MAG boxes remain the industry standard for dedicated IPTV hardware, offering a traditional set-top box feel with incredible stability. Here is how to configure your MAG 520, 522, 524, or any older model for our premium service.</p>
        
        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">Step 1: Locate Your MAC Address</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Before starting, flip your MAG box upside down. You will see a sticker with a MAC address starting with <strong>00:1A:79</strong>. Note this down, as you will need to provide this to us when purchasing your subscription so we can activate it on our servers.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">Step 2: Add the Portal URL</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Once your MAC is activated, turn on the box and go to <strong>Settings -> System Settings -> Servers -> Portals</strong>.</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
          <li>In <strong>Portal 1 name</strong>, type "Nexus4kTV".</li>
          <li>In <strong>Portal 1 URL</strong>, carefully type the exact portal URL provided in your welcome email.</li>
        </ul>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">Step 3: Reboot and Stream</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Save your settings and reboot the MAG box. It will automatically load the portal interface and EPG guide. If you get a "Page Loading Error", double-check the URL for typos and ensure your MAC address was submitted correctly.</p>

        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
          <h3 style="color: #fff; margin-bottom: 1rem;">Activate Your MAG Box Today</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">Ready to experience zero buffering? Provide your MAC address during checkout and get instantly activated.</p>
          <a href="/#pricing" style="display: inline-block; background: linear-gradient(90deg, #a855f7, #00d4ff); color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">View Subscription Plans</a>
        </div>
      </div>
    `
  },
  {
    slug: 'apple-tv-iptv-2026',
    title: 'How to Watch IPTV on Apple TV: Best Apps & Setup Guide',
    excerpt: 'Watch Nexus4kTV IPTV on Apple TV in minutes. We cover the best tvOS apps — iPlayTV, GSE Smart IPTV, Smarters — with a full guide.',
    publishedAt: '2026-04-20T11:00:00Z',
    author: 'Tech Review Team',
    category: 'Setup',
    readTime: 12,
    coverImage: '/images/blog/apple-tv-iptv-2026.png',
    tags: ['Apple TV', 'tvOS', 'IPTV Apps', 'Setup'],
    content: `
      <div class="article-content">
        <p class="lead-text" style="font-size: 1.2rem; color: #94a3b8; margin-bottom: 2rem;">The Apple TV 4K is an incredibly powerful streaming device, but because Apple's App Store policies are strict, finding the right IPTV player can be confusing. Here are the best tvOS apps for 2026.</p>
        
        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">1. iPlayTV (The Premium Choice)</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Without a doubt, iPlayTV is the most beautiful and native-feeling IPTV app on Apple TV. It seamlessly integrates with tvOS UI paradigms and handles massive Xtream Codes playlists flawlessly. It's a paid app, but worth every penny.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">2. IPTV Smarters Player</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">The reliable classic is available on the App Store. It offers the familiar 4-box layout and is incredibly easy to set up using your Xtream Codes API login details.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">Setup Instructions</h2>
        <ol style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
          <li>Download your chosen app from the tvOS App Store.</li>
          <li>Select "Log in with Xtream Codes API".</li>
          <li>Enter any name, your Username, Password, and the Server URL provided in your email.</li>
        </ol>

        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
          <h3 style="color: #fff; margin-bottom: 1rem;">Experience True 4K on Apple TV</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">Unleash the full power of your Apple TV 4K with our ultra-HD sports and movie streams.</p>
          <a href="/" style="display: inline-block; background: linear-gradient(90deg, #a855f7, #00d4ff); color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Visit Homepage to Subscribe</a>
        </div>
      </div>
    `
  },
  {
    slug: 'firetv-developer-options-2026',
    title: 'Developer Options Disappeared on Fire TV — Here\'s What Happened',
    excerpt: 'Fire TV Developer Options missing after an update? There are two completely different causes — one is fixable in 30 seconds.',
    publishedAt: '2026-04-20T12:00:00Z',
    author: 'Tech Review Team',
    category: 'Troubleshooting',
    readTime: 9,
    coverImage: '/images/blog/firetv-developer-options-2026.png',
    tags: ['Fire TV', 'Troubleshooting', 'Developer Options', 'Amazon'],
    content: `
      <div class="article-content">
        <p class="lead-text" style="font-size: 1.2rem; color: #94a3b8; margin-bottom: 2rem;">If you are trying to install Downloader or a third-party IPTV app and can't find 'Developer Options' on your Fire TV Stick, do not panic. Amazon recently hid this menu in a software update.</p>
        
        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">The 30-Second Fix</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">Amazon adopted Android's standard method for hiding developer options to prevent accidental system changes by average users.</p>
        <ol style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #cbd5e1; line-height: 1.7;">
          <li>Go to your Firestick <strong>Settings</strong> icon.</li>
          <li>Select <strong>My Fire TV</strong>.</li>
          <li>Click on <strong>About</strong>.</li>
          <li>Highlight your device name (e.g., "Fire TV Stick 4K").</li>
          <li><strong>Click the middle 'Select' button on your remote 7 times rapidly.</strong></li>
        </ol>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">You will see a small message at the bottom saying "No need, you are already a developer." Press the back button, and Developer Options will magically reappear in the menu!</p>

        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
          <h3 style="color: #fff; margin-bottom: 1rem;">Now Install the Best IPTV Service</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">With Developer Options unlocked, you are ready to sideload the ultimate streaming experience.</p>
          <a href="/" style="display: inline-block; background: linear-gradient(90deg, #a855f7, #00d4ff); color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Explore Nexus4kTV</a>
        </div>
      </div>
    `
  },
  {
    slug: 'android-tv-players-2026',
    title: 'Best IPTV Players for Android TV in 2026 (Ranked & Tested)',
    excerpt: 'We tested every major IPTV player with Nexus4kTV 4K streams. Here are the top 7 apps ranked by performance and EPG quality.',
    publishedAt: '2026-04-17T10:00:00Z',
    author: 'Tech Review Team',
    category: 'Guide',
    readTime: 13,
    coverImage: '/images/blog/android-tv-players-2026.png',
    tags: ['Android TV', 'Nvidia Shield', 'IPTV Players', 'Guide'],
    content: `
      <div class="article-content">
        <p class="lead-text" style="font-size: 1.2rem; color: #94a3b8; margin-bottom: 2rem;">If you own an Nvidia Shield, Chromecast with Google TV, or a Sony Bravia, you have access to the absolute best ecosystem for IPTV players. Android TV's open platform allows for incredibly powerful streaming apps.</p>
        
        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">1. Tivimate (The Undisputed Champion)</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">There is simply no competition. Tivimate was built specifically for the Android TV Leanback interface. It features instant channel zapping, perfect multi-view support, and robust DVR recording capabilities.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">2. Sparkle TV</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">A newer contender that is rapidly gaining popularity. Sparkle TV offers a very clean, modern interface similar to traditional cable boxes and excellent timeshift support.</p>

        <h2 style="color: #fff; margin-top: 2rem; font-size: 1.8rem;">3. OTT Navigator</h2>
        <p style="margin-bottom: 1.5rem; line-height: 1.7; color: #cbd5e1;">For advanced users who want total control over sorting, filtering, and deep customization, OTT Navigator is incredibly powerful, though its interface is slightly less polished than Tivimate.</p>

        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
          <h3 style="color: #fff; margin-bottom: 1rem;">Power Your Android TV Properly</h3>
          <p style="color: #cbd5e1; margin-bottom: 1.5rem;">These players are only as good as the service feeding them. Get the most reliable 4K streams with Nexus4kTV.</p>
          <a href="/#pricing" style="display: inline-block; background: linear-gradient(90deg, #a855f7, #00d4ff); color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">View Pricing Packages</a>
        </div>
      </div>
    `
  }
]

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In production: fetch from CMS API
  return BLOG_POSTS
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  return BLOG_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug)
}
