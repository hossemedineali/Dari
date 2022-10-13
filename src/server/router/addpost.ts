import { createRouter } from "./context";
import { string, z } from "zod";


import {prisma } from '../db/client'


export const addPost =createRouter()
    .mutation('addPost',{
        input:z.object({

            auther:z.string(),

            type:z.string(),
            price:z.number(),
            size:z.number(),
            rooms:z.number(),

            Garage: z.boolean(),
            Balcony: z.boolean(),
            OutdoorArea: z.boolean(),
            SwimmingPool: z.boolean(),
            UndercoverParking: z.boolean(),
            airConditioning: z.boolean(),
            solarPanels: z.boolean(),
            SolarHotwater: z.boolean(),
            isposition:z.boolean(),

            governorate:z.string(),
            municipality:z.string(),

            lng:z.number(),
            lat:z.number(),

            images:z.string(),
            priceType:z.string()


        }),
        resolve({input,ctx}){

            
                return  ctx.prisma.post.create({
                    data:{
                        ...input
                    }
                })
            

            
            
        }
    })
   