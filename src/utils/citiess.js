import {cities} from './cities'

let opt=[]

Object.keys(cities).forEach((key)=>{
    opt.push({lebel:key,options:cities[key]})
   })




    const filterOption = ({ label, value }, string) => {
    // default search
    if (label.includes(string) || value.includes(string)) return true;
  
    // check if a group as the filter string as label
    /* const groupOptions = opt.filter((group) =>
      group.label.toLocaleLowerCase().includes(string)
    ); */
  
    if (opt) {
      for (const groupOption of opt) {
        // Check if current option is in group
        const option = groupOption.options.find((opt) => opt.value === value);
        if (option) {
          return true;
        }
      }
    }
    return false;
  };



   export  {opt,filterOption}

