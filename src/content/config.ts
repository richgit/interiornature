import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    headline: z.string(),
    headerImage: z.string().optional(),
    body: z.string(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headline: z.string().optional(),
    headerImage: z.string().optional(),
    showInMenu: z.boolean().default(true),
    menuOrder: z.number().default(10),
    phone: z.string().optional(),
    email: z.string().optional(),
  }),
});

export const collections = {
  'home': homeCollection,
  'pages': pagesCollection,
};