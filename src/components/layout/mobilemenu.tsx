import { motion } from "framer-motion"

const links=[
    'Buy','Sell','Find coRental'
  ]


const MobileMenu = () => {


    return (
        <div className="z-20 absolute top-16 left-0  h-screen  bg-primary1 " >
        <motion.aside
             initial={{ width: 0 }} 
             animate={{ width: 300 }}
             exit={{width:0}}
             transition={{easeInOut: [0.17]}}
            >

            <ul className="p-16 flex flex-col gap-5">
                {links.map((link,index)=>(<>
                    <li key={links[index]} className='cursor-pointer hover:text-secondary2'> {links[index]}</li>
                    
                </>
                    ))}
            </ul>
                    </motion.aside>
    </div> 
            
    );
}
 
export default MobileMenu;






