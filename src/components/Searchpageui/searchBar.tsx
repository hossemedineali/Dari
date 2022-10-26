import Select from "react-select";
import { useFormInput} from "../../store/store";
import { useRouter } from 'next/router'
import {groupedcities,filterOption} from '../../utils/cities'
import { useState } from "react";
import {motion} from 'framer-motion'

const style = {
    control: (base:any) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
      width:'100%'
    })
  };



  
const SearchBar:React.FC = () => {
    

    const [selectedMunError,setselectedMunError]=useState('')
    const filter=useFormInput()    
    const router =useRouter()
    const hundelchange=(e:string)=>{
        if(e){
            setselectedMunError('')
            filter.setmunicipality(e)
        }
    }
   
    
    return (   
        <div className={`mt-4 flex  relative gap-4 bg-red border   rounded-2xl px-4 `}>           
        <div className="flex-grow">      
        <Select 
            instanceId=" municipalities"
            id=" municipalities"
            options={groupedcities}
            filterOption={filterOption}
            className=" border-0 w-full mr-auto bg-devider" 
            placeholder={""}
            styles={style}
            />
        </div>
            
      
        </div>   
 );
    }
 
export default SearchBar;