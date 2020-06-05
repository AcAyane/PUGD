// /* eslint-disable no-undef */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  env: {
    MANGO_URI: "http://localhost:9000/graphql",
    SECRET: "egqrdherhdf654d6g453df654sf",
  },
  // menu: menus,
};

module.exports = withBundleAnalyzer(nextConfig);
