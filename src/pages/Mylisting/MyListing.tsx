import { trpc } from "../../utils/trpc";
import { useSession } from "next-auth/react"


const Listing = () => {

    const session=useSession()
    console.log(session)
    return ( <div>

    </div> );
}
 
export default Listing;