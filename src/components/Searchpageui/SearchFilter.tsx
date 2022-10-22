
import {governorates,cities,MygovernorateType} from '../../utils/cities'

import Select from 'react-select'
import { useEffect, useState } from 'react'


import {FilterInputType, FilterInput,State} from '../../types/typeshelper'

import { useForm, Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useShowFilter } from '../../store/store';



/* export const FilterInput =z.object({
    governorate:z.string({
        required_error:'required'
    }),
    municipality:z.string(),
    propertyType:z.string().optional().default(''),                 //  house or land
    announcementtype:z.string().optional().default(''), // sell Rent Corental
    landtype:z.string().optional(),        //buildable land or farmland
    maxprice:z.union([z.number(), z.null()]).default(null), //z.union([z.number(), z.null()]).
    minprice:z.union([z.number(), z.null()]).default(null),
    pricePer:z.string(),
    minrooms:z.union([z.number(), z.null()]).default(null),
    maxrooms:z.union([z.number(), z.null()]).default(null),
    minsize:z.union([z.number(), z.null()]).default(null),
    maxsize:z.union([z.number(), z.null()]).default(null),
    Garage: z.boolean().optional(),
    Balcony: z.boolean().optional(),
    OutdoorArea: z.boolean().optional(),
    SwimmingPool: z.boolean().optional(),
    UndercoverParking: z.boolean().optional(),
    airConditioning: z.boolean().optional(),
    solarPanels: z.boolean().optional(),
    SolarHotwater: z.boolean().optional()
 
}) */


type Props={
    setfilterInput:  (value: FilterInputType)  => void;
}

const SearchFilter:React.FC<Props> = ({setfilterInput}) => {

    const show=useShowFilter()


    const { register, handleSubmit,setValue, getValues,formState } = useForm< FilterInputType>({ 
        resolver:zodResolver(FilterInput) ,
       
    });
  const onSubmit = handleSubmit((data) => {
    console.log('submit')
    setfilterInput(data)

});



useEffect(()=>{
  if(formState.errors) {
    console.log('error from use effect',formState.errors)
    
  }
},[formState])

  const filters=getValues()


    
    const [selectedGovernorate, setselectedGovernorate] = useState<State>({label:'',value:'',position:[0,0]})
    const munoptions=cities[selectedGovernorate.label]
    const [selectedMunicipality, setselectedMunicipality] = useState<State>({label:'',value:'',position:[0,0]})


    const hundelgovchange=(e:MygovernorateType)=>{
        setselectedGovernorate({label:e.label,value:e.value as string,position:e.position as [number,number]})
        setselectedMunicipality({label:'',value:'',position:[0,0]})
        setValue('governorate',e.value as string)
        setValue('municipality','')    
    }


    const hundelmunchange=(e:MygovernorateType)=>{

        setselectedMunicipality({label:e.label,value:e.value as string,position:e.position as [number,number]})  
        setValue('municipality',e.value as string)
    }


    return ( 
    <div  className="" >
        

              <div className="h-[7%] shadow-md mb-2 flex bg-white fixed  z-50 w-full">
                    <p className="flex-grow text-center">Filters</p>
                    <svg onClick={()=>show.setShowFilter(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-4 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
              <form onSubmit={onSubmit} className='mx-auto mb-5 pt-14 pb-14'>

                                
                    <div className='flex flex-col md:flex-row gap-2  px-1  '>

                        <div className='w-full sm:w-1/2 self-center'>

                    <label htmlFor="governorate" className="font-medium">Governorate</label>
                        <Select
                        id='governorate'
                        instanceId='governorate'
                        options={governorates}
                        onChange={(e)=>{hundelgovchange(e as MygovernorateType)}}
                        
                        placeholder=' Governorate'
                        />
                        </div>
                        
                        <div className='w-full sm:w-1/2 self-center'>

                        <label htmlFor=" municipalities" className="font-medium">Municipality</label>
                        <Select
                        id='Municipality'
                        instanceId='Municipality'
                        value={selectedMunicipality as MygovernorateType}
                        options={munoptions}
                        onChange={(e)=>{hundelmunchange(e as MygovernorateType)}}
                        className=' self-center'
                        placeholder=' Municipality'
                        />
                        </div>
                    </div>

                    <div className="border border-white my-2 "></div>

                    <div className=' flex w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>

                        <div className='w-full sm:w-1/3 self-center  text-left'>
                            <input onChange={(e)=>{setValue('propertyType',e.currentTarget.id)}} id='House' type='radio' name='property type'/>
                            <label  htmlFor='House' >House</label>
                        </div>
                        
                        <div className='w-full sm:w-1/3 self-center text-center'>

                            <input onChange={(e)=>{setValue('propertyType',e.currentTarget.id)}} id='Land' type='radio' name='property type'/>
                            <label htmlFor='Land'>Land</label>
                        </div>

                        <div className='w-full sm:w-1/3 self-center text-right'>

                            <input onChange={(e)=>{setValue('propertyType',e.currentTarget.id)}} id='' type='radio' name='property type'/>
                            <label htmlFor='Any'>Any</label>
                        </div>

                    </div>

                    <div className="border border-white my-2 "></div>

                        <p className='font-medium text-lg'> Property for :</p>
                    <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>

                        <div> 
                            <input onChange={(e)=>{if(e.currentTarget.checked){setValue('announcementtype','Sell')}}} id='Sell' type='radio' name='announcment type' value='Sell'/>
                            <label htmlFor='Sell' >Sell</label>
                        </div>

                        <div> 
                            <input onChange={(e)=>{if(e.currentTarget.checked){setValue('announcementtype','Rent')}}} id='Rent' type='radio' name='announcment type' value='Rent'/>
                            <label htmlFor='Rent' >Rent</label>
                        </div>

                        <div> 
                            <input onChange={(e)=>{if(e.currentTarget.checked){setValue('announcementtype','CoRental')}}} id='CoRental' type='radio' name='announcment type' value='CoRental'/>
                            <label htmlFor='CoRental' >CoRental</label>
                        </div>
                    </div>

                    <div className="border border-white my-2 "></div>


                    <p className='font-medium text-lg'> Price :</p>

                        <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>
                          
                            <div className='w-1/2'>
                                <label  htmlFor='min'>min</label><br/>
                                <input onChange={(e)=>{ if(e.currentTarget.value){setValue('minprice',parseFloat(e.currentTarget.value) )} else{setValue('minprice',0)}}} id='min' type='number' className='w-full'/>
                            </div>

                            <div className='w-1/2'>
                                <label htmlFor='max'>max</label><br/>
                                <input onChange={(e)=>{ if(e.currentTarget.value){setValue('maxprice',parseFloat(e.currentTarget.value) )} else{setValue('maxprice',0)}}} id='max' type='number' className='w-full'/>
                            </div>
                            
                        </div>
                        
                        <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around' >
                                <div> 
                                    <input onChange={(e)=>{setValue("pricePer",e.currentTarget.id)}} id='Mounth' type='radio' name='pricePer'/>
                                    <label htmlFor='Mounth' >Mounth</label>
                                </div>

                                <div> 
                                    <input id='Day' type='radio' name='pricePer'/>
                                    <label htmlFor='Day' >Day</label>
                                </div>
                            </div>




                            <div className="border border-white my-2 "></div>

                        <p className='font-medium text-lg'> Size  m2 :</p>

                        <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>
                            <div className='w-1/2'>
                                <label  htmlFor='minsize'>min</label><br/>
                                <input onChange={(e)=>{ if(e.currentTarget.value){setValue('minsize',parseFloat(e.currentTarget.value) )} else{setValue('minsize',0)}}} id='minsize' type='number' className='w-full'/>
                            </div>

                            <div className='w-1/2'>
                                <label htmlFor='maxsize'>max</label><br/>
                                <input onChange={(e)=>{ if(e.currentTarget.value){setValue('maxsize',parseFloat(e.currentTarget.value) )} else{setValue('maxsize',0)}}} id='maxsize' type='number' className='w-full'/>
                            </div>

                        </div>

                        <div className="border border-white my-2 "></div>

                    <p className='font-medium text-lg'> Rooms </p>

                    <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>
                            <div className='w-1/2'>
                                <label htmlFor='minsize'>min</label><br/>
                                <input onChange={(e)=>{ if(e.currentTarget.value){setValue('minrooms',parseFloat(e.currentTarget.value) )} else{setValue('minrooms',0)}}} id='minsize' type='number' className='w-full'/>
                            </div>

                            <div className='w-1/2'>
                                <label htmlFor='maxsize'>max</label><br/>
                                <input onChange={(e)=>{ if(e.currentTarget.value){setValue('maxrooms',parseFloat(e.currentTarget.value) )} else{setValue('maxrooms',0)}}} id='maxsize' type='number' className='w-full'/>
                            </div>

                        </div>
                    

                        <div className="border border-white my-2 "></div>

                    <p className='font-medium text-lg'> Features </p>

                    <div className='flex justify-evenly'>
                        <div>
                                <div> 
                                    <input onChange={(e)=>{setValue('Garage',e.currentTarget.checked)}} id='Garage' type='checkbox'/>
                                    <label htmlFor='Garage' >Garage</label>
                                </div>

                                <div> 
                                    <input onChange={(e)=>{setValue('Balcony',e.currentTarget.checked)}} id='Balcony' type='checkbox'/>
                                    <label htmlFor='Balcony' >Balcony</label>
                                </div>

                                <div> 
                                    <input onChange={(e)=>{setValue('OutdoorArea',e.currentTarget.checked)}} id='OutdoorArea' type='checkbox'/>
                                    <label htmlFor='OutdoorArea' >OutdoorArea</label>
                                </div>

                                <div> 
                                    <input onChange={(e)=>{setValue('SwimmingPool',e.currentTarget.checked)}} id='SwimmingPool' type='checkbox'/>
                                    <label htmlFor='SwimmingPool' >SwimmingPool</label>
                                </div>
                            
                        </div>
                        <div>

                                <div> 
                                    <input onChange={(e)=>{setValue('UndercoverParking',e.currentTarget.checked)}} id='UndercoverParking' type='checkbox'/>
                                    <label htmlFor='UndercoverParking' >Parking</label>
                                </div>

                                <div> 
                                    <input onChange={(e)=>{setValue('airConditioning',e.currentTarget.checked)}} id='airConditioning' type='checkbox'/>
                                    <label htmlFor='airConditioning' >air Conditioning</label>
                                </div>

                                <div> 
                                    <input onChange={(e)=>{setValue('solarPanels',e.currentTarget.checked)}} id='solarPanels' type='checkbox'/>
                                    <label htmlFor='solarPanels' >solar Panels</label>
                                </div>

                                <div> 
                                    <input onChange={(e)=>{setValue('SolarHotwater',e.currentTarget.checked)}} id='SolarHotwater' type='checkbox'/>
                                    <label htmlFor='SolarHotwater' >Solar Hotwater</label>
                                </div>

                        </div>

                    </div>
                       
     
                    
                    <div style={{boxShadow: '1px -4px 6px -5px rgb(0 0 0 / 0.1), 0 -2px -4px -2px rgb(0 0 0 / 0.1)'}} className="flex fixed z-50 h-[7%] bg-white bottom-0 w-full rounded-b-2xl pt-2	 ">
                        <div className="flex-grow  text-center ">
                    <button  type="submit" value="Submit" className="px-4 bg-red py-1 rounded hover:scale-105 active:scale-95">Search</button>
                    </div>

                    <p className="cursor-pointer text-secondary1 mr-4">Reset filters</p>

                    </div>
                        </form>

           
            </div> );
}
 
export default SearchFilter;