import type { NextConfig } from "next";

// Static export: `next build` writes plain files to out/, which Netlify serves
// for free. No server, no functions.
const nextConfig: NextConfig = {
  output: "export",
  // /grid/ is written as out/grid/index.html: no .html in any address
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
