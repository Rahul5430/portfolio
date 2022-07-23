const withPWA = require('next-pwa');
const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPWA(
	withPlaiceholder({
		pwa: {
			dest: 'public',
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
	})
);
