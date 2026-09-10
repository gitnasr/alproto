import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5000";

const ROUTES = [
  "",
  "/services",
  "/architecture",
  "/about",
  "/insights",
  "/case-studies",
  "/case-studies/fintech-core-banking",
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
