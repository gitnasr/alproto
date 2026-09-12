import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/lib/solutions";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5000";

const ROUTES = [
  "",
  "/project-check",
  "/services",
  "/solutions",
  ...SOLUTIONS.map((s) => `/solutions/${s.slug}`),
  "/about",
  "/case-studies",
  "/careers",
  "/open-source",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
