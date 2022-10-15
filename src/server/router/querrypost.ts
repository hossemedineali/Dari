import { createRouter } from "./context";
import {  z} from "zod";



export const getpost =createRouter()
    .query('getpost',{
        input:z.object({
            posttype:z.string().optional().default(''),
            
        }),
        async resolve({input,ctx}){
            return await ctx.prisma.post.findMany({
                where:{
                    type:{
                        contains:input.posttype
                    },

                }
            })
        }
    })


    