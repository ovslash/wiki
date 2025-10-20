// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://ovslash.github.io/wiki",
  base: "/wiki/",
  trailingSlash: "always",
  integrations: [
    starlight({
      lastUpdated: true,
      title: "Mon Aide-Mémoire",
      sidebar: [
        {
          label: "Bienvenue !",
          slug: "index",
        },
        {
          label: "Methodes",
          items: [
            { label: "Git", link: "methodes/git" },
            { label: "Gitflow", link: "methodes/gitflow" },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
