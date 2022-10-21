import create from 'zustand'
import {Filter} from '../types/typeshelper'



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
    mode:'Sell',
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





interface filterstate {
    form:Filter,
    municipality:string,
    
    setsform:(key:string,value:Filter)=>void,
    setmunicipality:(value:string)=>void,
}

const usefilter =create<filterstate>((set)=>({
    form:{municipality:''},
    municipality:''
    ,
    setsform(key,value) {
        set((prev)=>({
               ...prev,
               form:value
        }))
    },
    setmunicipality(value){
        set(()=>({
            municipality:value
        }))
    }
}))



 export{  useMode,useShowFilter,Useauth,usefilter};