import React, {useState} from 'react'

const SearchBar = (props) =>{
    const[search, setsearch] = useState("dito")
    const {onSearch} = props ;
    
    //inside onhandlingchange i passed e to later get value element!!!
    const OnHandlingChange = (e) => {
      setsearch(e.target.value)
      if(e.target.value === 0){
        onSearch(undefined)
      }
    }

    const OnHandlingButton = () => {
        onSearch(search)
    }

 return(
     <div className='searchbar-container'>
             <div className='searchbar'>
              <input placeholder='search-pokemon' onChange={OnHandlingChange} />
             </div>
             <div>
              <button onClick={OnHandlingButton}> Search! </button>
             </div>
     </div>)
}

export default SearchBar