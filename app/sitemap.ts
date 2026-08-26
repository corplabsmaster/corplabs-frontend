import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getJobs } from "@/lib/jobs";
import { getAllPosts } from "@/lib/posts";

/** Every statically-rendered route, mirroring the old gatsby-plugin-sitemap. */
const paths = [
  "",
  "/solutions",
  "/corpi",
  "/corpcode",
  "/corprise",
  "/corpsite",
  "/about",
  "/contact",
  "/changelog",
  "/blog",
  "/careers",
  "/privacy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, jobs] = await Promise.all([getAllPosts(), getJobs()]);
  return [
    ...paths.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: `${post.publishedDate}T00:00:00.000Z`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    // Open roles only exist as pages when the Notion pipeline is configured.
    ...jobs
      .filter((job) => job.slug)
      .map((job) => ({
        url: `${site.url}/careers/${job.slug}`,
        lastModified: job.postedAt,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
  ];
}
