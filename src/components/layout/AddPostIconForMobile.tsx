import Tooltip from "./tooltip";

import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"
import { Useauth } from "../../store/store";




const AddPostForMobile = () => {

   const auth=Useauth()
    
   const router=useRouter()

    const { data:sesssion } = useSession()


    const handelClick=()=>{
        if(sesssion){
            router.push('/add')
        }else{
            auth.setToogleShow(!auth.show)
            
        }
    }
    return ( 

        
        <div onClick={handelClick} className=" fixed bottom-2 right-5 text-red cursor-pointer md:hidden">
       
        <Tooltip text="Add post">
        
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 hover:text-red h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </Tooltip>

    </div> );
}
 
export default AddPostForMobile;