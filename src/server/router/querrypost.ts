import { createRouter } from "./context";
import {   z} from "zod";
import {Filter} from '../../types/typeshelper'
 



export const getpost =createRouter()
    .query('getpostforindexpage',{
        input:z.object({
            type:z.string().optional().default(''),
            
        }),
        async resolve({input,ctx}){

            
            return await ctx.prisma.post.findMany({

                take:10,
                where:{
                    type:input.type,
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

    .query('getfiltredposts',{
        input:z.object({
            type:z.string(),
            municipality:z.string().optional(),
            governorate:z.string().optional(),
            maxprice:z.number().optional(),
            minprice:z.number().optional(),
            minrooms:z.number().optional(),
            maxrooms:z.number().optional(),
            size:z.number().optional(),
            Garage: z.boolean().optional(),
            Balcony: z.boolean().optional(),
            OutdoorArea: z.boolean().optional(),
            SwimmingPool: z.boolean().optional(),
            UndercoverParking: z.boolean().optional(),
            airConditioning: z.boolean().optional(),
            solarPanels: z.boolean().optional(),
            SolarHotwater: z.boolean().optional()

            
        }),
        async resolve({input,ctx}){

            const filter:Filter={
                
            }


            if(input.governorate){

                filter.municipality=input.governorate
            }

            if(input.municipality){

                filter.municipality=input.municipality
            }

            
            if(input.type){

                filter.type=input.type
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
                   

            if(input.size){
                
                filter.size={
                    gt:input.size
                
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



            








            
            return  filter
        }
    })
    
    
    
    
    
    
    /* 
    switch(!!Object.values(input)){
        
        case !!input.governorate:
            filter.municipality=input.governorate

        case !!input.municipality:
            filter.municipality=input.municipality

        
        case !!input.type:
                filter.type=input.type

        case !!input.maxprice :
                filter.price={
                    ...filter.price,
                    lt:input.maxprice
            }
        case !!input.minprice:
                filter.price={
                    ...filter.price,
                    gt:input.minprice
            }
        case !!input.minrooms:
            filter.rooms={
                    ...filter.rooms,
                    gt:input.minrooms
            }
        case !!input.maxrooms:
                filter.rooms={
                    ...filter.rooms,
                    lt:input.maxrooms
            }

        case !!input.size:
                filter.size={
                    gt:input.size
                }
        case !!input.Garage:
                filter.Garage=input.Garage

        case !!input.Balcony:
                filter.Balcony=input.Balcony
        
        case !!input.OutdoorArea:
                filter.OutdoorArea=input.OutdoorArea
        
        case !!input.SwimmingPool:
                filter.SwimmingPool=input.SwimmingPool
        
        case !!input.UndercoverParking:
                filter.UndercoverParking=input.UndercoverParking
        
        case !!input.airConditioning:
                filter.airConditioning=input.airConditioning
        
        case !!input.solarPanels:
                filter.solarPanels=input.solarPanels
                
        case !!input.SolarHotwater:
                filter.SolarHotwater=input.SolarHotwater

    } */
    /*
                if(input.governorate){

                    filter.municipality=input.governorate
                }

                if(input.municipality){

                    filter.municipality=input.municipality
                }

                
                if(input.type){

                    filter.type=input.type
                }

                if(input.maxprice ){
                    
                    filter.price={
                        ...filter.price,
                            lt:input.maxprice

                    }
                
                if(input.minprice){
                    filter.price={
                        ...filter.price,
                        gt:input.minprice
                
                }
                       
                if(input.minrooms){
                    filter.rooms={
                        ...filter.rooms,
                        gt:input.minrooms
                }

                   
                if(input.maxrooms){
                    filter.rooms={
                        ...filter.rooms,
                        lt:input.maxrooms
                
                }
                       

                if(input.size){
                    
                    filter.size={
                        gt:input.size
                    
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

                
    */