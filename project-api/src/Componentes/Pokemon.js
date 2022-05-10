import React, {useState,useContext} from 'react'

const Pokemon = (props) =>{
   
  const {pokemon}= props
 
  return(
  <div className='pokemon-card'>
    <div className='pokemon-image-container'>
    <img src={pokemon.name} alt={pokemon.sprint.front_default}  />
    </div> 
      
  
  
  
  
  
  
  
  
  
  
  </div>)


}

export default Pokemon