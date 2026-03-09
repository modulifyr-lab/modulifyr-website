import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://modulifyr.com'

  return [
    { url: `${base}/`,                              changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services`,                      changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/capabilities`,                  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/process`,                       changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/industries`,                    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/work`,                          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/pricing`,                       changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,                         changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/technical-standards`,     changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/careers`,                       changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog`,                          changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/resources`,                     changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/request-proposal`,              changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/privacy`,                       changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                         changeFrequency: 'yearly',  priority: 0.3 }
  ]
}
