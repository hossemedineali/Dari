import { createRouter } from "./context";
import {  z} from "zod";



export const getpost =createRouter()
    .query('getpostforindexpage',{
        input:z.object({
            posttype:z.string().optional().default(''),
            
        }),
        async resolve({input,ctx}){
            return await ctx.prisma.post.findMany({

                take:10,
                where:{
                    
                    type:{
                        contains:input.posttype
                    },
                },
                select:{
                    type:true,
                    municipality:true,
                    governorate:true,
                    size:true,
                    rooms:true,
                    images:true,
                    price:true,
                    pricePer:true,
                    id:true,
                    
                }
                ,
                orderBy:{
                    date:'desc'
                }
            })
        }
    })


    