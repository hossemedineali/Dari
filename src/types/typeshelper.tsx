import { z} from "zod";


export const addpost=z.object({
    //mode:z.string(),
    //governorate:z.string(),
    //municipality:z.string(),
    price:z.number(),
    land_size:z.number().optional(),
    bed_rooms:z.number().optional(),
    outdoor_Featfures:z.string().array().optional(),
    Climate_control_energy:z.string().array().optional(),
    discription:z.string().optional()



})



export interface Filter {
    municipality?:string,
    type?:string
    governorate?:string,
    posttype?:string,
    price?:{
        gt?:number,
        lt?:number
    },
    rooms?:{
        gt?:number,
        lt?:number
    },
   
    size?:{
        gt?:number
    },
    Garage?: boolean,
    Balcony?: boolean,
    OutdoorArea?: boolean,
    SwimmingPool?: boolean,
    UndercoverParking?: boolean,
    airConditioning?: boolean,
    solarPanels?: boolean,
    SolarHotwater?: boolean,
}