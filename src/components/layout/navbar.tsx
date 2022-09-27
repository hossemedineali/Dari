import { MotionConfig } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./mobilemenu";

const links=[
  'Buy','Sell','Find coRental'
]

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false)

  const toggle=()=>{
    settogglemenu(prev=>!prev)
  }
  return ( 


  <nav className="bg-primary1 p-4 flex    w-full absolute">
    
   {!togglemenu&& <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden" onClick={toggle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>}
{togglemenu&&<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>}

    <h1 className="text-2xl pl-6 sm:w-1/4 flex justify-center w-3/5">Dari</h1>
    
    <ul className="sm:flex flex-wrap justify-evenly w-2/4 hidden ">
      
          {links.map((link,index)=>(
            <li key={index}>{links[index]}</li>
            ))}
      
    </ul>
    
    <div className="sm:w-1/4 w-2/6 ml-auto flex  flex-wrap justify-evenly ">
            <button className="w-2/5  bg-secondary2 rounded-lg">Login</button>
            <button className="w-2/5 bg-secondary2 rounded-lg">signup</button>
    </div>

    {togglemenu&&<MobileMenu/>}
  </nav>
           
     );
}
 
export default Navbar;





