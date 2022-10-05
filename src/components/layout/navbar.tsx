
import { useState } from "react";
import MobileMenu from "./mobilemenu";

import { Useauth } from "../../store/store";

import AuthWrapper from "../auth/authWrapper";

import { useSession, signIn, signOut } from "next-auth/react"

const links=[
  'Buy','Rent','Find coRental'
]

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false)

  const auth=Useauth()

  const { data:sesssion, status } = useSession()

  console.log('navbar session test => session : ' ,sesssion , )

  const toggle=()=>{
    settogglemenu(prev=>!prev)
  }
  return ( 

<>
  <nav className="bg-primary1 px-0 py-4 flex justify-between   w-full relative">


    
   {!togglemenu&& <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer sm:hidden" onClick={toggle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>}
{togglemenu&&<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={toggle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>}

    <h1 className="text-2xl pl-6 md:w-1/5 flex justify-center w-2/5 m-auto ">Dari</h1>
    
    <ul className="sm:flex flex-wrap justify-evenly w-4/5 hidden ">
      
          {links.map((link,index)=>(
            <li key={links[index]}>{links[index]}</li>
            ))}
      
    </ul>
    
            {!sesssion&& <button className="py-1 px-3 mr-2  bg-secondary2 rounded-lg" onClick={()=>signIn()} >signin  </button>}
            {sesssion&&<button className=" py-1 px-3 mr-2  bg-secondary2 rounded-lg" onClick={()=>signOut()} >Log out </button>}
          


    {togglemenu&&<MobileMenu/>}

  </nav>
    
           
            </>
     );
}
 
export default Navbar;





