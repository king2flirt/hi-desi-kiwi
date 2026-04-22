import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hi.desi.kiwi',
  base: '/',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});