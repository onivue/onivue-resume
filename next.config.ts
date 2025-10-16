import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@react-pdf/renderer', 'react-pdf'],
    webpack: (config) => {
        config.resolve.alias.canvas = false
        config.resolve.alias.encoding = false
        config.externals = [...(config.externals || []), { canvas: 'canvas' }]
        return config
    },
}

export default nextConfig
