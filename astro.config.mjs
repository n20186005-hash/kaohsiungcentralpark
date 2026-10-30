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
  trailingSlash: 'always',
  // 兩種建置情境：
  // 1. 本地預覽／靜態託管：astro build（本檔預設），產出 dist/index.html 等靜態檔案，
  //    直接由 astro preview 或任何靜態伺服器提供（缺少 index.html 會讓 / 變成 404）。
  // 2. Cloudflare Workers 部署：ASTRO_ADAPTER=cloudflare astro build，
  //    產出 dist/client（靜態資源）+ dist/server（SSR worker），
  //    建置流程暫時隱藏根設定以避免遞迴導入，完成後恢復根包裝器設定供部署。
  adapter: cloudflareBuild ? cloudflare({ imageService: 'passthrough' }) : undefined,
  integrations: site ? [sitemap({customPages:['https://kaohsiungcentralpark.com/','https://kaohsiungcentralpark.com/en/','https://kaohsiungcentralpark.com/photo-credits/'],filter:(url)=>!/(?:404|offline)(?:\/|$)/.test(url)})] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
