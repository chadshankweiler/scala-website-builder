import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    crossOrigin: "anonymous",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    reactStrictMode: false,
};

export default nextConfig;
