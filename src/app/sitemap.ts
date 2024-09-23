import type { MetadataRoute } from "next";
import { projects } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = Object.keys(projects);
  const pages = slugs.map((slug) => ({
    url: "https://tamasstephen.com" + slug,
    lastModified: new Date(),
    priority: 2,
  }));
  return [
    {
      url: "https://tamasstephen.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...pages,
  ];
}
