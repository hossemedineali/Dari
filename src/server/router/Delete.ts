import { createRouter } from "./context";
import {  string, z} from "zod";

import {cloudinary} from '../../../cloudinary-config'

export const Delete=createRouter()
   .mutation('delete',{
    input:z.object({
        id:z.string().nullish(),
        images:string().nullish()
    }),
    async resolve({input,ctx}){

        if(input.id){

        
            const deletPost=await ctx.prisma.post.delete({
                where:{
                    id:input.id
                }
            })

           let imagesarray
           let deletimages
           if(input.images){
            imagesarray=input.images.split(',')

             deletimages=await cloudinary.api.delete_resources(imagesarray)
           }



            
        return {deletPost,deletimages}
    }}
})