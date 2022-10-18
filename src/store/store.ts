import create from 'zustand'

type ModeState={
    mode:string;
    setmode:(text:string)=>void
}

type ShowFilterState={

    showMobile:boolean;
    showDesktop:boolean;
    setShowFilter:(mobile:boolean,desktop:boolean)=>void
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
    mode:'Buy',
    setmode(text) {
        set(()=>({
            mode:text

        }))
    },
}))



const useShowFilter=create<ShowFilterState>((set)=>({
    showMobile:false,
    showDesktop:false,
    setShowFilter(mobile,desktop) {
        set(()=>({
            
            showDesktop:desktop,showMobile:mobile

        }))
    },
}))



/* interface filterstate {
    form:{

        municipality?:string,
        type?:string
        governorate?:string,
        posttype?:string,
        price?:{
            gt?:number,
            lt?:number
        },
        rooms?:{
            gt?:number,
        lt?:number
    },
   
    size?:{
        gt?:number
    },
    Garage?: boolean,
    Balcony?: boolean,
    OutdoorArea?: boolean,
    SwimmingPool?: boolean,
    UndercoverParking?: boolean,
    airConditioning?: boolean,
    solarPanels?: boolean,
    SolarHotwater?: boolean,
 },
    
    setstate:(value:unknown)=>void,
}

const usefilter =create<filterstate>((set)=>({
    form:{},
    
    setstate(value) {
        set(()=>({
               
        form:value
        }))
    },
})) */



 export{  useMode,useShowFilter,Useauth};