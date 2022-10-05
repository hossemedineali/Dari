// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";

import {signup} from './singnup'

export const appRouter = createRouter()
  .transformer(superjson)
 
  .merge("addUser",signup);



  
// export type definition of API
export type AppRouter = typeof appRouter;
