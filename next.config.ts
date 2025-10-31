import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	reactStrictMode: true,
	images: {
		remotePatterns: [new URL("https://fakestoreapi.com/img/**")],
		unoptimized: true,
	},
};

export default nextConfig;
