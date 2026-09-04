/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Single-page portfolio with a small Tailwind stylesheet, mostly
    // first-time visitors (recruiters/one-off viewers) -> inlining removes
    // the render-blocking CSS request entirely instead of trading it for
    // cross-visit caching that this traffic pattern rarely benefits from.
    inlineCss: true,
  },
  images: {
    // This app deploys to Cloudflare Workers (open-next) without an `images`
    // binding configured in wrangler.toml, so the /_next/image optimization
    // endpoint has no resizer and just proxies the original file back
    // (see @opennextjs/cloudflare's handleImageRequest). Runtime optimization
    // is a no-op there, so `unoptimized: true` skips the extra worker round
    // trip and serves pre-sized static assets directly from the edge cache.
    // Source images are pre-optimized to their rendered dimensions instead.
    unoptimized: true,
  },
}

module.exports = nextConfig
