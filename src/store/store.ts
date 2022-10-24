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


interface Form {
    form:FilterInputType,
    setmunicipality:(value:string)=>void,
    setannouncementtype:(value:string)=>void,
    setform:(value:FilterInputType)=>void
}

const useFormInput=create<Form>((set)=>({
    form:{

        governorate:'',
        municipality:'',
        propertyType:'',                 //  house or land
        announcementtype:'Sell', // sell Rent Corental
        landtype:'',        //buildable land or farmland
        maxprice:null,
        minprice:null,
        pricePer:'',
    minrooms:null,
    maxrooms:null,
    minsize:null,
    maxsize:null,
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
},

setannouncementtype(value:string){
    this.form.announcementtype=value,
    set(()=>({
     
    }))
},

setform(value:FilterInputType){
    this.form=value
}



    


}))


 export{  useMode,useShowFilter,Useauth,useFormInput};