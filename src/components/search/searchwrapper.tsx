

import { useMode } from "../../store/store";
import SearchInput from "./searchInput";






const Searchwrapper = () => {

    const mode=useMode();
       

        

       
      
    return ( 
        <div className="relative   lg:w-3/5 md:w-4/6  w-full item-center bg-traansparent  h-40 py-4 md:px-4  rounded-2xl mb-4   ">
           <div  className="flex flex-wrap justify-around w-full">
           <h3 onClick={()=>mode.setmode('Sell')} id='Buy' className={`${mode.mode=='Sell'?'border-red':'border-transparent'} text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Buy</h3>
            <h3 onClick={()=>mode.setmode('Rent')} id='Rent' className={`${mode.mode=='Rent'?'border-red':'border-transparent'}   text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</h3>
            <h3 onClick={()=>mode.setmode('CoRental')}  className={`${mode.mode=='CoRental'?'border-red':'border-transparent'}   text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</h3>
           </div>

           
            <SearchInput/>

        </div>
     );
}
 
export default Searchwrapper;



