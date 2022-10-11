        import { useSession } from "next-auth/react"

        import { useRouter } from 'next/router'
        import {  useEffect, useState } from "react"


        import Select from "react-select";


        import MapWithNoSSR from "../components/maps/mapWithNoSSR";


        import { useMode } from "../store/store";
        import {governorates,cities,MygovernorateType} from '../utils/cities'


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
                <div className="" >
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
                            <Select 
                       
                            
                        isClearable={true}
                            
                            id=" municipalities"
                            options={munoptions}
                           value={selectedMunicipality as MygovernorateType}

                           onChange={(e)=>{hundelmunchange(e as MygovernorateType)}}
                            className='p-2  ' />
                    </div>
                    </div>
                                
            
                      <div className='mx-2'>
                            
                        <Filters selectedMunicipality={selectedMunicipality}/>
                        
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
                <div style={{minHeight:'80vh'}} className=" rounded-lg border w-full md:w-4/6 lg:w-2/3  min-h-[50%]  m-auto overflow-hidden " >
                    <div  className="bg-primary1 rounded-t-lg  flex flex-wrap justify-around w-full mb-2 ">
                        
                        <h3 onClick={()=>mode.setmode('Buy')} id='Buy' className={`${mode.mode=='Buy'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Sell</h3>
                        <h3 onClick={()=>mode.setmode('Rent')} id='Rent' className={`${mode.mode=='Rent'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</h3>
                        <h3 onClick={()=>mode.setmode('CoRental')}  className={`${mode.mode=='CoRental'?'border-red':'border-devider'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</h3>
                    </div>

                    <div  className="px-8">
                    {children}

                    </div>
                </div>
            )
        }

       

        type FProps={
            selectedMunicipality:MygovernorateType
        }

        const Filters:React.FC<FProps>=({selectedMunicipality})=>{


            const mode =useMode()

           const [position,setposition]=useState<[number,number]>([0,0])
           

           useEffect(() => {
            if(selectedMunicipality.label!=''){
                setposition(selectedMunicipality.position as [number,number])
            }
           
             
           }, [setposition])
           



        
            


            return(
                <div className="w-full h-full ">
                    <div className="border border-devider my-2 "></div>

        {/* Price Input */}
        <h5>Price :</h5>

        <label htmlFor="price" className="relative text-gray-400 focus-within:text-gray-600 block w-52  border-2 rounded border-devider ">

        <p  className=" pointer-events-none w-8 h-6 absolute top-1/2 transform -translate-y-1/2 right-2"> Tnd</p>


        <input type="number" name="price" id="price" placeholder="" className="form-input w-full"/>
        </label>
        {mode.mode==='Rent' &&<div className="flex gap-2">

        <input type='checkbox' id="price fac" value='Monthly'/> 
        <label>Mounthly</label>

        <input type='checkbox' id="price fac"/>

        <label>Dayli</label>
        </div>
            }
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


        {selectedMunicipality.label!=''&&<div>
            
            <h3>Plase set the property location on the map  <span className="font-bold" >or <button className="  text-red px-1  rounded-2xl">use</button> the device location</span> </h3>
            <div className="w-full h-[60vh]">

            
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

                </div>
            )
        }
        export default Addpost;





