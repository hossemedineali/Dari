
import {motion,useAnimation,useDragControls} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import OneCard from './onecard';

const posts=[1,2,3,4,5,6]


const CardCarrousel = () => {

  const controle=useDragControls()

const [width, setwidth] = useState(0)
const carosel = useRef() as React.MutableRefObject<HTMLInputElement>;


const [x,setx]=useState(0)
const [size,setsize]=useState(0)



console.log('X ::',x)


const hundelprevclick=()=>{


  if(Math.abs(x)<=0){
    return
  }else{

    console.log('carosel.current.offsetWidth',carosel.current.offsetWidth,'carosel.current.scrollWidth',carosel.current.scrollWidth)
    setx(x=>x+300)
  }
  
   
}

const hundelnextclick=()=>{

 if(Math.abs(x)>size){
  return
 }

 
    console.log('carosel.current.offsetWidth',carosel.current.offsetWidth,'carosel.current.scrollWidth',carosel.current.scrollWidth)
    setx(x=>x-300)
   
 
  }

  function startDrag(event:any) {
    controle.start(event, { snapToCursor: true })
  }

  




  useEffect(()=>{

    setsize(carosel.current.scrollWidth-carosel.current.offsetWidth )
    console.log('size!!:',size)

    console.log('calc !!!!', carosel.current.scrollWidth-carosel.current.offsetWidth +200)  

    console.log('carosel.current.offsetWidth',carosel.current.offsetWidth,'carosel.current.scrollWidth',carosel.current.scrollWidth)
    setwidth(carosel.current.scrollWidth -carosel.current.offsetWidth)
  },[])



  return (
    <div className='w-full flex '>

<button className=' rounded-lg bg-devider hidden md:block' onClick={hundelprevclick}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
</button>

     <motion.div whileTap={{cursor:'grabbing'}} ref={carosel} className=' gap-4  cursor-grab overflow-hidden w-full'> {/* carousel */}
                
                {/* inner-carrousel */}  
      <motion.div  drag="x" dragConstraints={{right:0,left:-width}} dragControls={controle} className='flex  gap-4 ' >                           


      
          
         {posts.map((item,idex)=>{
           return(
            <motion.div transition={{duration:1}} animate={{x}} key={idex} whileHover={{scale: 1.1,cursor:'pointer'}} className=' w-[250px] '>  {/*  item  */}
         
          <OneCard/>
          </motion.div>
          )
        }) }

      </motion.div>
      
  </motion.div>
      <button className=' rounded-lg bg-devider hidden md:block' onClick={hundelnextclick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-full ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</button>
        </div>
   );
}
 
export default CardCarrousel;












/*         
        
        
const CardCarrousel = () => {


            return (
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
              );
        }
        
        export default CardCarrousel; */