import { defineCollection, z } from 'astro:content';

/**
 * PROJECT COLLECTION
 * Defined here for future use. When you are ready to add projects:
 * 1. Create the folder: src/content/projects/
 * 2. Add the loader line back in: loader: glob({ pattern: "**\/*.md", base: "./src/content/projects" })
 * 3. Add 'projects' to the collections export at the bottom.
 */
const projects = defineCollection({
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

// Exporting an empty object prevents Astro from attempting to sync 
// directories that don't exist in your current repository.
export const collections = {};