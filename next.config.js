/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    
    // Specify the base path for GitHub Pages deployment
    basePath: '/portfolio-deploy',  // Replace 'your-repo-name' with your actual GitHub repo name
    distDir: "dist",
    images: {
        unoptimized: true,
    },
  };
  
module.exports = nextConfig;
  