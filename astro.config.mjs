// @ts-check
import { defineConfig, envField } from "astro/config";
//import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: { plugins: [tailwindcss()] },
  adapter: vercel({}),
  //integrations: [mdx()],
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: "server",
        access: "public",
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
