import { usefilter } from "../store/store";





const Search = () => {


    const filter =usefilter()

    
 


    return ( <div className="relative lef-1/3 top-32">
            <h1>Search page : selected municipality is {filter.municipality}</h1>
    </div> );
}
 
export default Search;