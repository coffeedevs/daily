import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const briefs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/briefs' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    extract: z.string(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { briefs };
