import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/admin-1001/:path*',
                destination: '/admin/:path*',
            },
        ];
    },
};

export default nextConfig;
