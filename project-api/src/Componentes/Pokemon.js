import React, {useContext} from 'react'
import FavoriteContext from '../Contexto/FavoritePokemons'

//this page pokemon working together with pokedex!!!
//traning quite about that!!!

const Pokemon = (props) =>{
  const {favoritepokemons, updatingpokemons} = useContext(FavoriteContext)
  const {pokemon}= props
  return(
  <div className='pokemon-card'>
    <div className='pokemon-image-container'>
       <img src={pokemon.name} alt={pokemon.sprint.front_default}  className='pokemon-png' />
    </div> 
         
        <div className='card-body'>
           <div className='card-type'> 
               <h3>{pokemon.name}</h3>
             <div> # {pokemon.id}</div> 
           </div>
        
           <div className='card-button'>
               <div className='pokemon-type'>

               </div>
               <button>
                   
               </button>
           </div>
        
        
        
        
        
        
        </div>
      
  
  
  
  
  
  
  
  
  
  </div>)


}

export default Pokemon