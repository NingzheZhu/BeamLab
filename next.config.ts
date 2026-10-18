import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        output: "export",
        assetPrefix: "/BeamLab/",
      }
    : {}),
};

export default nextConfig;
