// @ts-check
import { defineConfig } from 'astro/config';


import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';



// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'techxbc',
      logo: {
        src: './src/assets/techxbc-logo2.svg',
        replacesTitle: true,
      },
      social: {
          //github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Example Guide', slug: 'guides/example' },
              ],
          },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
          {
              label: 'Artificial Intelligence',
              autogenerate: { directory: 'artificial' },
          },
      ],
  }), mdx(), markdoc()],

  adapter: cloudflare(),
});