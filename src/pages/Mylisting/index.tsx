import { trpc } from "../../utils/trpc";
import { useSession } from "next-auth/react"

import { useRouter } from 'next/router'
import OneCard from "../../components/ui/onecard";
import { useEffect, useState } from "react";


const Listing = () => {

const router=useRouter()

const [updated,setupdated]=useState(false)
    const session=useSession()
    if(!session){
        return router.push('/')
    }
    else{

    
        
  
    const posts=trpc.useQuery(['getpost.UserListing',{auther:session.data?.user?.id}])
    const Delete=trpc.useMutation('delete.delete')

    const hundeldelet=(id:string,images:string|null)=>{
        Delete.mutate({id,images})
      //  router.reload()   
    }
    return ( <div className="relative top-20">
                <h1 className="font-bold text-xl ml-20 text-primary1 "> My announcements: </h1> 
                <div className="flex flex-col md:flex-row flex-wrap gap-5 md:px-10 mt-10 justify-center mx-auto content-center"> 

                    {
                        posts.data?.map(item=>{
                            return <div className="border-b-devider border-b-4 mb-1" key={item.id}>
                                    <OneCard id={item.id} images={item.images as string}  announcementtype={item.announcementtype} price={item.price} pricePer={item.pricePer as string} governorate={item.governorate} municipality={item.municipality} rooms={item.rooms} size={item.size}  propertyType={item.propertyType} date={item.date}/>
                                    <div className="flex justify-center mt-6 px-20">
                                        <button onClick={()=>hundeldelet(item.id,item.images )} className=" flex  py-1 px-1  text-red border-red border w-20 rounded-xl hover:scale-110 active:scale-90">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>

                                            Delete
                                        </button>
                                    </div>    
                                
                                </div>
                        })
                    }
                    </div>
       
    </div> );
    }
}
 
export default Listing;