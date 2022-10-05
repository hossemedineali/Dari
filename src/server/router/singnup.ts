
import { createRouter } from "./context"
import {prisma} from "../../server/db/client"
import { userschema } from "../../env/schema.mjs";
import { z } from "zod";

import * as trpc from '@trpc/server';
import {auth} from '../../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


//const auth =getAuth()

export const signup=createRouter()

.mutation("adduser", {
    input: userschema,
    async resolve({input,ctx  }) {
      
        const data={
          first_name:input.firstName,
          last_name:input.lastName,
          email:input.email,
          phone:input.phone
      }

      await createUserWithEmailAndPassword(auth,data.email,input.password)
      .then(res=>{
          return res
      })
      .catch(error=>{
        throw new trpc.TRPCError({
          code:'BAD_REQUEST',
          message:'email already exists',
          cause:error
        })
        
      })
     
     
   
    
      
    
    },

    
  }).query('test',{
    resolve({}){
      return {message:'connection'}
    }
  })



  /*

  await  prisma.user.create({
            data
          }).then((res)=>{
            return {
                ok:'ok ',
                data:{
                  googleauth_response:usecredential,
                  prisma_response:res
                }
            }
          }).catch(err=>{
            return{
              errorOrigine:'prisme',
              data:err
            }
          })

  */
  




