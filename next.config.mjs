/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "himu.kinde.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "gravatar.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;