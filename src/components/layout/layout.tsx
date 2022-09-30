
import React from "react";
import Navbar from "./navbar";

type porps={
    children:JSX.Element
}

const Layout :React.FC<porps>= (props)=> {
    return ( 
        <>
        <Navbar/>
            {props.children}
        </>
        
     );
}
 
export default Layout;