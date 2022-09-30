
import Navbar from "./navbar";

const Layout : React.FC= ({children}:any) => {
    return ( 
        <>
        <Navbar/>
            {children}
        </>
        
     );
}
 
export default Layout;