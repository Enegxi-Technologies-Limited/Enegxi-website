import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    localPatterns: [
      { pathname: "/images/**", search: "" },
      // Keep this version in sync with the query string in src/config/galleryData.ts.
      { pathname: "/images/gallary/**", search: "?v=4" },
    ],
    remotePatterns: [
      { protocol: "https", hostname: "drive.google.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
