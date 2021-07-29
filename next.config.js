const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});