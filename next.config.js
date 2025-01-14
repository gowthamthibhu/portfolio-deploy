/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    
    // Specify the base path for GitHub Pages deployment
    basePath: '/portfolio-deploy',  // Replace 'your-repo-name' with your actual GitHub repo name
    
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,
  
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
  
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  };
  
  module.exports = nextConfig;
  