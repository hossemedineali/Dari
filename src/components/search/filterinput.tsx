

import {useMode} from "../../store/store";


const FilterInput  = () => {
   
    const mode=useMode();


   

    console.log('mode::: ',mode.mode)

    const changemode=(e:string)=>{
        console.log(e)
        mode.setmode(e)
    }
    
    return ( 
    <div className=" drop-shadow-2xl relative mt-2 mb-4  ">

        <div className="flex flex-wrap ">
            <h3 onClick={()=>changemode('Buy')} id='Buy' className={`${mode.mode=='Buy'?'border-red':'border-black'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` } >Buy</h3>
            <h3 onClick={()=>changemode('Rent')} id='Rent' className={`${mode.mode=='Rent'?'border-red':'border-black'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer`  }>Rent</h3>
            <h3 onClick={()=>changemode('CoRental')}  className={`${mode.mode=='CoRental'?'border-red':'border-black'}  w-1/3 text-center py-2 border-b-2 transition ease-in-out duration-1150 cursor-pointer` }>CoRental</h3>
        </div>


    {/* Price filter */}
        <div className="px-4 py-8 border-b">
            <label>Price</label>
            <div className="flex justify-between mt-2">
                <input type='number'  placeholder="Min" className="border rounded-md w-2/5 "/>
                <input type='number' placeholder="Max" className="border rounded-md px-1 w-2/5"/>
            </div>
            
        </div>

        {/* Bed rooms filter */}
        <div className="px-4 py-8 border-b">
            <label>Bedrooms</label>
            <div className="flex justify-between mt-2">
                <input type='number'  placeholder="Min" className="border rounded-md px-1 w-2/5"/>
                <input type='number' placeholder="Max" className="border rounded-md px-1 w-2/5"/>
            </div>
            
        </div>

        {/* Land size filter */}

        <div className="px-4 py-8 border-b">
            <label>Land size</label>
           
            <div className="flex justify-between mt-2 border rounded h-8">
                <select style={{width:'100%'}}>
                    <option  value='any'> Any</option>
                    <option  value='50'> +  50  m2</option>
                    <option  value='100'> +  100 m2</option>
                    <option  value='150'> + 150 m2</option>
                    <option  value='200'> + 200 m2</option>
                    <option  value='300'> + 300 m2</option>
                    <option  value='400'> + 400 m2</option>
                    <option  value='500'> + 500 m2</option>
                    <option  value='1000'> + 1000 m2</option>
                    
                </select>
            </div>
            
        </div>

        {/* Outdoor features filter */}
        <div className=" px-8 py-8 border-b">
            <label>Outdoor features</label> <br/>
            
                <div className=" flex">
                <input type='checkbox' id='Garage' name='Garage' value='Garage' className="mr-4 "/>
                <label htmlFor='Garage' >Garage</label> <br/>
                </div>

                <div className=" flex">
                <input type='checkbox' id='Balcony' name='Balcony' value='Balcony' className="mr-4 "/>
                <label htmlFor='Balcony' >Balcony</label> <br/>
                </div>


                <div className=" flex">
                <input type='checkbox' id='Outdoor area' name='Outdoor area' value='Outdoor area' className="mr-4 "/>
                <label htmlFor='Outdoor area' >Outdoor area</label> <br/>
                </div>

                <div className=" flex">
                <input type='checkbox' id='Swimming pool' name='Swimming pool' value='Swimming pool' className="mr-4 "/>
                <label htmlFor='Swimming pool' >Swimming pool</label> <br/>
                </div>

                <div className=" flex">
                <input type='checkbox' id='Undercover parking' name='Undercover parking' value='Undercover parking' className="mr-4 "/>
                <label htmlFor='Undercover parking' >Undercover parking</label> <br/>
                </div>
        </div>

             {/* Climate control & energy filter */}

        <div className=" px-8 py-8 border-b">
            <label>Climate control & energy</label> <br/>
            
                <div className=" flex">
                <input type='checkbox' id='Air conditioning' name='Air conditioning' value='Air conditioning' className="mr-4 "/>
                <label htmlFor='Garage' >Air conditioning</label> <br/>
                </div>

                <div className=" flex">
                <input type='checkbox' id='Solar panels' name='Solar panels' value='Solar panels' className="mr-4 "/>
                <label htmlFor='Solar panels' >Solar panels</label> <br/>
                </div>


                <div className=" flex">
                <input type='checkbox' id='Solar hot water' name='Solar hot water' value='Solar hot water' className="mr-4 "/>
                <label htmlFor='Solar hot water' >Solar hot water</label> <br/>
                </div>
        </div>

        {/* Keywords filter */}
        <div className="px-4 py-8  ">
            <label>Keywords</label>
            <div className="flex justify-between mt-2">
                <input type='text'  placeholder="Keywords" className="border h-16 w-full rounded-md "/>
            </div>
            
        </div>

        <div className="h-10 md:hidden">

        </div>
        

    </div> );
}
 
export default FilterInput;