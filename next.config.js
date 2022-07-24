const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { withPlaiceholder } = require('@plaiceholder/next');

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

module.exports = withPWA(
	withPlaiceholder({
		pwa: {
			dest: 'public',
			runtimeCaching,
			buildExcludes: [/middleware-manifest.json$/],
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
		headers,
	})
);
