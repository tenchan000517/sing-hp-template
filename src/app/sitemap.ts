import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  // Story type template pages
  const storyTypePages = [
    { path: "/templates/story-type", priority: 0.9 },
    { path: "/templates/story-type/story", priority: 0.8 },
    { path: "/templates/story-type/members", priority: 0.8 },
    { path: "/templates/story-type/daily", priority: 0.7 },
    { path: "/templates/story-type/jobs", priority: 0.9 },
    { path: "/templates/story-type/environment", priority: 0.7 },
    { path: "/templates/story-type/apply", priority: 0.9 },
  ].map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));

  return [...staticPages, ...storyTypePages];
}
