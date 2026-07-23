import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    headline: z.string(),
    intro: z.string(),
    processTitle: z.string().optional(),
    processText: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headline: z.string().optional(),
    showInMenu: z.boolean().default(true),
    menuOrder: z.number().default(10),
    isContactCard: z.boolean().default(false),
    phone: z.string().optional(),
    email: z.string().optional(),
  }),
});

export const collections = {
  'home': homeCollection,
  'pages': pagesCollection,
};