import { useSession } from "next-auth/react"

import { useRouter } from 'next/router'


const Addpost = () => {

    const router=useRouter()
    const {data:sesssion}=useSession()
    
    if(!sesssion){
        if (typeof window !== 'undefined') {
            router.replace('/')
        }
    }else{

    return ( <Post/> );
    }
    
}
 
const Post=()=>{
    return(
        <div>
             <h1> add Post </h1>
        </div>
    )
}
export default Addpost;