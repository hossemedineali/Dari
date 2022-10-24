
import Head from "next/head";

import Searchwrapper from "../components/search/searchwrapper";

import { NextPageWithLayout } from "./_app";


import CardCarrousel from "../components/ui/cardcarrousel";

import hero2 from '../../public/hero2.png'
import { useState } from "react";
import Loader from "../components/loader/loader";









const Home: NextPageWithLayout = () => {

  const [IsLoading, setIsLoading] = useState(false)

  

  return (
    <>
      <Head>
        <title>Dari</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
     
        
<main className="  flex flex-col  relative top-24 md:px-3 lg:px:6 ">
<h1 className="m-auto font-mono">Finding your next home , never been easier!</h1>


<div style={{
      backgroundImage: `url(${hero2.src})`,
      backgroundSize:'contain' ,
       backgroundPosition: 'center', 
       backgroundRepeat:'no-repeat'
    }}    className="mt-0 h-[80vh] w-full flex justify-center">

 
    <Searchwrapper/>
  
</div>



{IsLoading&&<div className=" px-auto">
  <Loader/>
  </div>}

  
{!IsLoading&&<div className="flex justify-center  md:w-[96vw] w-[93vw] ">
  <CardCarrousel setIsLoading={setIsLoading} title="properties for sell :" type={'Sell'} />
</div>} 



{!IsLoading&&<div className="flex justify-center  md:w-[96vw] w-[93vw] ">
  <CardCarrousel setIsLoading={setIsLoading} title="properties for Rent :" type={'Rent'} />
</div> }



{!IsLoading&&<div className="flex justify-center  md:w-[96vw] w-[93vw] ">
  <CardCarrousel setIsLoading={setIsLoading} title="Poeoples looking fo CoRental :" type={'CoRental'} />
</div> }

 
</main>
      
      
    </>
  );
};

export default  Home;

