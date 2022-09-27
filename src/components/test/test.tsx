
import {trpc} from "../../utils/trpc";




const Test = () => {

    const adduser=trpc.useMutation(["authadduser"])


    const add=async()=>{
    const add= await  adduser.mutate({
        first_name:'hossem',
        lastname:'ali',
        phone:12
        })

        if(adduser.data?.message=='OK!!'){
            console.log('OK#######',adduser.data)
        }
       else{
        console.log('NOT#####OK#######',adduser.data);
        
       }
        //console.log('response form test add user',add1)

       
    }

            return ( <>
            <h3>add user </h3>
            <button onClick={add}>click to add user add user</button>
            </> );
        }
        
        export default Test;