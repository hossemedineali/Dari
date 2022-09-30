
import Head from "next/head";

//import Navbar from "../components/layout/navbar";
import Searchwrapper from "../components/search/searchwrapper";

//import { trpc } from "../utils/trpc";
import { NextPageWithLayout } from "./_app";




const Home: NextPageWithLayout = () => {

  console.log('index page rerendered')
 // const hello = trpc.useQuery(["auth.getSecretMessage"]);

  return (
    <>
      <Head>
        <title>Dari</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
     
        
<main className="container mx-auto flex flex-col items-center   p-4">
<div className="mt-24 w-full flex justify-center">

    <Searchwrapper/>
</div>

 
</main>
      
      
    </>
  );
};

export default Home;

