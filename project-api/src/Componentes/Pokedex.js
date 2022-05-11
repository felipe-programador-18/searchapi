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
  // very interesting to make pagination!!
  const onRightHaling = () =>{
   if(page+1 !== TotalPage){
       setPage(page+1)
   }
  }
 

  return( <div>
            <div className='pokedex-header'>
                <h1>Pokedex:😎</h1>
                <Pagination
                  page={page+1}
                  TotalPage= {TotalPage}
                  onLeftClick={onLeftHaling}
                  onRightClick ={onRightHaling}
                />

              <div>
               {loading ? (<div>Loading Page ....</div> ):
                  (<div className='pokedex-grid'>
                  {pokemons && pokemons.map((pokemon, index) =>{
                      return(<Pokemon key={index} pokemon={pokemon}/>
                      );
                  })}
                  </div>
                   )}
              </div>

            </div>
       </div>
  )
}


export default Pokedex