import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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
