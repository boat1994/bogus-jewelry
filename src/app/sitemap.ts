import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.bogus-jewelry.com'

    // TODO: Fetch dynamic routes from Payload CMS if needed in the future
    const routes = [
        '',
        '/about',
        '/collections',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
