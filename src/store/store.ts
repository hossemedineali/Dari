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



 export{  useMode,useShowFilter};