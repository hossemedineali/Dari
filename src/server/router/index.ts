// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { addPost } from "./addpost";
import { getpost } from "./querrypost";





export const appRouter = createRouter()
  .transformer(superjson)
 
  .merge("add.",addPost)
  .merge("getpost.",getpost)
  ;



  
// export type definition of API
export type AppRouter = typeof appRouter;
