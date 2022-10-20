
import Select from "react-select";
import { usefilter} from "../../store/store";

import { useRouter } from 'next/router'

import {groupedcities,filterOption} from '../../utils/cities'
import { setErrorMap } from "zod";
import { useState } from "react";


const style = {
    control: (base:any) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none',
      
    })
  };



  
const SearchInput:React.FC = () => {
    

    const [selectedMunError,setselectedMunError]=useState('')
    const filter=usefilter()    
    
    const router =useRouter()

    const hundelchange=(e:string)=>{
        if(e){
            setselectedMunError('')
            filter.setmunicipality(e)
        }
    }
    
   
    const hundelclicksearch=()=>{
        if(filter.municipality){
            router.push('/search')
        }
        else{
            setselectedMunError('please select a municipality')
        }
    }
    return ( 
  
          
          
        <div className="mt-4 flex  relative gap-4 bg-white border  rounded-2xl px-4">
            

        <div className="flex-grow"> 

            
        {selectedMunError&&<p className="text-red" >{selectedMunError}</p>}
        <Select 
            instanceId=" municipalities"
            id=" municipalities"
            options={groupedcities}
            filterOption={filterOption}
            className=" border-0 w-full mr-auto bg-devider" placeholder="search city "
            onChange={(e)=>{hundelchange(e?.label as string)}}
            styles={style}
            />

        </div>
        

        <button onClick={hundelclicksearch} className="text-red my-auto rounded-full flex items-center mt-auto ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </button>
        
        </div>
        
 );
}
 
export default SearchInput;