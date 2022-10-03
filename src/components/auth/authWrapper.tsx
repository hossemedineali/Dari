import { Useauth } from "../../store/store";
import LogIn from "./login";
import SignUp from "./Signup";





const AuthWrapper = () => {

    const auth=Useauth()

    console.log('auth wrapper mount')
    return ( 
    <div
    
     className="  absolute mt-2 mb-4 top-14  w-full  flex justify-center text-center  backdrop-sepia z-20 ">
        <div className="  p-4  bg-white   shadow-2xl h-full border rounded-lg   flex  top-24 justify-center   md:m-0  w-full mx-2 z-30 md:w-96  text-center ">
            <svg 
            onClick={()=>auth.setToogleShow(false)}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            {auth.mode=='signup'&&<SignUp/>}
            {auth.mode=='login'&&<LogIn/>}

        

        </div>
    </div> );
}
 
export default AuthWrapper;