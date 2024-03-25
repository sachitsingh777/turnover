// api/auth.ts
import { createRouter } from '@trpc/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

export const authRouter = createRouter({
  resolver: {
    signUp: async ({ input }) => {
      const { email, password } = input;

      // Your sign-up logic here
      // Make sure to hash the password before storing it

      return { email }; // Return some data if sign-up is successful
    },
    login: async ({ input }) => {
      const { email, password } = input;

      // Your login logic here
      // Validate credentials and generate JWT token

      return { email }; // Return some data if login is successful
    },
  },
});

export type AuthRouter = typeof authRouter;
export type AuthInput = z.infer<ReturnType<AuthRouter['input']['type']['fields']>>;
