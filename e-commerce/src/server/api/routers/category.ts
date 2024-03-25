// api/routers/category.ts
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const categoryRouter = createTRPCRouter();

// Fetch All Categories
categoryRouter.query("getAllCategories", {
  async resolve({ ctx }) {
    const categories = await db.category.findMany();
    return { categories };
  },
});


categoryRouter.mutation("addCategory", {
    async resolve({ ctx, input }) {
      const { name, description } = input;
      const category = await db.category.create({
        data: { name, description },
      });
      return { category };
    },
  });