import { defineConfig } from 'astro/config';
import qwikdev from "@qwikdev/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  output: "server",
  adapter: vercel()
});