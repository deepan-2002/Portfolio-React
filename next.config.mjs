/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
        domains: ["github.com", "media.licdn.com"],
    },
};

export default nextConfig;
