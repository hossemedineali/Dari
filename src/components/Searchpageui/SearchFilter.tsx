
import {governorates,cities,MygovernorateType} from '../../utils/cities'

import Select from 'react-select'
import { useState } from 'react'


import {State} from '../../types/typeshelper'




const SearchFilter = () => {

    
    const [selectedGovernorate, setselectedGovernorate] = useState<State>({label:'',value:'',position:[0,0]})
    const munoptions=cities[selectedGovernorate.label]
    const [selectedMunicipality, setselectedMunicipality] = useState<State>({label:'',value:'',position:[0,0]})


    const hundelgovchange=(e:MygovernorateType)=>{
        setselectedGovernorate({label:e.label,value:e.value as string,position:e.position as [number,number]})
        setselectedMunicipality({label:'',value:'',position:[0,0]})
        }

    const hundelmunchange=(e:MygovernorateType)=>{
        setselectedMunicipality({label:e.label,value:e.value as string,position:e.position as [number,number]})  }


    return ( <div style={{scrollbarWidth:'none'}} className="min-h-max  sticky  overflow-scroll pt-4 top-16 w-full md:w-1/3 bg-devider no-scrollbar" >
              <div className='mx-auto '>

                    <p className="text-l  text-center mx-auto ">Filter </p>

                    

                    <div className='flex flex-col md:flex-row gap-2  px-1 '>
                        <Select
                        id='governorate'
                        instanceId='governorate'
                        options={governorates}
                        onChange={(e)=>{hundelgovchange(e as MygovernorateType)}}
                        className='w-full sm:w-1/2 self-center'
                        placeholder=' Governorate'
                        />
                        <Select
                        id='Municipality'
                        instanceId='Municipality'
                        options={munoptions}
                        onChange={(e)=>{hundelmunchange(e as MygovernorateType)}}
                        noOptionsMessage={({inputValue}) => !inputValue ?   "Select Governorates to show cities":''} 
                        className='w-full sm:w-1/2 self-center'
                        placeholder="Municipality"
                        />
                    </div>

                    <div className=' flex w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>

                        <div className='w-full sm:w-1/2 self-center  text-left'>
                            <input id='House' type='checkbox'/>
                            <label htmlFor='House' >House</label>
                        </div>
                        
                        <div className='w-full sm:w-1/2 self-center text-right'>

                            <input id='Land' type='checkbox'/>
                            <label htmlFor='Land'>Land</label>
                        </div>

                    </div>

                        <p className='font-medium text-lg'> Property for :</p>
                    <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>

                        <div> 
                            <input id='Sell' type='checkbox'/>
                            <label htmlFor='Sell' >Sell</label>
                        </div>

                        <div> 
                            <input id='Rent' type='checkbox'/>
                            <label htmlFor='Rent' >Rent</label>
                        </div>

                        <div> 
                            <input id='CoRental' type='checkbox'/>
                            <label htmlFor='CoRental' >CoRental</label>
                        </div>
                    </div>

                    <p className='font-medium text-lg'> Price :</p>

                        <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>
                          
                            <div className='w-1/2'>
                                <label htmlFor='min'>min</label><br/>
                                <input id='min' type='number' className='w-full'/>
                            </div>

                            <div className='w-1/2'>
                                <label htmlFor='max'>max</label><br/>
                                <input id='max' type='number' className='w-full'/>
                            </div>
                            
                        </div>
                        
                        <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around' >
                                <div> 
                                    <input id='Mounth' type='checkbox'/>
                                    <label htmlFor='Mounth' >Mounth</label>
                                </div>

                                <div> 
                                    <input id='Day' type='checkbox'/>
                                    <label htmlFor='Day' >Day</label>
                                </div>
                            </div>






                        <p className='font-medium text-lg'> Size  m2 :</p>

                        <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>
                            <div className='w-1/2'>
                                <label htmlFor='minsize'>min</label><br/>
                                <input id='minsize' type='number' className='w-full'/>
                            </div>

                            <div className='w-1/2'>
                                <label htmlFor='maxsize'>max</label><br/>
                                <input id='maxsize' type='number' className='w-full'/>
                            </div>

                        </div>


                    <p className='font-medium text-lg'> Rooms </p>

                    <div className='flex  w-full sm:w-1/2 md:w-full gap-2  mx-auto px-[10%] justify-around'>
                            <div className='w-1/2'>
                                <label htmlFor='minsize'>min</label><br/>
                                <input id='minsize' type='number' className='w-full'/>
                            </div>

                            <div className='w-1/2'>
                                <label htmlFor='maxsize'>max</label><br/>
                                <input id='maxsize' type='number' className='w-full'/>
                            </div>

                        </div>
                    


                    <p className='font-medium text-lg'> Features </p>

                    <div className='flex justify-evenly'>
                        <div>
                                <div> 
                                    <input id='Garage' type='checkbox'/>
                                    <label htmlFor='Garage' >Garage</label>
                                </div>

                                <div> 
                                    <input id='Balcony' type='checkbox'/>
                                    <label htmlFor='Balcony' >Balcony</label>
                                </div>

                                <div> 
                                    <input id='OutdoorArea' type='checkbox'/>
                                    <label htmlFor='OutdoorArea' >OutdoorArea</label>
                                </div>

                                <div> 
                                    <input id='SwimmingPool' type='checkbox'/>
                                    <label htmlFor='SwimmingPool' >SwimmingPool</label>
                                </div>
                            
                        </div>
                        <div>

                                <div> 
                                    <input id='UndercoverParking' type='checkbox'/>
                                    <label htmlFor='UndercoverParking' >Parking</label>
                                </div>

                                <div> 
                                    <input id='airConditioning' type='checkbox'/>
                                    <label htmlFor='airConditioning' >air Conditioning</label>
                                </div>

                                <div> 
                                    <input id='solarPanels' type='checkbox'/>
                                    <label htmlFor='solarPanels' >solar Panels</label>
                                </div>

                                <div> 
                                    <input id='SolarHotwater' type='checkbox'/>
                                    <label htmlFor='SolarHotwater' >Solar Hotwater</label>
                                </div>

                        </div>

                    </div>
                       
     
                    
                   

                </div>
           
            </div> );
}
 
export default SearchFilter;