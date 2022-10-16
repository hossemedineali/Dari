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






        export type Location={
            loaded:boolean,
            coordinates?:{
            lat:number|null,
            lng:number|null
            },
            error? :{
                code?:number,
                message?:string
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
                
                <Post /> );
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
                
                <div className="   relative top-20 px-2" >
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
                        <Filters selectedMunicipality={selectedMunicipality} selectedGovernorate={selectedGovernorate}/>
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
                <div style={{minHeight:'80vh'}} className=" rounded-lg border w-full  md:w-5/6  min-h-[50%]  m-auto overflow-hidden " >
                    <div  className="bg-primary1 rounded-t-lg  flex flex-wrap justify-around w-full mb-2 ">
                        
                        <h3 onClick={()=>mode.setmode('Sell')} id='Buy' className={`${mode.mode=='Buy'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Sell</h3>
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
            selectedMunicipality:MygovernorateType,
            selectedGovernorate:MygovernorateType
        }











 const form=z.object({
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
    description:z.string().default('')
    
    

 })

 const imgtype=z.array(z.string())
 type Imgtype=z.infer<typeof imgtype>

type Form =z.infer<typeof form>;

type LocationType={
    coords:{accuracy: number,
        altitude: number|null, //|null
        altitudeAccuracy: number |null, //|null
        heading: number |null, //|null
        latitude: number,
        longitude: number,
        speed: number|null  ,   // |null
    }
}


const Filters:React.FC<FProps>=({selectedMunicipality,selectedGovernorate})=>{

    const {data:sesssion}=useSession()

    const router=useRouter()
   
    

    const [imagedata,setimagedata]=useState<Imgtype>([])


    
            const addPost =trpc.useMutation('add.addPost')
           const mode =useMode()

           const [position,setposition]=useState<[number,number]>([0,0])
           const [images, setImages] = useState([]);



    const [showMap,setshowMap]=useState(false)
    const {  handleSubmit,setValue ,formState:{errors} } = useForm<Form>({ 
        resolver:zodResolver(form)
    });



        const submit =async(data:Form)=>{

            let isposition=false
            if(position[0]!=0 ||position[1]!=0){
                isposition=true
            }

                const checkmode =()=>{
                    if (mode.mode =="Rent"){
                        setValue('pricePer','')
                    }
                }
                checkmode()
               
            
            const postData={
                ...data,
                
                governorate:selectedGovernorate.value as string,
                municipality:selectedMunicipality.value as string,
                type:mode.mode,
                isposition,
                lng:position[0],
                lat:position[1],
                images:imagedata,
            }

                
        addPost.mutate({
                ...postData,
                auther:sesssion?.user?.id as string,
               
            })

               
         
       
        }
        if (addPost.data){
            setTimeout(() => {
                router.replace('/')
                
            }, (2500));

          
          }
       

            
   
        const hundelFileInput=(imageList:ImageListType)=>{


        setimagedata([])
          
           setImages(imageList as never[])

            imageList.map(item=>{
               
                setimagedata(prev=> [...prev,item.dataURL as string]
                )
            })

           
        }
            
       

           useEffect(() => {
            if(selectedMunicipality.label!=''){
                setposition(selectedMunicipality.position as [number,number])
            }
   
           }, [selectedMunicipality.label])
           


          

           const [location, setLocation] = useState<Location>({
            loaded: false,
            coordinates: { lat:null  , lng:null },
        });
    
    const getDevicePosition=()=>{
        const onSuccess = (location :LocationType) => {

            console.log('debig location ' , location)

            setposition([location.coords.latitude,location.coords.longitude])
            
        
    };


    const onError = (err: any) => {

        console.log (err)

        setLocation({
            loaded: true,
            error: {
                code: err.code ,
                message: err.message,
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


                <input name="price" type="number"  id="price"  step="0.01" placeholder="" className="form-input px-1 w-full h-[38px]" 
                onChange={(e)=>setValue('price',parseFloat(e.currentTarget.value))}
                />
                
               
                </label>
                
                {mode.mode==='Rent' &&<div className="flex gap-2">

                <input onChange={(e)=>{if(e.currentTarget.checked){setValue('pricePer','mounth')}}} type='radio' name="pricePer" id="mounth" value='mounth'/> 

                <label>Mounthly</label>

                <input onChange={(e)=>{if(e.currentTarget.checked){setValue('pricePer','day')}}} type='radio' name="pricePer" id="day" value='day'/>

                <label>Dayli</label>

                </div>
                    }
                   
                <div className="border border-devider my-2 md:hidden"></div>
            </div>
                
            <div className='w-full  md:w-[30%]'>
                    {/* Land size Input  */}

                <h5 className={`font-medium mb-1 ${errors.size?.message? 'text-red':'' }`}>Land size : {errors.size?.message? errors.size?.message:''}</h5>
                <label htmlFor="landsize" className={`relative text-gray-400 focus-within:text-gray-600 block   border-2 rounded ${errors.size?.message? 'border-red':'border-devider'} `}>


                <input type='number' id='size'  placeholder=" property size " className="w-full h-[38px] rounded-md px-1"
                onChange={(e)=>setValue('size',parseFloat(e.currentTarget.value)  )}
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
        <input onChange={(e)=>{setValue('Garage',e.currentTarget.checked)}} type='checkbox' id='Garage' name='Garage' value='Garage' className="mr-4 "/>
        <label  htmlFor='Garage' >Garage</label> <br/>
        </div>

        <div className=" flex ">
        <input onChange={(e)=>{setValue('Balcony',e.currentTarget.checked)}} type='checkbox' id='Balcony' name='Balcony' value='Balcony' className="mr-4 "/>
        <label htmlFor='Balcony' >Balcony</label> <br/>
        </div>


        <div className=" flex ">
        <input onChange={(e)=>{setValue('OutdoorArea',e.currentTarget.checked)}} type='checkbox' id='Outdoor area' name='Outdoor area' value='Outdoor area' className="mr-4 "/>
        <label htmlFor='Outdoor area' >Outdoor area</label> <br/>
        </div>

        <div className=" flex ">
        <input onChange={(e)=>{setValue('SwimmingPool',e.currentTarget.checked)}} type='checkbox' id='Swimming pool' name='Swimming pool' value='Swimming pool' className="mr-4 "/>
        <label htmlFor='Swimming pool' >Swimming pool</label> <br/>
        </div>

        <div className=" flex ">
        <input onChange={(e)=>{setValue('UndercoverParking',e.currentTarget.checked)}} type='checkbox' id='Undercover parking' name='Undercover parking' value='Undercover parking' className="mr-4 "/>
        <label htmlFor='Undercover parking' >Undercover parking</label> <br/>
        </div>
        </>
        </div>

        <div className="border border-devider my-2 md:hidden "></div>


        {/* Climat control and energy filter*/}


        <div className=" px-8 py-8 md:w-1/2">
        <h3 className="font-medium mb-1">Climate control & energy :</h3> <br/>

                <div className=" flex">
                <input onChange={(e)=>{setValue('airConditioning',e.currentTarget.checked)}} type='checkbox' id='Air conditioning' name='Air conditioning' value='Air conditioning' className="mr-4 "/>
                <label htmlFor='Air conditioning' >Air conditioning</label> <br/>
                </div>

                <div className=" flex">
                <input onChange={(e)=>{setValue('solarPanels',e.currentTarget.checked)}} type='checkbox' id='Solar panels' name='Solar panels' value='Solar panels' className="mr-4 "/>
                <label htmlFor='Solar panels' >Solar panels</label> <br/>
                </div>


                <div className=" flex">
                <input onChange={(e)=>{setValue('SolarHotwater',e.currentTarget.checked)}} type='checkbox' id='Solar hot water' name='Solar hot water' value='Solar hot water' className="mr-4 "/>
                <label htmlFor='Solar hot water' >Solar hot water</label> <br/>
                </div>
        </div>
        </div>

        <div className="border border-devider my-2  "></div>

                    <div className="flex flex-col">
                    
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={hundelFileInput}
                        maxNumber={9}
                        >
        {({
          
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper  ">
            <div className="flex flex-wrap gap-2">

            <span
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="cursor-pointer border w-max p-1 rounded-lg hover:scale-95 active:scale-105"
              >
              Add images(9)
            </span>
            &nbsp;
           
            <span onClick={onImageRemoveAll} className="cursor-pointer border w-max p-1 rounded-lg hover:scale-95 active:scale-105">Remove all images</span>
                </div>
            <br/>
            <span className="mt-4"> {images.length } images selected </span>

            <div className="flex flex-wrap gap-2">

            {imageList.map((image, index) => (
                <div key={index} className=" border p-2">
                <Image src={image.dataURL as string} alt="" width={"150px"} height={"120px"} className="relative" />
                
                <div>

                  <span  onClick={() => onImageUpdate(index)} className="absloute mr-2 cursor-pointer border w-max p-1 rounded-lg hover:bg-red">Update</span>
                  <span onClick={() => onImageRemove(index)} className="cursor-pointer border w-max p-1 rounded-lg hover:border-red ">Remove</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
          </ImageUploading>
                     </div>

                 <div className="border border-devider my-2  "></div>
                
                
                
                <div className="flex ">

                    <Switch showMap={showMap } setshowMap={setshowMap}/>
                    <p className="ml-4">Set location</p>
                </div>



        {showMap&&<div>
            
            <h3>Plase set the property location on the map <br/> <span className="font-bold" >or <span onClick={getDevicePosition} className="  text-red px-1  rounded-2xl cursor-pointer">use</span> the device location</span>(device location work better on devices with GPS) </h3>
            <div className="w-full h-[60vh] z-0">
                    {location.error?.message&&<p className="text-secondary2 ">Enabel GPS on your device </p>}
            
                <MapWithNoSSR position={position[0]!=0?position :selectedMunicipality.position} setposition={setposition}  />

               
            
            </div>
        </div>}

        {/* Keywords filter */}
        <div className="px-4 py-8  ">
            <label>Description</label>
            <div className="flex justify-between mt-2">
                <input onChange={(e)=>{setValue('description',e.currentTarget.value)}} type='text'  placeholder="Description" className="border h-16 w-full rounded-md pl-2"/>
            </div>
            
        </div>

        <div className=" flex justify-center" >

<button type="submit" className="self-center bg-secondary1 p-1 hover:scale-105 active:scale-95 mb-1 rounded-3xl m-auto  ">{!addPost.isLoading? 'Add Announcment' : 'Sending data...'}</button>
    </div>




{ addPost.isSuccess&&   <motion.div
    initial={{x:'-100%'}}
    animate={{x:'0'}}
    transition={{duration:1}}
    className=" flex  border border-red text-red-700 px-4 py-3 rounded absolute z-2000 bottom-40  left-0 bg-devider" role="alert">
  <strong className="font-bold mr-1">Post added  </strong>
  <span className="block sm:inline"> Rederecting to Home page.</span>
</motion.div>}

{ addPost.isError&&   <motion.div
    initial={{x:'-100%'}}
    animate={{x:'0'}}
    transition={{duration:1}}
    className=" flex flex-col md:flex-row border border-red text-red-700 px-4 py-3 rounded absolute z-2000 bottom-20  left-0 bg-devider" role="alert">
  <strong className="font-bold mr-1">Oops , somthing went wrong  </strong>
  <span className="block sm:inline"> Please retry again later</span>
</motion.div>}




                </form>
            )
        }
        export default Addpost;





