
import React from "react";
import AddPostForMobile from "./AddPostIconForMobile";

import { useRouter } from 'next/router'

import Navbar from "./navbar";




type porps={
    children:JSX.Element
}

const Layout :React.FC<porps>= (props)=> {

   const router=useRouter()

   

    return ( 
        <>
        <Navbar/>
        

            {props.children}
        {router.route!='/Addpost'&&<AddPostForMobile/>}
        </>
        
     );
}
 
export default Layout;