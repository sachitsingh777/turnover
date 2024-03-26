import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({ name:z.string(),email: z.string().email(), password: z.string().min(6) }))
    .mutation(async ({ input }) => {
      const { name,email, password } = input;

      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        throw new Error('User already exists');
      }

      // Create the user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
       
      });

      return newUser;
    }),

  login: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(6) }))
    .query(async ({ input }) => {
      const { email, password } = input;

      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (!user) {
        throw new Error('User not found');
      }

      // Check if the password matches
      // You should compare the hashed password here
      if (user.password !== password) {
        throw new Error('Incorrect password');
      }

      return user;
    }),
});
