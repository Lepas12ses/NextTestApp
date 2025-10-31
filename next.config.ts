import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://fakestoreapi.com/img/**")],
	},
	async redirects() {
		return [{ source: "/", destination: "/products", permanent: true }];
	},
};

export default nextConfig;
