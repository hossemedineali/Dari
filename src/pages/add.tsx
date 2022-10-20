

import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import {  useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import Select from "react-select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from 'next/image'

import MapWithNoSSR from "../components/maps/mapWithNoSSR";

import ImageUploading, { ImageListType } from "react-images-uploading";


import { useMode } from "../store/store";
import {governorates,cities,MygovernorateType} from '../utils/cities'
import Switch from "../components/ui/switch";
import { trpc } from "../utils/trpc";
import { motion } from "framer-motion";
import HouseFilters from "../components/addpost/housefilter";
import LandFilters from "../components/addpost/landfilter";


// ###########Types###################

type Props={
    children :JSX.Element
}


type State={
    value?:string
    ,label:string,
    position?:[number,number],
    
}

const propertytype=[{label:'House',value:'House'},{label:'Land',value:'Land'}]



export const form=z.object({
    price:z.number({
        required_error:'required',
        invalid_type_error:'required'
        
    }),
    size:z.number({
        required_error:'required '
    }),
    pricePer:z.string().default('mounth'),
    rooms:z.number({
        required_error:'required'
    }),
    Garage: z.boolean().default(false),
    Balcony: z.boolean().default(false),
    OutdoorArea: z.boolean().default(false),
    SwimmingPool: z.boolean().default(false),
    UndercoverParking: z.boolean().default(false),
    airConditioning: z.boolean().default(false),
    solarPanels: z.boolean().default(false),
    SolarHotwater: z.boolean().default(false),
    contact:z.string({
        required_error:'Please provide a contact'
    }).regex(/^[0-9]{2}[-]*[0-9]{3}[-]*[0-9]{3}$/,{message:'Enter a valid phone number ex:22-000-000'}),

    
    //regex(/^([0-9]{2})[ \\-]*)*?[0-9]{3}?[ \\-]*[0-9]{3}?$/),
    description:z.string().default('')
    
    

 })

 const imgtype=z.array(z.string())
 type Imgtype=z.infer<typeof imgtype>

type Form =z.infer<typeof form>;




//#########################################################

const AddPost = () => {
    const router=useRouter()
    const {data:sesssion}=useSession()

    if(!sesssion){
        if (typeof window!=='undefined'){
            router.replace('/')
        }
    }else{

        
        return (
            
            <Post /> );
        }
    }



 
        const Post=()=>{

            const [selectedGovernorate, setselectedGovernorate] = useState<State>({label:'',value:'',position:[0,0]})
            const [selectedMunicipality, setselectedMunicipality] = useState<State>({label:'',value:'',position:[0,0]})
            const [houseLand,sethouseLand ] = useState('')

            const mode=useMode()
        
               console.log('selected mun :',selectedMunicipality)

           console.log('selected gov :',selectedGovernorate)
            
            const munoptions=cities[selectedGovernorate.label]

        
        
        
        const hundelgovchange=(e:MygovernorateType)=>{

        setselectedGovernorate({label:e.label,value:e.value as string,position:e.position as [number,number]})
       
        setselectedMunicipality({label:'',value:'',position:[0,0]})
        sethouseLand('')

        }

        const hundelmunchange=(e:MygovernorateType)=>{
            setselectedMunicipality({label:e.label,value:e.value as string,position:e.position as [number,number]})  }


        
            return(
                
                <div className=" xl:w-2/3 mx-auto  relative top-20 px-2" >
                    <h1 className="text-xl	">Add announcement :</h1>

                    <div className="flex flex-col md:gap-2 
                      justify-between md:flex-row md:w-2/3 mx-auto  mt-10 ">

                    <div className="  md:w-1/2">
                    <label htmlFor="governorate" className="font-medium">Governorate</label>
                        <Select
                        instanceId="governorate"
                        id="governorate" options={governorates} 
                        onChange={(e)=>hundelgovchange(e as MygovernorateType)}
                        
                        
                        />
                    </div>

                    <div className="md:w-1/2">
                        <label htmlFor=" municipalities" className="font-medium">Municipality
                        </label>
                        <Select 
                            isDisabled={!selectedGovernorate}
                        instanceId="municipalities"
                        id="municipalities"
                        options={munoptions}
                    value={selectedMunicipality as MygovernorateType}

                    onChange={(e)=>{hundelmunchange(e as MygovernorateType)}}
                         />
                    </div>
                    </div>


                    {/* Select type  */}

                     {selectedMunicipality.label&& (
                    <div className="flex flex-col  justify-between  md:w-2/3 mx-auto   mt-2  ">
                          <label className="font-medium">Property Type </label>  
                         <Select
                            options={propertytype}
                            placeholder={'Select property type'}
                            onChange={(e)=>sethouseLand(e?.label as string)}
                         />
                    </div>
                         ) }   


                {selectedGovernorate&&selectedMunicipality&&houseLand=='House'&&
                    <div>

                    <div className="flex w-full md:w-2/3 mt-2 mx-auto  " >
                        
                    <span onClick={()=>mode.setmode('Sell')} id='Buy' className={`${mode.mode=='Sell'?'border-red':'border-devider'}  w-1/3 text-center  border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Sell</span>
                    <span onClick={()=>mode.setmode('Rent')} id='Rent' className={`${mode.mode=='Rent'?'border-red':'border-devider'}  w-1/3 text-center  border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</span>
                    <span onClick={()=>mode.setmode('CoRental')}  className={`${mode.mode=='CoRental'?'border-red':'border-devider'}  w-1/3 text-center  border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</span>
                </div>
                        <div className="md:w-2/3 mx-auto ">

                    <HouseFilters selectedGovernorate={selectedGovernorate} selectedMunicipality={selectedMunicipality} />
                        </div>
                    </div>
                    
                    }
                {selectedGovernorate&&selectedMunicipality&&houseLand=='Land'&&
                    
                    <div className="flex w-full md:w-2/3 mt-2 mx-auto">
                        <LandFilters selectedGovernorate={selectedGovernorate} selectedMunicipality={selectedMunicipality}/>
                    </div>
                    
                    }

              
                </div >
            )
        }








        











        export default AddPost;