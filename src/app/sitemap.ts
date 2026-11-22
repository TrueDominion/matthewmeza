import type { MetadataRoute } from "next";
import { site } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];
  return ["/", "/about/", "/frameworks/value-creation/"].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: today,
  }));
}
