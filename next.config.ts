import { resolve } from "node:path";
import type { NextConfig } from "next";

const projectRoot = resolve(__dirname);

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
