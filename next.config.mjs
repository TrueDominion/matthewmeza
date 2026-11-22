/**
 * Static export: `npm run build` writes a fully static site to /out,
 * which Cloudflare Pages serves directly (no Node server required).
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  sassOptions: { silenceDeprecations: ["legacy-js-api"] },
};

export default nextConfig;
