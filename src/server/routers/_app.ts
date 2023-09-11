import { z } from "zod";
import { privateProcedure, publicProcedure, router } from "../trpc";
import { currentUser } from "@clerk/nextjs";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let count = 0;
export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      count += 1;
      await sleep(1000);
      return {
        greeting: `hello ${opts.input.text} ${count}`,
      };
    }),

  getCurrUser: privateProcedure.query(async (opts) => {
    const user = await clerkClient.users.getUser(opts.ctx.userId);
    return {
      imageUrl: user.imageUrl,
    };
    // return user;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
