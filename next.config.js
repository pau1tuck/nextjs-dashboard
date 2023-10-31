/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true, // checks for Link typos
      },
};

module.exports = nextConfig;
