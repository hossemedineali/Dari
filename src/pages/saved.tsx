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
        return ( 
        <div className="relative top-28">
        <h1 className="font-bold text-primary1 text-xl ml-10 mb-10">Saved announcement</h1> 
        <div className="  flex flex-wrap w-full   justify-center  md:gap-10  ">
                    
            {favorites.data?.likedposts.map((item)=>{
                return <OneCard key={item.id} id={item.id} images={item.images as string} announcementtype={item.announcementtype} 
                price={item.price} pricePer={item.pricePer as string} governorate={item.governorate} municipality={item.municipality} 
                propertyType={item.propertyType} rooms={ item.rooms} size={item.size}  date={item.date}
                />
            })}
            {favorites.data?.likedposts.length==0&&(
                <div className="flex justify-center content-center items-center">
                    <h1 className="text-2xl font-medium">You don&#39;t have any saved announcement yet! </h1>
                </div>
            )}
               
    </div> 
            </div>
    );
    }else{
        
            if(typeof window !='undefined'){

                router.push('/')
            }
        
    }
    
}
 
export default Saved;