// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { addPost } from "./addpost";
import { getpost } from "./querrypost";
import {Delete} from './Delete'
import { getUser } from "./getuser";
import {addLiked} from './addLiked'




export const appRouter = createRouter()
  .transformer(superjson)
 
  .merge("add.",addPost)
  .merge("getpost.",getpost)
  .merge('delete.',Delete)
  .merge('',getUser)
  .merge('',addLiked)
  ;



  
// export type definition of API
export type AppRouter = typeof appRouter;
