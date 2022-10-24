import { useRouter } from 'next/router'
import { useState } from 'react'
import { trpc } from '../../utils/trpc'

import Image from 'next/image'
const Post = () => {
   const router=useRouter()
   
   const id=Object.values(router.query)[0]
     const post =trpc.useQuery(['getpost.onepost',{id :id as string}])
   console.log('##############',post.data)
  

   console.log(router.query)
    return ( <div className='relative h-64  top-0 '>

        
           
            <div className=' h-[50vh] md:h-[80vh]  w-full md:w-full relative top-20'> 
                <Photos images={post.data?.images}/>
            </div>

            <div className='  md:w-2/6  mt-14 md:mt-10'> 
             <Info propertyType={post.data?.propertyType} announcementtype={post.data?.announcementtype} 
             governorate={post.data?.governorate} municipalities={post.data?.municipality} size={post.data?.size} 
             rooms={post.data?.rooms} price={post.data?.price} priceper={post.data?.pricePer}/>
            </div>
        

        <div className=' md:h-[85vh] h-[45vh] flex'>
           <div className='w-full '>Map</div>
        </div>
       
       
        <div className='w-full h-[50vh] '>
            Features
        </div>
        
    </div> );
}






const Photos:React.FC<{images:string|null|undefined}>=({images})=>{

    const photos=images?.split(',')
    const [currentPhoto,setcurrentPhoto]=useState(0)

    console.log(currentPhoto)

let url
    if(photos){
        url="https://res.cloudinary.com/dou8jjade/image/upload/v1665870510/"+photos[currentPhoto]+".jpg"

    }
    
    const forWard=()=>{

        if(photos){
            if(currentPhoto<photos.length-1){
                setcurrentPhoto(currentPhoto+1)
            }
            if(currentPhoto==photos.length-1){
                setcurrentPhoto(0)
            }
        }
    }

    const backWord=()=>{

        if(photos){
            if(currentPhoto>0){
                setcurrentPhoto(currentPhoto-1)
            }
            if(currentPhoto==0){
                setcurrentPhoto(photos.length-1)
            }
        }
    }


return <div className='w-full h-full  absolute '>

    {photos&& 
    <>
    <span className='absolute top-10 z-50 right-5 font-medium text-2xl' >{currentPhoto +1 }/{photos?.length}</span>
        <span onClick={backWord}  className='absolute top-[50%] z-50'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer hover:text-smallText">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </span>
 {  <Image  src={url as string} layout='fill' objectFit='fill' />     } 

        <span onClick={forWard} className='absolute top-[50%]  right-0'> 

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer hover:text-smallText">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

        </span>
    </>
        }
     </div>
}


type Info={
    propertyType:string |undefined,
    announcementtype:string |undefined,
    governorate:string |undefined,
    municipalities:string |undefined,
    size:number|undefined,
    rooms:number|undefined,
    price:number|undefined,
    priceper:string|undefined|null
}

const Info:React.FC<Info>=( {propertyType,announcementtype,governorate,municipalities,size,rooms ,price,priceper})=>{
    return(
        <div className='h-full  w-full md:pt-10 '>
            <div className=' h-10 '>

            </div>
            <p className='text-2xl'><span className='font-semibold' >{propertyType} For :</span> {announcementtype}</p>
            

            <div className='md:mt-6 text-xl flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <p> {governorate} {municipalities?.toLocaleLowerCase()!=governorate?.toLocaleLowerCase()?','+municipalities:''} </p>
                </div>

            <div className='flex md:block gap-4'>
           
               
               <div className='md:mt-6 text-xl flex gap-2'>
                <svg className="inline-block w-6 h-6 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path></svg>
                <p>{size} m2</p>
               </div>

               <div className='md:mt-6 text-xl flex gap-2 '>
               <svg className="w-6 h-6  fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
                <p>{rooms} rooms</p>
               </div>
            </div>

            <div className='md:mt-2'>
                <p className='text-2xl'>{price} Tnd{announcementtype=='Rent'?<span> {price?'/'+priceper:""}</span>:null}</p>
            </div>

        </div>
    )
}
 
export default Post;