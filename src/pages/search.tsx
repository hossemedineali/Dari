import { usefilter } from "../store/store";

import Select from "react-select";

import {groupedcities,filterOption} from '../utils/cities'


//type GreetFunction = ({label,value},string:string) => boolean;









const Search = () => {



 

    const filter =usefilter()

    return ( <div className="relative lef-1/3 top-32">
        <Select 
            instanceId=" municipalities"
            id=" municipalities"
            options={groupedcities}
            filterOption={filterOption}
            onChange={(e)=>{console.log(e)}}
        />
    </div> );
}
 
export default Search;