// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { addPost } from "./addpost";
import { getpost } from "./querrypost";
import {Delete} from './Delete'
import { getUser } from "./getuser";
import {manageLiked} from './FavPosts'




export const appRouter = createRouter()
  .transformer(superjson)
 
  .merge("add.",addPost)
  .merge("getpost.",getpost)
  .merge('delete.',Delete)
  .merge('',getUser)
  .merge('ManageFavPosts.',manageLiked)
  ;



  
// export type definition of API
export type AppRouter = typeof appRouter;
