import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const catalogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/catalog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoKeywords: z.string().optional(),
    category: z.string(),
    image: z.string().default('/images/glow_sign.png'),
    order: z.number().default(99),
  }),
});

export const collections = {
  'catalog': catalogCollection,
};
