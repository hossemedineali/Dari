import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Useauth } from "../../store/store";
import React from "react";

const schema = z.object({
    firstName:z.string()
            .min(1,{message:'filed required'})
            .min(4,{message:'first name must be longer than 4 charachters'})
            .max(10,{message:'First name must be less than 10 charachters'}),
    lastName:z.string()
            .min(1,{message:'filed required'})
            .min(4,{message:'first name must be longer than 4 charachters'})
            .max(10,{message:'First name must be less than 10 charachters'}),
    email:z.string()
            .min(1,{message:'filed required'})
            .email({message:'please enter a valid email'}),
    password:z.string()
            .min(1,{message:'filed required'})
            .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,{message:'Minimum eight characters, at least one letter and one number:'}),
    confpassword:z.string()
            .min(1,{message:'filed required'})


}).refine((data) => data.password === data.confpassword, {
  message: "Passwords don't match",
  path: ["confpassword"]
})




type Schema = z.infer<typeof schema>;

const Signup= () => {


  

    const auth=Useauth()


  const { register, handleSubmit ,formState:{errors}} = useForm<Schema>({
    resolver: zodResolver(schema)
  });



  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col gap-3 relative ">
    <h1 className="text-center">Create account </h1>
 
    <form
    onSubmit={handleSubmit(onSubmit)} 
    >
      
       {/* First NAme */}
       <div className="flex  flex-col  leading-3">

       <label htmlFor="firstName" className="text-left">First Name </label><br/>
              <input {...register("firstName", {required:true,})} type='text'  id="firstName" name="firstName"  placeholder="Enter you first name" 
       className="w-full px-4 border rounded-md  h-8 "/>
          {errors.firstName?.message&&<p className="text-red text-start mt-1">{errors.firstName?.message}</p>}

       
       </div>
        
        <div className="border-b-2 border-devider  my-2"></div>


                         {/* Last Name Input */}

        <div className="flex  flex-col leading-3">

         <label htmlFor="lastName" className="text-left">Last Name </label><br/>
         <input {...register("lastName")} type='text' id="lastName" name="lastName"  placeholder="Enter you last name  "  
         className="w-full px-4 border rounded-md h-8 "/>
         {errors.lastName?.message&&<p className="text-red text-start mt-1">{errors.lastName.message}</p>}
         </div>
         <div className="border-b-2 border-devider  my-2"></div>

                         {/* Email Name Input */}

         <div className="flex  flex-col leading-3">

         <label htmlFor="email" className="text-left">Email  </label><br/>
         <input {...register("email")} type='text' id="email" name="email"  placeholder="Enter you Email  "  
         className="w-full px-4 border rounded-md h-8 "/>
         {errors.email?.message&&<p className="text-red text-start mt-1">{errors.email.message}</p>}
         </div>
         <div className="border-b-2 border-devider  my-2"></div>


                          {/* Password Input */}

                          <div className="flex  flex-col leading-3">

        
       <label htmlFor="password" className="text-left">Password </label><br/>
              <input {...register("password", {required:true,})} type='text'  id="password" name="password"  placeholder="Enter you first name" 
       className="w-full px-4 border rounded-md  h-8 "/>
          {errors.password?.message&&<p className="text-red text-start mt-1">{errors.password?.message}</p>}
          </div>
          <div className="border-b-2 border-devider  my-2"></div>


                          {/* Confirm Password Input */}

                          <div className="flex  flex-col leading-3">

          <label htmlFor="confpassword" className="text-left">Confirm password  </label><br/>
          <input 
          {...register("confpassword")}
          type='text' id="confpassword" name="confpassword"  placeholder=" confirm your password  "  
          className="w-full px-4 border rounded-md h-8 "/>
          {errors.confpassword?.message&&<p className="text-red text-start mt-1">{errors.confpassword.message}</p>}
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
};

export default Signup;
