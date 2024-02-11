import { useEffect, useRef, useState } from "react";
import "./search-input.css"

const SearchComponent = ({setFilteredUsers, users,setInputValue}) => {
    const [input, setInput] = useState();

    const handleChange = (value) => {
        // var regex = /^[A-Za-z][A-Za-z]*[\s][A-Za-z\s]+$/;

        setInputValue(value)
       
            const filteredData =  users.filter((user) => user.name && (user.name.toLowerCase().localeCompare(value.toLowerCase()) == 0));
            if(filteredData.length>0){
                filteredData.sort(function(usera, userb){
                    return usera.followers > userb.followers ? 1 : -1;
                  })
                setFilteredUsers(filteredData)
            }else {
                setFilteredUsers([])
            }
        
       
    }
 

    return (
        <div className="input-wrapper">
            <input 
                type="text"
                placeholder="type to search here..." 
                value={input} 
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>  
    )
}


export default SearchComponent