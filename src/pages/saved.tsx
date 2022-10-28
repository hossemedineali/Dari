import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import OneCard from "../components/ui/onecard";
import { trpc } from "../utils/trpc";

const Saved = () => {
    const session=useSession()
    const router=useRouter()
    if(session.status=='authenticated'){
        const favorites=trpc.useQuery(['getUser'])
        console.log(favorites)
        console.log(favorites.data?.likedposts )
        return ( <div className="relative top-28  flex flex-wrap w-full   justify-center  md:gap-10  ">
            {favorites.data?.likedposts.map((item)=>{
                return <OneCard key={item.id} id={item.id} images={item.images as string} announcementtype={item.announcementtype} 
                        price={item.price} pricePer={item.pricePer as string} governorate={item.governorate} municipality={item.municipality} 
                        propertyType={item.propertyType} rooms={ item.rooms} size={item.size}  
                        />
                    })}
               
    </div> );
    }else{
        
            if(typeof window !='undefined'){

                router.push('/')
            }
        
    }
    
}
 
export default Saved;