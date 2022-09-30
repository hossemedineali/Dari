import { motion } from "framer-motion";
import { useShowFilter } from "../../store/store";
import FilterInput from "./filterinput";




const MobileFilter = () => {

    const showFilter=useShowFilter()


    return (
        <div className="md:hidden block bg-white w-full absolute top-0 left-0 right-0 bottom-0 z-10 p-4">
       
       <motion.aside
          initial={{width:0 , opacity:0}}
          animate={{ width:'100%',opacity:1}}
          exit={{width:0}}
          transition={{easeOut: [1]}}
          
          
          >
            <div className="flex w-full  top-0 h-12  left-0  fixed bg-primary2 z-10">
                <svg
                    onClick={()=>showFilter.setShowFilter(false,false)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-1 mr-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
               <div className="flex-grow-1 flex w-full ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 mr-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            {/* Search Input */}
                <input  className="outline-0 bg-transparent w-full mr-auto" placeholder="Type place  "/>
               </div>
               
            </div>
            
            {/*  devider */}

            <div className="w-full border mt-4"></div>


            {/* Input */}
            <div className="h-full  relative">
                <FilterInput/>
            </div>

            <div className="w-full h-16 fixed bottom-0 left-0 text-center bg-primary2 ">
            <button className="m-auto mt-4 bg-red py-1 px-2 rounded-full font-bold">Search</button>

            </div>
            </motion.aside>
                    
        </div>
         );
}
 
export default MobileFilter;