
import Select from "react-select";
import { useShowFilter } from "../../store/store";
import DesktopFilter from "./desktopFilter";
import MobileFilter from "./mobileFilter";

import {groupedcities,filterOption} from '../../utils/cities'



export type StateProps= {
    mobilesearch: boolean;
   setmobilesearch:(arg: number) => void;
   
   
  }

  
const SearchInput:React.FC = () => {

    const showFilter= useShowFilter()
    

    const handelfocus=()=>{
        showFilter.setShowFilter(true,false)    }
    return ( 
    <div className="w-full  mt-4">
          
          

          
            {showFilter.showMobile&&<MobileFilter/>}
       
        

            {showFilter.showDesktop&&<DesktopFilter/>}
        <div className=" flex  relative gap-4 bg-transparent border-0 px-4">
            

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        <Select 
            instanceId=" municipalities"
            id=" municipalities"
            options={groupedcities}
            filterOption={filterOption}
            onChange={(e)=>{console.log(e)}} onFocus={handelfocus} className="outline-0 w-full mr-auto bg-transparent" placeholder="Type place "/>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hidden md:block h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
        
        
        <h2 onClick={()=>showFilter.setShowFilter(false,true)} className="cursor-pointer hidden md:block">Filters</h2>

        <button className="bg-red p-1 rounded-full hidden md:block">Search</button>
        
        </div>
        
    </div> );
}
 
export default SearchInput;