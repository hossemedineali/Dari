
import { useRef } from "react";
import { Useauth } from "../../store/store";




const signup = () => {



    const firstNameInput=useRef<HTMLInputElement>(null)

    const handelsubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        

        const phone=Number()

        console.log('phone',phone ,'type',typeof(phone))
    }
    const auth=Useauth()




    
    return ( 
      <div className="w-full flex flex-col gap-3 relative">
      <h1 className="text-center">Create account </h1>
   
      <form
      onSubmit={(e)=>(e)}
      >
        
         {/* First NAme */}
         <div className="flex  flex-col  leading-3">
  
         <label htmlFor="firstName" className="text-left">First Name </label><br/>
         <input type='text' id="firstName" name="firstName"  placeholder="Enter you first name  " pattern="[0-9]{8}" required
         className="w-full px-4 border rounded-md  h-8 "/>


         
         </div>
          
          <div className="border-b-2 border-devider  my-2"></div>
  
  
                           {/* Last Name Input */}
  
          <div className="flex  flex-col leading-3">
  
           <label htmlFor="lastName" className="text-left">Last Name </label><br/>
           <input type='text' id="lastName" name="lastName"  placeholder="Enter you last name  " pattern="[0-9]{8}" required
           className="w-full px-4 border rounded-md h-8 "/>
           </div>
           <div className="border-b-2 border-devider  my-2"></div>
  
                           {/* Email Name Input */}
  
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
  
  
                            {/* Confirm Password Input */}
  
                            <div className="flex  flex-col leading-3">
  
            <label htmlFor="email" className="text-left">Confirm password  </label><br/>
            <input type='text' id="email" name="email"  placeholder="Enter you Email  " pattern="[0-9]{8}" required
            className="w-full px-4 border rounded-md h-8 "/>
            </div>
            <div className="border-b-2 border-devider  my-2"></div>
  
  
  
  
  
          <button className="text-center flex mx-auto p-1 rounded-md bg-secondary1">Login</button>
  
      </form>
      <div className="flex gap-4">
      <h5>have an account </h5>
      <button  onClick={()=>auth.setMode('login')}  className="text-smallText underline underline-offset-2">login</button>
  
      </div>
  </div>
     );
}
 
export default signup;









