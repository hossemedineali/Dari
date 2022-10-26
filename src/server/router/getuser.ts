import { createRouter } from "./context";


export const getUser=createRouter()
    .query('getUser',{
     
        async resolve({ctx}){
            if(ctx.session){
            return ctx.prisma.user.findUnique({
                where:{
                    id:ctx.session?.user?.id
                },
                select:{
                    liked:true
                }
            })}
        }
    })