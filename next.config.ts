import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        turbo: {
            resolveAlias: {
                canvas: './empty-module.ts',
            },
        },
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false
        config.resolve.alias.encoding = false
        return config
    },
}

export default nextConfig
