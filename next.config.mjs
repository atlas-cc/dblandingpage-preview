/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true
  }
};

export default nextConfig;
