import React from 'react'
import Pokemon from './Pokemon'
import Pagination from './Pagination'

const Pokedex = (props) =>{
  const {pokemons, page, loading, setPage, TotalPage} = props
   
  // left to stay in page!!!
  const onLeftHaling = () =>{
    if(page> 0){
     setPage(page-1)
    }
  }
  
  const onRightHaling = () =>{
   if(page+1 !== TotalPage){
       setPage(page+1)
   }
  }
 

  return(

  )
}


export default Pokedex