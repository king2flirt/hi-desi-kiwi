import { defineCollection, z } from 'astro:content';

// Define the Project schema so your code remains type-safe for the future
const projects = defineCollection({
  // We remove the 'loader' for now so Astro doesn't look for a missing folder
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

// Exporting an empty object or a collection without a loader 
// will prevent the "Unexpected *" error during the build.
export const collections = { 
  // projects 
};