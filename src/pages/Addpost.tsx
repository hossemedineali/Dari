import { useSession } from "next-auth/react"

import { useRouter } from 'next/router'
import { useState } from "react"
//import { useForm } from "react-hook-form";


import Select from "react-select";
import { useMode } from "../store/store";

//import { zodResolver } from "@hookform/resolvers/zod";
//import  {z} from "zod";

//import {addpost}from '../types/addPost'



import {governorates} from '../utils/cities'
import {cities} from '../utils/cities'



const landSizeOptions=[
    {value:'50+' ,label:'50+'},
    {value:'100+' ,label:'100+'},
    {value:'150+' ,label:'150+'},
    {value:'200+' ,label:'200+'},
    {value:'300+' ,label:'300+'},
    {value:'400+' ,label:'400+'},
    {value:'500+' ,label:'500+'},
    {value:'1000+' ,label:'1000+'},
]

const roomsOption=[
    {value:1,label:1},
    {value:2,label:2},
    {value:3,label:3},
    {value:4,label:4},
    {value:'5+',label:'5+'},
]
const Addpost = () => {
    
    
   
    

    Object.keys(cities).map((item:string)=>{
      
    })

    const router=useRouter()
    const {data:sesssion}=useSession()
    
    

   
      
     

    if(!sesssion){
        if (typeof window !== 'undefined') {
            router.replace('/')
        }
    }else{

    return (
        
        <Post/> );
    }
    
}
 
const Post=()=>{

    /* const { register, handleSubmit ,setError,formState:{errors,isValid,isDirty,isSubmitted}} = useForm<z.infer<typeof addpost>>({
       
        defaultValues:{},
        resolver: zodResolver(addpost)
      }); */
    

    const mode=useMode();

    const [selectedGovernorate, setselectedGovernorate] = useState<string | unknown >()
    const [selectedMunicipality, setselectedMunicipality] = useState<string | unknown >()

    const handleChange = (option:string | unknown  ):void => {
        setselectedGovernorate((option as string))
        
      };


     // console.log('typeof(selectedGovernorate) :',typeof(selectedGovernorate))
    return(
        <div className="p-4  justify-center">
             <h1 className="text-xl text-center md:text-left"> add Post </h1>

             <form className="w-full md:w-1/2 md:m-auto">
                <h3 className="max-w-max   px-4  ">Mode :</h3>

             <div  className="flex flex-wrap justify-around w-full mb-2">
                
           <h3 onClick={()=>mode.setmode('Buy')} id='Buy' className={`${mode.mode=='Buy'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Buy</h3>
            <h3 onClick={()=>mode.setmode('Rent')} id='Rent' className={`${mode.mode=='Rent'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</h3>
            <h3 onClick={()=>mode.setmode('CoRental')}  className={`${mode.mode=='CoRental'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</h3>
           </div>

                    
                    <>

                    
                    <label htmlFor="governorate"> Select governorate</label>
                    <Select id="governorate" 
                    options={governorates}
                    
                    /* onChange={(e)=>handleChange(e?.label)} */
                    
                    onChange={(e)=>setselectedGovernorate(e?.label)}
                    />
                    </>
                    <>
                {selectedGovernorate&&<>
                    <label htmlFor=" municipalities"> Select  municipality</label>
                    <Select id=" municipalities" 
                    options={cities[selectedGovernorate as string]}
                    onChange={(e)=>setselectedMunicipality(e?.label)}
                    />
                    
                    </>}
                    </>

                    <div className="border border-devider my-2 "></div>

                            {/* Price Input */}
                        <h5>Price :</h5>
                    <label htmlFor="price" className="relative text-gray-400 focus-within:text-gray-600 block w-52  border-2 rounded border-devider ">

                            <p  className=" pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 right-2"> Tnd</p>
                        

                <input type="number" name="price" id="price" placeholder="" className="form-input w-full"/>
                </label>

                <div className="border border-devider my-2 "></div>

                    {/* Land size Input  */}

                <h5>Land size :</h5>
                    <label htmlFor="land size" className="relative text-gray-400 focus-within:text-gray-600 block w-52  border-2 rounded border-devider ">

                        
                    <Select 
                    
                    id="land size"
                    options={landSizeOptions}
                    />
                            <p  className=" pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 right-8"> m2</p>
                    
                </label>

                <div className="border border-devider my-2 "></div>



                {/* Rooms Number Input  */}

                <h5>Bed rooms :</h5>
                    <label htmlFor="rooms" className="relative text-gray-400 focus-within:text-gray-600 block w-52  border-2 rounded border-devider ">
                    <Select
                    id="rooms"
                    options={roomsOption}
                    />
                        

                </label>


                <div className="border border-devider my-2 "></div>


                        {/* outdoor Features */}

                        <div className=" px-8 py-8 ">
                    <h3 className="w-full">Outdoor features</h3> 
                        <>
                        <div className=" flex w-1/2">
                        <input type='checkbox' id='Garage' name='Garage' value='Garage' className="mr-4 "/>
                        <label htmlFor='Garage' >Garage</label> <br/>
                        </div>

                        <div className=" flex w-1/2">
                        <input type='checkbox' id='Balcony' name='Balcony' value='Balcony' className="mr-4 "/>
                        <label htmlFor='Balcony' >Balcony</label> <br/>
                        </div>


                        <div className=" flex w-1/2">
                        <input type='checkbox' id='Outdoor area' name='Outdoor area' value='Outdoor area' className="mr-4 "/>
                        <label htmlFor='Outdoor area' >Outdoor area</label> <br/>
                        </div>

                        <div className=" flex w-1/2">
                        <input type='checkbox' id='Swimming pool' name='Swimming pool' value='Swimming pool' className="mr-4 "/>
                        <label htmlFor='Swimming pool' >Swimming pool</label> <br/>
                        </div>

                        <div className=" flex w-1/2">
                        <input type='checkbox' id='Undercover parking' name='Undercover parking' value='Undercover parking' className="mr-4 "/>
                        <label htmlFor='Undercover parking' >Undercover parking</label> <br/>
                        </div>
                        </>
                </div>

                <div className="border border-devider my-2 "></div>


                        {/* Climat control and energy filter*/}


                        <div className=" px-8 py-8 ">
                        <h3>Climate control & energy</h3> <br/>
                    
                                    <div className=" flex">
                                    <input type='checkbox' id='Air conditioning' name='Air conditioning' value='Air conditioning' className="mr-4 "/>
                                    <label htmlFor='Garage' >Air conditioning</label> <br/>
                                    </div>

                                    <div className=" flex">
                                    <input type='checkbox' id='Solar panels' name='Solar panels' value='Solar panels' className="mr-4 "/>
                                    <label htmlFor='Solar panels' >Solar panels</label> <br/>
                                    </div>


                                    <div className=" flex">
                                    <input type='checkbox' id='Solar hot water' name='Solar hot water' value='Solar hot water' className="mr-4 "/>
                                    <label htmlFor='Solar hot water' >Solar hot water</label> <br/>
                                    </div>
                            </div>


                            <div className="border border-devider my-2 "></div>



                            {/* Keywords filter */}
                            <div className="px-4 py-8  ">
                                <label>Description</label>
                                <div className="flex justify-between mt-2">
                                    <input type='text'  placeholder="Keywords" className="border h-16 w-full rounded-md "/>
                                </div>
                                
                            </div>
                    </form>
        </div>
    )
}
export default Addpost;





