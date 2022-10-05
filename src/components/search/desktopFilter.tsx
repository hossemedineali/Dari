import { useShowFilter } from "../../store/store";
import FilterInput from "./filterinput";

const DesktopFilter = () => {
    const showFilter=useShowFilter()
    return (
        <div className="hidden md:block absolute z-10 w-full top-2 right-0">
            <div className="lg:w-3/5 w-4/5  text-center border rounded-2xl bg-white m-auto">
            
            <svg 
                onClick={()=>showFilter.setShowFilter(false,false)}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <div style={{height:'420px'}} className="overflow-y-auto ">
            <FilterInput/>

            </div>

            <div className="flex h-12 w-full justify-between  rounded-2xl bg-primary2 px-8">
                <h2>Clear filters</h2>
                <button>Search</button>
            </div>

            </div>

        </div>
         );
}
 
export default DesktopFilter;