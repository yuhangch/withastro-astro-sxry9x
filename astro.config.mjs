import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  output: 'server',
  adapter: vercel(),
});
