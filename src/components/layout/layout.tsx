
import React from "react";
import { Useauth } from "../../store/store";
import AddPostForMobile from "./AddPostForMobile";

import Navbar from "./navbar";
import SigninModal from "./signinModal";


type porps={
    children:JSX.Element
}

const Layout :React.FC<porps>= (props)=> {

   const auth= Useauth()


    return ( 
        <>
        <Navbar/>
        {auth.show&&<SigninModal/>}

            {props.children}
        <AddPostForMobile/>
        </>
        
     );
}
 
export default Layout;