import { publicProcedure, router } from './trpc';
 
export const appRouter = router({

  hello : publicProcedure.query(()=>{
    return {message:"Hello World"}
  })
  // ...
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;