// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // pour trier les pages "récentes"
        created: z.coerce.date().optional(),

        tags: z.array(z.string()).default([]),
      }),
    }),
  }),
};
