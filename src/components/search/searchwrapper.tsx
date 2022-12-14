

import { useFormInput } from "../../store/store";
import SearchInput from "./searchInput";






const Searchwrapper = () => {

    const filter=useFormInput()    


        

       
      
    return ( 
        <div className="relative   lg:w-3/5 md:w-4/6  w-full item-center bg-traansparent  h-40 py-4 md:px-4  rounded-2xl mb-4   ">
           <div  className="flex flex-wrap justify-around w-full">
           <h3 onClick={()=>filter.setannouncementtype('Sell')} id='Buy' className={`${filter.form.announcementtype=='Sell'?'border-red':'border-transparent'} text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Buy</h3>
            <h3 onClick={()=>filter.setannouncementtype('Rent')} id='Rent' className={`${filter.form.announcementtype=='Rent'?'border-red':'border-transparent'}   text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</h3>
            <h3 onClick={()=>filter.setannouncementtype('CoRental')}  className={`${filter.form.announcementtype=='CoRental'?'border-red':'border-transparent'}   text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</h3>
           </div>

           
            <SearchInput/>

        </div>
     );
}
 
export default Searchwrapper;



