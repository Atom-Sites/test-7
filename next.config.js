/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    images: {
        domains: ['www.shutterstock.com', 'www.stockvault.net'],
    }
}

module.exports = nextConfig
