import type { MetadataRoute } from "next";
import { site } from "@/data/site";

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
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
