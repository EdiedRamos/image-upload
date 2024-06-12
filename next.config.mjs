/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: "https://image-upload-azure.vercel.app/",
    },
  },
};

export default nextConfig;
