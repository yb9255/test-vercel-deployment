/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodbUrl: process.env.MONGODB_URL,
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodbUrl: process.env.MONGODB_URL,
    },
  };
};

module.exports = nextConfig;
