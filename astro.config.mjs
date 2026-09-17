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
  // 搭配 wrangler.jsonc（main: 官方 server entrypoint、assets: ./dist）使用預設模式：
  // 建置會產出 dist/_worker.js 與 dist 靜態資源，兩者皆由 Cloudflare 直接部署。
  adapter: cloudflareBuild ? cloudflare({ imageService: 'passthrough' }) : undefined,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
