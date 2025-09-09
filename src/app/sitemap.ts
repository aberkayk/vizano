import { MetadataRoute } from "next";

const baseUrl = "https://visanoistanbul.com";
const locales = ["en", "tr", "ar", "ru", "fa"];
const pages = [
  "", // root/home page
  "/home",
  "/about-us",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each page in all languages
  pages.forEach((page) => {
    const url = `${baseUrl}${page}`;
    const alternates: Record<string, string> = {};

    // Create language alternates for each locale
    locales.forEach((locale) => {
      alternates[locale] = `${baseUrl}/${locale}${page}`;
    });

    sitemap.push({
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: alternates,
      },
    });
  });

  // Add individual locale-specific pages
  locales.forEach((locale) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" || page === "/home" ? 0.9 : 0.7,
      });
    });
  });

  return sitemap;
}
