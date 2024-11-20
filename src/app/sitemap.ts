import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ufukenerji.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://ufukenerji.com/tr",
          en: "https://ufukenerji.com/en",
        },
      },
    },
    {
      url: "https://ufukenerji.com/home",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://ufukenerji.com/tr/home",
          en: "https://ufukenerji.com/en/home",
        },
      },
    },
    {
      url: "https://ufukenerji.com/about-us",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://ufukenerji.com/tr/about-us",
          en: "https://ufukenerji.com/en/about-us",
        },
      },
    },
    {
      url: "https://ufukenerji.com/contact",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: "https://ufukenerji.com/tr/contact",
          en: "https://ufukenerji.com/en/contact",
        },
      },
    },
  ];
}
