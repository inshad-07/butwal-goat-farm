import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://butwal-goat-farm.vercel.app'
  const lastModifiedDate = new Date('2026-11-16')

  return [
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-goats`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]
}
