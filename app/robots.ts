import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Тестовая копия на Vercel — закрыта от индексации
  if (process.env.VERCEL) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  // Боевой сайт proyavi.art
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/spasibo"],
      },
    ],
    sitemap: "https://proyavi.art/sitemap.xml",
  };
}
