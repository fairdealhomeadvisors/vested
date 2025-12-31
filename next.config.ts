import type { NextConfig } from "next";
import { domainMappings } from "./config/domains";

// Generate rewrites from domain mappings
const domainRewrites = Object.values(domainMappings).flatMap((mapping) => [
  {
    source: "/",
    has: [{ type: "host" as const, value: mapping.domain }],
    destination: mapping.path,
  },
  {
    source: "/:path+",
    has: [{ type: "host" as const, value: mapping.domain }],
    destination: `${mapping.path}/:path+`,
  },
]);

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return domainRewrites;
  },
};

export default nextConfig;