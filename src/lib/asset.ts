/**
 * Prefixes a public-folder path with the deployment base path.
 *
 * `next/link` and the router apply `basePath` on their own, but `next/image`
 * with `unoptimized: true` emits `src` untouched — so on a GitHub Pages project
 * site (served from /rand-eye-institute/) every image would 404 without this.
 *
 * Must be NEXT_PUBLIC_* so the value is inlined for the client bundle too.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) =>
  path.startsWith("/") ? `${BASE_PATH}${path}` : path;
