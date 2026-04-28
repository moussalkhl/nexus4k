import { MetadataRoute } from 'next'
import { siteConfig, categories } from '@/config/site'
import { getAllBlogSlugs } from '@/services/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const lastModified = new Date()

  // Static routes
  const staticRoutes = [
    '',
    '/categories',
    '/blog',
    '/about',
    '/contact',
    '/legal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Category routes
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}${cat.href}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Blog routes
  const blogSlugs = getAllBlogSlugs()
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes] as MetadataRoute.Sitemap
}
