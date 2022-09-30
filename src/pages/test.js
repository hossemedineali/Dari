import App from '../../firebaseConfig'
import firebase from 'firebase/app'
import { getAuth,RecaptchaVerifier } from "firebase/auth";

//import { auth } from "../../firebaseConfig";


import 'firebase/auth';



const auth=getAuth()

const Test = () => {

    if (typeof window !== "undefined") {

       
        // browser code

        

    
        window.recaptchaVerifier= new RecaptchaVerifier('recaptcha-container',{
            
            'size': 'normal',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
              
              console.log(response)
            },
            'expired-callback': (response) => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
              
            }
          },getAuth());

          window.recaptchaVerifier.render().then(function(widgetId) {
            window.recaptchaWidgetId = widgetId;
          });
          
      }





    return (  
      <>
    <h1 className="h-screen mt-10">Test page</h1>
    <h3>hheeh</h3>
      <div id='recaptcha-container' className='bg-primary1'></div>
      </>
    );
}
 
export default Test;