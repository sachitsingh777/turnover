// api/routers/category.ts
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { z } from 'zod';

export const categoryRouter = createTRPCRouter();

// Fetch All Categories
categoryRouter.query("getAllCategories", {
  async resolve({ ctx }) {
    const categories = await db.category.findMany();
    return { categories };
  },
});

// Define input schema for adding a category
const AddCategoryInput = z.object({
  name: z.string(),
  description: z.string().optional(),
});

categoryRouter.mutation("addCategory", {
  input: AddCategoryInput,
  async resolve({ ctx, input }) {
    const { name, description } = input;
    const category = await db.category.create({
      data: { name, description },
    });
    return { category };
  },
});
