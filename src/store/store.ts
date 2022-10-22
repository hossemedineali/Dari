import { z } from 'zod';
import create from 'zustand'
import { FilterInputType } from '../types/typeshelper';



type ModeState={
    mode:string;
    setmode:(text:string)=>void
}

type ShowFilterState={

    show:boolean;
    
    setShowFilter:(show:boolean)=>void
}

type authState={
    
    show:boolean,
    setToogleShow:(show:boolean)=>void,
    
}



const Useauth=create<authState>((set)=>({
    
    show:false,
    setToogleShow() {
        set((state)=>({
            ...state,
            show:!state.show
        }))
    },
    

}))






const useMode=create<ModeState>((set)=>({
    mode:'Sell',
    setmode(text) {
        set(()=>({
            mode:text

        }))
    },
}))



const useShowFilter=create<ShowFilterState>((set)=>({
    show:false,
  
    setShowFilter(show) {
        set(()=>({
            
            show

        }))
    },
}))





interface filterstate {
  
    municipality:string,
    
  
    setmunicipality:(value:string)=>void,
}

const usefilter =create<filterstate>((set)=>({
 
    municipality:''
    ,
    
    setmunicipality(value){
        set(()=>({
            municipality:value
        }))
    }
}))


interface Test {
    form:FilterInputType,
    setmunicipality:(value:string)=>void,
}

const usetest=create<Test>((set)=>({
    form:{

        governorate:'',
        municipality:'',
        propertyType:'',                 //  house or land
        announcementtype:'', // sell Rent Corental
        landtype:'',        //buildable land or farmland
        maxprice:0,
        minprice:0,
        pricePer:'',
    minrooms:0,
    maxrooms:0,
    minsize:0,
    maxsize:0,
    Garage: false,
    Balcony: false,
    OutdoorArea: false,
    SwimmingPool: false,
    UndercoverParking: false,
    airConditioning: false,
    solarPanels: false,
    SolarHotwater: false
},
setmunicipality(value:string){
    this.form.municipality=value,
    set(()=>({
     
    }))
}
    


}))


 export{  useMode,useShowFilter,usefilter,Useauth,usetest};