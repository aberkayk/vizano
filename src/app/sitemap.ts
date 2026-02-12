import { MetadataRoute } from "next";

const baseUrl = "https://visanoistanbul.com";
const locales = ["en", "tr", "ar", "ru", "fa"];

interface PageConfig {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
}

const pages: PageConfig[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/home", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each page with language alternates
  pages.forEach((page) => {
    const url = `${baseUrl}${page.path}`;
    const alternates: Record<string, string> = {};

    locales.forEach((locale) => {
      alternates[locale] = `${baseUrl}/${locale}${page.path}`;
    });

    sitemap.push({
      url,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: alternates,
      },
    });
  });

  // Add individual locale-specific pages
  locales.forEach((locale) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority * 0.9,
      });
    });
  });

  return sitemap;
}
