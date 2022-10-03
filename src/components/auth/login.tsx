
import { useRef } from "react";
import { Useauth } from "../../store/store";




const LogIn = () => {

    const phoneInput=useRef<HTMLInputElement>(null)

    const handelsubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        

        const phone=Number(phoneInput.current?.value)

        console.log('phone',phone ,'type',typeof(phone))
    }
    const auth=Useauth()




    
    return ( 
        <div className="w-full flex flex-col gap-3">
         <h1 className="text-center">Log In </h1>
         <form
         onSubmit={(e)=>handelsubmit(e)}
         >
           
            
          
           <div className="flex  flex-col leading-3">
  
           <label htmlFor="email" className="text-left">Email  </label><br/>
           <input type='text' id="email" name="email"  placeholder="Enter you Email  " pattern="[0-9]{8}" required
           className="w-full px-4 border rounded-md h-8 "/>
           </div>
           <div className="border-b-2 border-devider  my-2"></div>
  
  
                            {/* Password Input */}
  
                            <div className="flex  flex-col leading-3">
  
            <label htmlFor="email" className="text-left">PassWord  </label><br/>
            <input type='text' id="email" name="email"  placeholder="Enter you Email  " pattern="[0-9]{8}" required
            className="w-full px-4 border rounded-md h-8 "/>
            </div>
            <div className="border-b-2 border-devider  my-2"></div>

             <button className="text-center flex mx-auto p-1 rounded-md bg-secondary1">Login</button>

         </form>
         <div className="flex gap-4">
         <h5>Don t have an account </h5>
         <button onClick={()=>auth.setMode('signup')} className="text-smallText underline underline-offset-2">Sign up</button>

         </div>
    </div>
     );
}
 
export default LogIn;