
import { createRouter } from "./context"
import {prisma} from "../../server/db/client"
import { userschema } from "../../env/schema.mjs";
import { postschema } from "../../env/schema.mjs";

export const signup=createRouter()
.mutation("adduser", {
    input: userschema,
    async resolve({ input }) {
    
      try{
       const newuser= await prisma.user.create({
          data:{
      
            first_name:input.first_name,
            last_name:input.lastname,
            phone:input.phone
          }
          
          
          
      })

      return {
        message:'OK!!',
        newuser
      }
      
      }catch(e){
        
        return{
          message :"failed", 
          data:e
        }
      }
    },
  })
  





 /*  try {
    await client.user.create({ data: { email: 'alreadyexisting@mail.com' } })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      }
    }
    throw e
  } */