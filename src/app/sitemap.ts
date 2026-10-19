import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.randeye.com";

export const dynamic = "force-static";

/** The site is exported with trailingSlash, and the canonical tags carry the
    slash, so the sitemap has to use the same form or Google sees two URLs. */
const url = (path: string) => `${SITE}${path}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const pages = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/referrals", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/hipaa-notice", priority: 0.3, changeFrequency: "yearly" as const },
    {
      path: "/terms-of-service",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  return [
    ...pages.map((page) => ({
      url: url(page.path),
      lastModified: today,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogPosts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
