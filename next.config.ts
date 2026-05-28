import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
};

export default config;
