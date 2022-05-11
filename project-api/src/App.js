import React,{useState} from 'react'
import './App.css'
import { SearchPokemon, GetPokemons, GetPokemensData } from './apipokemon/api'; 
import Navbar from './Componentes/Navbar'
import SearchBar from './Componentes/SearchBar';
import { FavoritesProvides } from './Contexto/FavoritePokemons';
import { useEffect } from 'react';

function App() {
  //flag (page,totalpage, loading, favorites,pokemons and notfound)
  const [page, setPage] = useState(0)
  const [TotalPage, setTotalPage] = useState(0)
  const [loading, setloading]= useState(false)
  const [notfound, setfound]= useState(false)
  const [pokemons, setpokemons] = useState([])
  
  //this working with context!!
  const [favorites, setfavorites] = useState([])
  
  //create variable to said about how many times i want items to page!
  const itensTopage = 25

  //create all manager of api !!
  const fecthinPokemonapi = async () => {
    try {
      setloading(true)
      setfound(false)
      //theorical i am created variable to managel promises
      const data = await GetPokemons(itensTopage, itensTopage * page)
      const promises = data.results.map(async (pokemon) => {
        return await GetPokemensData(pokemon.url)
      })    
      //variable manage all promise with commands promisses all
      const results = await Promise.all(promises) 
      setpokemons(results)
      setloading(false)
      setTotalPage(Math.ceil(data.count / itensTopage))
    
    }catch (error) {
       console.log('fetching is give error!!', error)
    }
  }

  const onSearchHandling = async (pokemon) => {
    if(!pokemon){
      //different of pokemon return all pokemons in fecthing!! 
      return fecthinPokemonapi()
    }
    setloading(true)
    setfound(false)
    const result = await SearchPokemon(pokemon)
    if(!result){
      setfound(true)
    }else{
      setpokemons([result])
      setPage(0)
      setTotalPage(0)
    }
    setloading(false)
  }



  useEffect(() =>{
      fecthinPokemonapi()
  }, [page])

  useEffect(() => {
   // need passed if loading favorites here!!!
  },[])
  
  return (
    <FavoritesProvides value={{
      favoritepokemons:favorites, updatingpokemons:''
    }} >
    <div className="App">
     <Navbar/>
     <SearchBar onSearch={onSearchHandling} />
    </div>
 
    </FavoritesProvides>
 );
}

export default App;
