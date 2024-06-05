/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'app-scctdemody17ep001.cmstest.optimizely.com',
            port: '',
            pathname: '/globalassets/**',
          },
          {
            protocol: 'https',
            hostname: 'app-ocxcbartosz3df73p001.cms.optimizely.com',
            port: '',
            pathname: '/globalassets/**',
          },
		  {
            protocol: 'https',
            hostname: 'localhost',
            port: '5000',
            pathname: '/globalassets/**',
          },
		  {
            protocol: 'http',
            hostname: 'localhost',
            port: '5001',
            pathname: '/globalassets/**',
          },
        ],
    },
};

export default nextConfig;
