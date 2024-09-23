import type { MetadataRoute } from "next";
import { projects } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = Object.keys(projects);
  const pages = slugs.map((slug) => ({
    url: "https://personal-page-blue-ten.vercel.app/" + slug,
    lastModified: new Date(),
    priority: 2,
  }));
  return [
    {
      url: "https://personal-page-blue-ten.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...pages,
  ];
}
