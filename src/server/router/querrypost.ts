import { createRouter } from "./context";
import {   z} from "zod";
import {Filter} from '../../types/typeshelper'
 import {FilterInput} from '../../types/typeshelper'



export const getpost =createRouter()
    .query('getpostforindexpage',{
        input:z.object({
            type:z.string().optional().default(''),
            
        }),
        async resolve({input,ctx}){

            
            return await ctx.prisma.post.findMany({

                take:10,
                
                 where:{
                    announcementtype:input.type,
                },
               select:{
                id:true,
                images:true,
                announcementtype:true,
                price:true,
                pricePer:true,
                governorate: true,
                municipality:true,
                rooms:true,
                size:true,
                propertyType:true
                
               },
                orderBy:{
                    date:'desc'
                } 
            })
        }
    })

    .query('getfiltredposts',{
        input:FilterInput,
        async resolve({input,ctx}){

            const filter:Filter={
                
            }


            if(input.governorate){

                filter.governorate=input.governorate
            }

            if(!!input.municipality){
                filter.municipality=input.municipality
            }

            
            if(input.propertyType){ //house or land
                filter.propertyType=input.propertyType
            }

            if(input.announcementtype){ //sell rent corental 
                filter.announcementtype=input.announcementtype
            }

            if(input.landtype){      //buildable land or farmland
                    filter.landtype=input.landtype
            }

            if(input.maxprice ){
                
                filter.price={
                    ...filter.price,
                        lt:input.maxprice

                }
            }


            if(input.minprice){
                filter.price={
                    ...filter.price,
                    gt:input.minprice
            
                }
           }
                   
            if(input.minrooms){
                filter.rooms={
                    ...filter.rooms,
                    gt:input.minrooms
                }
             }

               
            if(input.maxrooms){
                filter.rooms={
                    ...filter.rooms,
                    lt:input.maxrooms
            
                }
            }
                   

            if(input.minsize){
                
                filter.size={
                    ...filter.size,
                    gt:input.minsize
                
                }
            }

            if(input.maxsize){
                
                filter.size={
                    ...filter.size,
                    lt:input.maxsize
                
                }
            }


            if(input.Garage){
                filter.Garage=input.Garage

            }

            if(input.Balcony){

                filter.Balcony=input.Balcony
            }
            
            if(input.OutdoorArea){

                filter.OutdoorArea=input.OutdoorArea
            }
            
            if(input.SwimmingPool){

                filter.SwimmingPool=input.SwimmingPool
            }
            
            if(input.UndercoverParking){

                filter.UndercoverParking=input.UndercoverParking
            }
            
            if(input.airConditioning){

                filter.airConditioning=input.airConditioning
            }
            
            if(input.solarPanels){

                filter.solarPanels=input.solarPanels
            }
                    
            if(input.SolarHotwater){

                filter.SolarHotwater=input.SolarHotwater
            }



            
            return    ctx.prisma.post.findMany({
              where:{
                ...filter
              }
            })  
        }
    })