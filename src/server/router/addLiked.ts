import {  z } from "zod";
import { createRouter } from "./context";

export const addLiked=createRouter()
    .mutation('',{
        input:z.object({
            postid:z.string()
        }),
        async resolve({input,ctx}){

          return  {message:'test'}
          /* return  ctx.prisma.user.update({
                where: {
                  id: ctx.session?.user?.id
                },
                data: {
                  liked: {
                    connect: {
                      id: input.postid
                    },
                    
                  }
                }
              }) */
        }
    })