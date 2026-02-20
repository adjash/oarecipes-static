// src/content/config.ts
import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      tags: z.array(z.string()),
      servings: z.number(),
      caloriesPerServing: z.number(),
      prepTime: z.number(),
      cookTime: z.number(),
      ingredients: z.array(
        z.object({
          name: z.string(),
          amount: z.number(),
          unit: z.string(),
        })
      ),
      notes: z.string(),
    }),
});

export const collections = { recipes };
