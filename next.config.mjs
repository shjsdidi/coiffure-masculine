/** @type {import('next').NextConfig} */

// Build pour GitHub Pages : export statique + sous-chemin /coiffure-masculine.
// Sur Vercel (variable absente), on garde le rendu normal + optimisation d'images.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "coiffure-masculine";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    ...(isPages ? { unoptimized: true } : {}),
  },
  ...(isPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
