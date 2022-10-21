import { useEffect, useState } from "react";
import { usefilter } from "../store/store";
import { trpc } from "../utils/trpc";
import {FilterInputType} from '../types/typeshelper'
import SearchFilter from "../components/Searchpageui/SearchFilter";
import OneCard from "../components/ui/onecard";
import { Draggable } from "leaflet";



const Search = () => {

    
    const filter =usefilter()
    console.log(filter.municipality)
    const [filterInput, setfilterInput] = useState<FilterInputType>({municipality:filter.municipality})

    const data=trpc.useQuery(['getpost.getfiltredposts',{...filterInput}])
    
    console.log('filter input ',filterInput)

    //console.log(data)

    useEffect(()=>{
       

        //console.log(search)
    },[])

    
 


    return (
        <div className="absolute top-14 ">
           
            <div className="mt-10 flex flex-wrap  justify-center ">
                {data.data?.map((itm,idx)=>{
                    return <OneCard id={itm.id} images={itm.images as string} announcementtype={itm.announcementtype} price={itm.price} pricePer={itm.pricePer as string} governorate={itm.governorate} municipality={itm.municipality} rooms={itm.rooms} size={itm.size} propertyType={itm.propertyType} key={idx}/>
                })}
            </div>
    </div> );
}
 
export default Search;