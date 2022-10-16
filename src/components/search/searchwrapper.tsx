

import { useMode } from "../../store/store";
import SearchInput from "./searchInput";






const Searchwrapper = () => {

    const mode=useMode();
       

        

       
      
    return ( 
        <div className=" lg:w-3/5 md:w-5/6  w-11/12 item-center  border p-4 h-32 rounded-2xl mb-4  top-28 ">
           <div  className="flex flex-wrap justify-around w-full">
           <h3 onClick={()=>mode.setmode('Buy')} id='Buy' className={`${mode.mode=='Buy'?'border-red':'border-black'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Buy</h3>
            <h3 onClick={()=>mode.setmode('Rent')} id='Rent' className={`${mode.mode=='Rent'?'border-red':'border-black'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</h3>
            <h3 onClick={()=>mode.setmode('CoRental')}  className={`${mode.mode=='CoRental'?'border-red':'border-black'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</h3>
           </div>

           
            <SearchInput/>

        </div>
     );
}
 
export default Searchwrapper;



//bg-[url('/public/family.jpg')]