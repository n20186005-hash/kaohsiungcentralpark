import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://kaohsiungcentralpark.com';
const cloudflareBuild = process.env.ASTRO_ADAPTER === 'cloudflare';

export default defineConfig({
  site,
  output: cloudflareBuild ? 'server' : 'static',
  session: false,
  adapter: cloudflareBuild ? cloudflare({ mode: 'advanced', imageService: 'passthrough' }) : undefined,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
