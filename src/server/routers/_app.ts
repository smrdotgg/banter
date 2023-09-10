import { z } from 'zod';
import { procedure, router } from '../trpc';
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


let count = 0;
export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async (opts) => {
      count += 1;
      await sleep(1000);
      return {
        greeting: `hello ${opts.input.text} ${count}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;