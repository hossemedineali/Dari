// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_Firebase_API_Key,
    authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
    projectId: process.env.NEXT_PUBLIC_Project_Id,
    storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
    messagingSenderId: process.env.NEXT_PUBLIC_Message_Sender_Id,
    appId: process.env.NEXT_PUBLIC_App_Id,
    measurementId: process.env.NEXT_PUBLIC_MEASURMENT_ID,
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default  app
export const auth=getAuth(app)
//const analytics = getAnalytics(app);