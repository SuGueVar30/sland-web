import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    fallbackLocale: 'es',
    localeDetection: true,
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      'ca': 'es',
      'en': 'es'
    }
  }
});