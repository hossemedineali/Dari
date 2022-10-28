import {  z } from "zod";
import { createRouter } from "./context";

export const manageLiked=createRouter()
    .mutation('add',{
        input:z.object({
            postid:z.string()
        }),
        async resolve({input,ctx}){

         
        return  ctx.prisma.user.update({
            where:{id:ctx.session?.user?.id},
            data:{
              likedposts:{
                connect:{
                  id:input.postid
                }
              }
            }
          })
        }
    })
    .mutation('delete',{
      input:z.object({
          postid:z.string()
      }),
      async resolve({input,ctx}){

       
      return  ctx.prisma.user.update({
          where:{id:ctx.session?.user?.id},
          data:{
            likedposts:{
              disconnect:{
                id:input.postid
              }
            }
          }
        })
      }
  })
    