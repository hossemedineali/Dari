
import { signIn } from "next-auth/react"
import {  Useauth } from "../../store/store";

const SigninModal = () => {

    const auth=Useauth()
    return ( 
        <div className=" absolute z-10 w-full  h-24 top-28 right-0 backdrop backdrop-grayscale">

            <div className="lg:w-1/5 md:w-2/5  w-4/5 h-full gap-4  text-center border rounded-lg bg-primary2 m-auto">
                <svg onClick={()=>auth.setToogleShow(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

               
                <h1>Please signin to add a post !</h1>

                    <div className="flex  justify-evenly mt-2">

                <button className="py-1 px-3 mr-2  bg-red rounded-lg" onClick={()=>auth.setToogleShow(false)} >Cancel</button>
                <button className="py-1 px-3 mr-2  bg-secondary2 rounded-lg" onClick={()=>signIn()} >signin</button>
                    </div>

            </div>
        </div>
    
        );
}
 
export default SigninModal;