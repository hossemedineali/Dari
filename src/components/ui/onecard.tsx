import Link from 'next/link'
import {motion} from 'framer-motion'

import Tooltip from '../layout/tooltip'

import { trpc } from '../../utils/trpc'
import { useLikedPosts } from '../../store/fav'
import Image from 'next/image'
import { Useauth } from '../../store/store'
import { useSession } from 'next-auth/react'

import ReactTimeAgo from 'react-time-ago'
import TimeAgo  from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import fr from 'javascript-time-ago/locale/fr.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(fr)

export interface data{
    id: string,
    images:string,
    announcementtype: string
    price:number,
    pricePer:string,
    governorate: string,
    municipality:string,
    rooms:number,
    size:number,
    propertyType:string,
    date:Date
  }


const OneCard:React.FC<data> = (item) => {

    const addToFav=trpc.useMutation(['ManageFavPosts.add'])
    const DeleteFromFav=trpc.useMutation(['ManageFavPosts.delete'])
    const auth=Useauth()
    const session=useSession()

    const favorites=useLikedPosts()


    
  const date=new Date(item.date as Date)


    function capitalizeFirstLetter(string :string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

   
    
    
    
let url=''
    if(item.images.length>1){
        const image=item.images.split(',')
         url="https://res.cloudinary.com/dou8jjade/image/upload/v1665870510/"+image[0]+".jpg"
    }

        const addPostToFavorites=(id:string)=>{
            
           addToFav.mutate({postid:id})
           favorites.addPost(id)
        }

        const removePostFromFavorites=(id:string)=>{
            DeleteFromFav.mutate({postid:id})
            favorites.deletePost(id)
        }

        const hundelFavorites=(id:string)=>{
            if(session.status=='authenticated'){

                
                if(favorites.liked.includes(id)){
                    removePostFromFavorites(id)
                }else{
                    addPostToFavorites(id)
                }
            }else{
                auth.setToogleShow(true)
            }
          
        }

       
        

   
    return (
       
  <motion.div  whileHover={{translateY:-10}} className="relative md:mr-2 w-[80vw] sm:w-[80vw] md:w-[350px] mb-4  ">
	  <div className="shadow  rounded-lg bg-white ">
		<div className="flex justify-center relative rounded-lg  ">
		



          <div className='w-full h-[340px]'>
          {  <Image  src={url as string} layout='fill' objectFit='fill' alt='image' />     } 
          </div>

          <span onClick={()=>{hundelFavorites(item.id)}} className=' absolute  top-0 right-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg   text-sm font-medium text-white  select-none'>
          <Tooltip text='add to favorites' >

          <svg xmlns="http://www.w3.org/2000/svg" fill={favorites.liked.includes(item.id)?'red':'transparent'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer  w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </Tooltip>

		  </span>

		  <div className="absolute flex justify-center bottom-4  mb-3">
			<div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
			 
              <p className="flex items-center font-medium text-gray-800">
				<svg className="w-5 h-5  fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
				{item.rooms}
			  </p>

			  <p className="flex items-center font-medium text-gray-800">
              <svg className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path></svg>
              {item.size} m2
			  </p>

			</div>
		  </div>

		 
		</div>


        <div className="flex cursor-pointer px-2 h-28 md:cursor-auto justify-between">

            <div className="mt-4">
                <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">{capitalizeFirstLetter(item.propertyType)}</h2>
                <div className='flex gap-1'>
                <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" >
                    For {item.announcementtype} 
                </h2>
        <Link href={'/Posts/'+item.id} className="cursor-pointer relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full h-full">
                    <motion.svg whileHover={{scale:1.2}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</motion.svg>
	   </Link>
      </div>
                <p className="mt-2  text-sm text-gray-800 line-clamp-1  " >
                    {item.municipality} 
                </p>
            </div>
            <div className="mt-4 pr-1  flex justify-between flex-col">
                <p className='text-red'> {item.price} <span className='text-xs '>Tnd</span> {item.announcementtype=='Rent'&& item.pricePer&& <span className='text-black'>/{item.pricePer}</span>} </p>
               <ReactTimeAgo date={date} locale="en-US" className='mb-2'/>
            </div>



        </div>
       

		


	  </div>
  </motion.div>

 




    )}
 
export default OneCard;















/* 
const OneCard = () => {
        return ( <div>

<div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
            <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="bg-cover bg-center h-56 p-4" style={{backgroundImage: `url({https://via.placeholder.com/450x450})`}}>
                        <div className="flex justify-end">
                            <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Detached house ??? 5y old</p>
                        <p className="text-3xl text-gray-900">$750,000</p>
                        <p className="text-gray-700">742 Evergreen Terrace</p>
                    </div>
                    <div className="flex p-4 border-t border-gray-300 text-gray-700">
                        <div className="flex-1 inline-flex items-center">
                            <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                            </svg>
                            <p><span className="text-gray-900 font-bold">3</span> Bedrooms</p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                            </svg>
                            <p><span className="text-gray-900 font-bold">2</span> Bathrooms</p>
                        </div>
                    </div>
                    <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                        <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
                        <div className="flex items-center pt-2">
                            <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{backgroundImage: `url({https://via.placeholder.com/50x50})`}}>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Catherine Heffner</p>
                                <p className="text-sm text-gray-700">(111) 111-1111</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div> );
    }
    
    export default OneCard;







 */