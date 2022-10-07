import {governorates} from '../utils/cities'



import Select from "react-select";






const test = () => {
    const handleChange = (option: unknown | null  ):void => {
        console.log(option);
      };
      
return(

    <div >
   
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Select
      isMulti={false}
      options={governorates}
      
      onChange={handleChange}
      />
  </div>
      )
};

export default test