import { createRouter } from "./context";
import {  z} from "zod";

import {cloudinary} from '../../../cloudinary-config'



export const addPost =createRouter()
    .mutation('addPost',{
        input:z.object({

            auther:z.string(),

            type:z.string(),
            price:z.number(),
            size:z.number(),
            rooms:z.number(),
            pricePer:z.string(),

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

            images :z.array(z.unknown()),
            description:z.string()


        }),
       async resolve({input,ctx}){
            
            
                
                const addimage=async()=>{
                    let newimagesformat=''
                  
                    for (let i=0 ;i<input.images.length;i++){
                        await   cloudinary.uploader.upload(input.images[i] as string).then((result)=>{
                            console.log(result.public_id)
                            if(i==input.images.length-1){
                                newimagesformat=newimagesformat + result.public_id

                            }
                            else{
                                newimagesformat=newimagesformat + result.public_id+',' 
                            }
                           console.log('newimagesformat !::',newimagesformat)
                        })
                       }
                      return newimagesformat
                }
                  
                const newimagesdata= await addimage()

                return ctx.prisma.post.create({
                    data:{
                        ...input,
                        images:newimagesdata 
                    }
                })
    
                } 
                 /*  ctx.prisma.post.create({
                    data:{
                        ...input,images:'aeeee'
                    }
                })  */
            

            
            
        
    })
   