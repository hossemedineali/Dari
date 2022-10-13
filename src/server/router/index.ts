// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { addPost } from "./addpost";





export const appRouter = createRouter()
  .transformer(superjson)
 
  .merge("add.",addPost);



  
// export type definition of API
export type AppRouter = typeof appRouter;
