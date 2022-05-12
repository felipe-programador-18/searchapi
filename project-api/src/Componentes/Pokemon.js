import React, {useContext} from 'react'
import FavoriteContext from '../Contexto/FavoritePokemons'

//this page pokemon working together with pokedex!!!
//traning quite about that!!!
//remember is name (types,name count) i always get api practice about that!
const Pokemon = (props) =>{
  const {favoritepokemons, updatingpokemons} = useContext(FavoriteContext)
  const {pokemon}= props
  const heart = favoritepokemons.includes(pokemon.name) ? "💛" : "🖤"
  
  const onHanldingPokemon = () =>{
    updatingpokemons(pokemon.name)
  }


  return(
  <div className='pokemon-card'>
    <div className='pokemon-image-container'>
       <img alt={pokemon.name} src={pokemon.sprites.front_default}  className='pokemon-png' />
    </div> 
         
        <div className='card-body'>
           <div className='card-type'> 
               <h3>{pokemon.name}</h3>
             <div> #{pokemon.id}</div> 
           </div>
      
           <div className='card-button'>
               <div className='pokemon-type'>
                {pokemon.types.map((type, index) => 
                { return <div className='pokemon-type-test' key={index}>
                     {type.type.name}
                </div>
                })}
               </div>
               <button className='pokemon-heart-btn' onClick={onHanldingPokemon}>
                   {heart}
               </button>
           </div>
        </div> 
  </div>)


}

export default Pokemon