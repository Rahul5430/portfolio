const withPWA = require('next-pwa')({
	dest: 'public',
});
const { withPlaiceholder } = require('@plaiceholder/next');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const headers = async () => {
	return [
		{
			source: '/(.*)',
			headers: [
				{
					key: 'X-Content-Type-Options',
					value: 'nosniff',
				},
				{
					key: 'X-Frame-Options',
					value: 'SAMEORIGIN',
				},
				{
					key: 'X-XSS-Protection',
					value: '1; mode=block',
				},
			],
		},
	];
};

module.exports = withBundleAnalyzer(withPWA(
	withPlaiceholder({
		// pwa: {
		// 	dest: 'public',
		// 	runtimeCaching,
		// 	buildExcludes: [/middleware-manifest.json$/],
		// },
		images: {
			formats: ['image/avif', 'image/webp'],
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
		headers,
	})
));
