import type { MetadataRoute } from "next";

const SLUGS = [
  "family",
  "places",
  "portrait",
  "instant",
  "xix",
  "color20",
  "bw20",
  "digital",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://proyavi.art";
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/uslugi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Подразделы галереи
    ...SLUGS.map((slug) => ({
      url: `${base}/portfolio/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/o-nas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/politika-konfidencialnosti`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
