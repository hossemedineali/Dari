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