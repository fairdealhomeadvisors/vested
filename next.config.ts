import type { NextConfig } from "next";
import { domainMappings } from "./config/domains";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: domainMappings.nikoo.domain,
          },
        ],
        destination: "/nikoo/:path*",
      },
    ];
  },
};

export default nextConfig;