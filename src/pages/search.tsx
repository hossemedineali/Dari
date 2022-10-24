import {  useState } from "react";
import {  useShowFilter, useFormInput } from "../store/store";
import { trpc } from "../utils/trpc";
import {FilterInputType } from '../types/typeshelper'
import OneCard from "../components/ui/onecard";
import SearchFilter from "../components/Searchpageui/SearchFilter";
import Loader from "../components/loader/loader";

import no from '../../public/no.png'


const Search = () => {

    const show=useShowFilter()

    
   

    const formInput=useFormInput()

    console.log('||||' ,formInput.form)
    const [filterInput, setfilterInput] = useState<FilterInputType >(formInput.form)

 

    const data=trpc.useQuery(['getpost.getfiltredposts',{  ...filterInput}])


    return (
        <div  className="relative top-16 pt-1  ">

           
            <div onClick={()=>show.setShowFilter(true)} className=" h-14 fixed z-40 right-0 left-0 top-18 bg-white  shadow-md flex items-center justify-between md:gap-4 cursor-pointer">
                <div className="px-2 flex gap-2  flex-grow ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <p>{formInput.form.municipality}</p>

                </div>
                <div className="rounded-2xl flex border px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>

                    <span>Filters</span>

                </div>
            
            </div>

           {show.show&& <div className= "backdrop-md md:fixed absolute z-40   rounded-xl border   backdrop-opacity-10 top-[-60px] md:top-10 h-[99vh]  bottom-0  md:h-[90vh] md:right-[5%] md:left-[5%]   right-0 left-0 bg-white">
                
              
                <div className="overflow-y-scroll  h-full  rounded-xl shadow-md bg-devider">
                <SearchFilter setfilterInput={setfilterInput}/>

                </div>

               
                
            </div>}


            <div className="w-full md:w-5/6 lg:w-5/6 mx-auto ">


          
             {!show.show&&<div className="mt-32 flex flex-wrap w-full   justify-center  md:gap-10 ">
                {data.data?.map((itm,idx)=>{
                    return <OneCard id={itm.id} images={itm.images as string} announcementtype={itm.announcementtype} price={itm.price} pricePer={itm.pricePer as string} governorate={itm.governorate} municipality={itm.municipality} rooms={itm.rooms} size={itm.size} propertyType={itm.propertyType} key={idx}/>
                })}
            </div>}  

            {data.data?.length==0&&
                    <div  >
                        <div style={{
                            backgroundImage: `url(${no.src})`,
                            backgroundSize:'contain' ,
                            backgroundPosition: 'center', 
                            backgroundRepeat:'no-repeat'
                            }}    className="m-auto  h-[200px] w-[225px] flex justify-center ">
                          
                        
                        </div>

                        <div className="flex flex-col justify-center  ">
                        <p className="m-auto"><span className="font-medium">Sorry! </span>We couldn&apos;t find a match {filterInput.municipality&&filterInput.governorate?`in ${filterInput.municipality}`:''} {filterInput.governorate&&!filterInput.municipality?` in ${filterInput.governorate}`:''} </p>
                                  <button onClick={()=>show.setShowFilter(true)} className="m-4 bg-primary1 max-w-max mx-auto p-1 rounded-xl hover:scale-105">Search again ?</button>  
                                  <p className="m-auto"><span className="font-medium">Hint : </span> Try to be less specefic</p>
                        </div>

                                
                    </div>}
            {data.isLoading&&<div className="w-full  flex justify-center items-center m-auto ">
                <Loader/>
                </div>}



            </div>
    </div> );
}
 
export default Search;