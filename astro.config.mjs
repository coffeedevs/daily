import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://daily.coffeedevs.com',
  integrations: [mdx()],
vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
