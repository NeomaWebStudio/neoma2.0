import type { NextConfig } from "next";
import path from 'path'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias['@splinetool/react-spline'] = path.resolve(
      './node_modules/@splinetool/react-spline/dist/react-spline.js'
    )
    return config
  },
}

export default nextConfig;

