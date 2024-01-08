/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.html$/,
          use: 'html-loader',
        },
      ],
    }
  }
};

module.exports = nextConfig;
