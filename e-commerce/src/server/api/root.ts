import { createHTTPServer } from "@trpc/server/adapters/standalone";
import {authRouter } from "~/server/api/routers/user";
import {createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;


 
const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000);
