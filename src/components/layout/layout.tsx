
import Navbar from "./navbar";

const Layout = ({children}:any) => {
    return ( 
        <>
        <Navbar/>
            {children}
        </>
        
     );
}
 
export default Layout;