import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://strawpot.com',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
