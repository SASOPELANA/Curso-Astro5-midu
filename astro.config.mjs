// @ts-check
import { defineConfig, envField } from "astro/config";
// import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";

// Importa el adaptador de Node, que soporta el preview.
import node from "@astrojs/node";

// En este ejemplo, se elimina la asignación del adaptador de Vercel.
export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  vite: { plugins: [tailwindcss()] },
  // integrations: [mdx()],
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
