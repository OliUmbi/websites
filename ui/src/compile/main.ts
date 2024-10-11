import { Plugin } from 'vite';
import fs from 'fs/promises';
import path from 'path';

export function compile(): Plugin {
  return {
    name: 'compile',
    apply: 'build',
    closeBundle: async () => {
      try {
        // folder structure /jublawoma, /jublawoma-admin, ... each containing a manifest.json, robots.txt, sitemap.xml

        console.log('Running custom build step...');
        const sitemapContent = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>https://yourwebsite.com/</loc>
            <lastmod>2024-01-01</lastmod>
          </url>
        </urlset>`;

        // Write the generated sitemap to the output directory
        const sitemapPath = path.resolve('build', 'sitemap.xml');
        await fs.writeFile(sitemapPath, sitemapContent);
        console.log('sitemap.xml created successfully in build/');
      } catch (error) {
        console.error('Error during custom build step:', error);
      }
    }
  };
}
