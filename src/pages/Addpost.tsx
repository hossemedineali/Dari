import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import {  useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import Select from "react-select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import MapWithNoSSR from "../components/maps/mapWithNoSSR";


import { useMode } from "../store/store";
import {governorates,cities,MygovernorateType} from '../utils/cities'
import Switch from "../components/ui/switch";


        export type Location={
            loaded:boolean,
            coordinates?:{
            lat:number|null,
            lng:number|null
            },
            error? :{
                code:number,
                message:string
            }
            
        }

      

       
        const roomsOption=[
            {value:1,label:1},
            {value:2,label:2},
            {value:3,label:3},
            {value:4,label:4},
            {value:'5+',label:'5+'},
        ]



        const Addpost = () => {
        
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
        
        type State={
            value?:string
            ,label:string,
            position?:[number,number],
            
        }

        const Post=()=>{

            const [selectedGovernorate, setselectedGovernorate] = useState<State>({label:'',value:'',position:[0,0]})
            const [selectedMunicipality, setselectedMunicipality] = useState<State>({label:'',value:'',position:[0,0]})
            
           
            
            const munoptions=cities[selectedGovernorate.label]

        
        
        
        const hundelgovchange=(e:MygovernorateType)=>{

        setselectedGovernorate({label:e.label,value:e.value as string,position:e.position as [number,number]})
       
        setselectedMunicipality({label:'',value:'',position:[0,0]})

        }

        const hundelmunchange=(e:MygovernorateType)=>{
            setselectedMunicipality({label:e.label,value:e.value as string,position:e.position as [number,number]})  }


        
            return(
                
                <div className="   relative top-20" >
                    <h1 className="text-xl	">Add announcement :</h1>
                <Tabs >
                    <div>
                    <div className="flex flex-col  justify-between md:flex-row ">

                        <div className="  md:w-5/6">
                        <label htmlFor="governorate" className="font-medium"> Select governorate</label>
                            <Select
                            
                            id="governorate" options={governorates} 
                            onChange={(e)=>hundelgovchange(e as MygovernorateType)}
                             
                            className='p-2'
                            />
                        </div>

                    <div className="md:w-5/6">
                            <label htmlFor=" municipalities" className="font-medium"> Select  municipality
                            </label>
                            <Select  id=" municipalities"
                            options={munoptions}
                           value={selectedMunicipality as MygovernorateType}

                           onChange={(e)=>{hundelmunchange(e as MygovernorateType)}}
                            className='p-2  ' />
                    </div>
                    </div>
                                
            
                      <div className='mx-2'>
                            {selectedMunicipality.value!=''&&
                        <Filters selectedMunicipality={selectedMunicipality}/>
                            }
                            {selectedMunicipality.value==''&&<h1>Please select your Municipality To continue</h1>}
                        
                            </div>
                        


                  
                    </div>

                </Tabs>
                </div >
            )
        }



        type Props={
            children :JSX.Element
        }


        const Tabs:React.FC<Props>=({children})=>{


            const mode=useMode()
            return(
                <div style={{minHeight:'80vh'}} className=" rounded-lg border w-full md:w-5/6  min-h-[50%]  m-auto overflow-hidden " >
                    <div  className="bg-primary1 rounded-t-lg  flex flex-wrap justify-around w-full mb-2 ">
                        
                        <h3 onClick={()=>mode.setmode('Buy')} id='Buy' className={`${mode.mode=='Buy'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Sell</h3>
                        <h3 onClick={()=>mode.setmode('Rent')} id='Rent' className={`${mode.mode=='Rent'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</h3>
                        <h3 onClick={()=>mode.setmode('CoRental')}  className={`${mode.mode=='CoRental'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</h3>
                    </div>

                    <div  className="px-4 md:p-1 lg:p-8">
                    {children}

                    </div>
                </div>
            )
        }

       

        type FProps={
            selectedMunicipality:MygovernorateType
        }











 const form=z.object({
    price:z.number({
        required_error:'required',
        invalid_type_error:'required'
        
    }),
    landsize:z.number({
        required_error:'required '
    }),
    rooms:z.number({
        required_error:'required'
    }),
    Garage: z.boolean().default(false),
    Balcony: z.boolean().default(false),
    OutdoorArea: z.boolean().default(false),
    SwimmingPool: z.boolean().default(false),
    UndercoverParking: z.boolean().default(false),
    AirConditioning: z.boolean().default(false),
    SolarPanels: z.boolean().default(false),
    SolarHotWater: z.boolean().default(false),

 })

type Form =z.infer<typeof form>;

const Filters:React.FC<FProps>=({selectedMunicipality})=>{
    
    const [showMap,setshowMap]=useState(false)
    const { register, handleSubmit,setValue ,setError,formState:{errors,isValid,isDirty,isSubmitted} } = useForm<Form>({ 
        resolver:zodResolver(form)
    });



        const submit =(data:Form)=>{
            console.log(data)       }


            
   
/* const submit=(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
            console.log('submitt')    
    } */
            const mode =useMode()

           const [position,setposition]=useState<[number,number]>([0,0])
           

           useEffect(() => {
            if(selectedMunicipality.label!=''){
                setposition(selectedMunicipality.position as [number,number])
            }
           
             
           }, [setposition])
           


          

           const [location, setLocation] = useState<Location>({
            loaded: false,
            coordinates: { lat:null  , lng:null },
        });
    
    const getDevicePosition=()=>{
        const onSuccess = (location :any) => {

            setposition([location.coords.latitude,location.coords.longitude])
            
        
    };

    const onError = (error:any) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

   
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }

        
            


            return(
                <form className="w-full h-full " onSubmit={(handleSubmit(submit))} >
                    <div className="border border-devider my-2 "></div>


        <div className="flex justify-between flex-col md:flex-row">
            <div className='w-full  md:w-[30%]'>
             {/* -------------- Price Input---------------------- */}
            <h5 className={`font-medium mb-1 ${errors.price?.message? 'text-red':'' }`} >Price : {errors.price?.message? errors.price.message : ''}</h5>

                <label htmlFor="price" className={`relative text-gray-400 focus-within:text-gray-600 block   border-2 rounded ${errors.price?.message? 'border-red':'border-devider'} `}>

                <p  className=" pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 right-2"> Tnd</p>


                <input name="price" type="number"  id="price"   placeholder="" className="form-input  w-full h-[38px]" 
                onChange={(e)=>setValue('price',parseFloat(e.currentTarget.value))}
                />
                
               
                </label>
                
                {mode.mode==='Rent' &&<div className="flex gap-2">

                <input type='checkbox'  id="price fac" value='Monthly'/> 
                <label>Mounthly</label>

                <input type='checkbox' id="price fac"/>

                <label>Dayli</label>

                </div>
                    }
                   
                <div className="border border-devider my-2 md:hidden"></div>
            </div>
                
            <div className='w-full  md:w-[30%]'>
                    {/* Land size Input  */}

                <h5 className={`font-medium mb-1 ${errors.landsize?.message? 'text-red':'' }`}>Land size : {errors.landsize?.message? errors.landsize?.message:''}</h5>
                <label htmlFor="landsize" className={`relative text-gray-400 focus-within:text-gray-600 block   border-2 rounded ${errors.landsize?.message? 'border-red':'border-devider'} `}>


                <input type='number' id='landsize'  placeholder=" property size " className="w-full h-[38px] rounded-md"
                onChange={(e)=>setValue('landsize',parseFloat(e.currentTarget.value)  )}
                />

                <p  className=" pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 right-4"> m2</p>

                </label>

                <div className="border border-devider my-2 md:hidden"></div>



            </div>

            <div className='w-full  md:w-[30%]'>
                     {/* Rooms Number Input  */}

                <h5 className={`font-medium mb-1 ${errors.rooms?.message? 'text-red':'' }`}>Bed rooms : {errors.rooms?.message? errors.rooms.message:''}</h5>
                <label  htmlFor="rooms" className={`relative text-gray-400 focus-within:text-gray-600 block   border-2 rounded ${errors.rooms?.message? 'border-red':'border-devider'} `}>
                <Select
                onChange={(e)=>setValue('rooms',e?.value as number)}
                id="rooms"
                options={roomsOption}
                
                />


                </label>


                <div className="border border-devider my-2 md:hidden"></div>
            </div>
                
               



        </div>


        <div className="border border-devider my-2  hidden md:block"></div>



        <div className="flex flex-col md:flex-row justify-arround">

                    {/* outdoor Features */}

        <div className=" px-8 py-8 md:w-1/2">
        <h3 className="font-medium mb-1">Outdoor features :</h3> 
        <>
        <div className=" flex ">
        <input type='checkbox' id='Garage' name='Garage' value='Garage' className="mr-4 "/>
        <label htmlFor='Garage' >Garage</label> <br/>
        </div>

        <div className=" flex ">
        <input type='checkbox' id='Balcony' name='Balcony' value='Balcony' className="mr-4 "/>
        <label htmlFor='Balcony' >Balcony</label> <br/>
        </div>


        <div className=" flex ">
        <input type='checkbox' id='Outdoor area' name='Outdoor area' value='Outdoor area' className="mr-4 "/>
        <label htmlFor='Outdoor area' >Outdoor area</label> <br/>
        </div>

        <div className=" flex ">
        <input type='checkbox' id='Swimming pool' name='Swimming pool' value='Swimming pool' className="mr-4 "/>
        <label htmlFor='Swimming pool' >Swimming pool</label> <br/>
        </div>

        <div className=" flex ">
        <input type='checkbox' id='Undercover parking' name='Undercover parking' value='Undercover parking' className="mr-4 "/>
        <label htmlFor='Undercover parking' >Undercover parking</label> <br/>
        </div>
        </>
        </div>

        <div className="border border-devider my-2 md:hidden "></div>


        {/* Climat control and energy filter*/}


        <div className=" px-8 py-8 md:w-1/2">
        <h3 className="font-medium mb-1">Climate control & energy :</h3> <br/>

                <div className=" flex">
                <input type='checkbox' id='Air conditioning' name='Air conditioning' value='Air conditioning' className="mr-4 "/>
                <label htmlFor='Air conditioning' >Air conditioning</label> <br/>
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
        </div>

                
                <div className="flex ">

                    <Switch showMap={showMap } setshowMap={setshowMap}/>
                    <p className="ml-4">Set location</p>
                </div>



        {showMap&&<div>
            
            <h3>Plase set the property location on the map <br/> <span className="font-bold" >or <button onClick={getDevicePosition} className="  text-red px-1  rounded-2xl">use</button> the device location</span>(device location work better on devices with GPS) </h3>
            <div className="w-full h-[60vh] z-0">

            
                <MapWithNoSSR position={position[0]!=0?position :selectedMunicipality.position} setposition={setposition}  />

               
            
            </div>
        </div>}

        {/* Keywords filter */}
        <div className="px-4 py-8  ">
            <label>Description</label>
            <div className="flex justify-between mt-2">
                <input type='text'  placeholder="Keywords" className="border h-16 w-full rounded-md "/>
            </div>
            
        </div>

        <div className=" flex justify-center" >

<button className="self-center bg-secondary1 p-1 hover:scale-105 active:scale-95 mb-1 rounded-3xl m-auto ">Add Announcment</button>
    </div>
                </form>
            )
        }
        export default Addpost;





