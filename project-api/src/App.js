import React,{useState, useEffect   } from 'react'
import './App.css'
import { SearchPokemon, GetPokemons, GetPokemensData } from './apipokemon/api'; 
import Navbar from './Componentes/Navbar'
import SearchBar from './Componentes/SearchBar';
import { FavoritesProvides } from './Contexto/FavoritePokemons';
import Pokedex from './Componentes/Pokedex';

//this is doing connect with loanding favorite and updating favotires
const favoriteKey = 'favorites'


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
      console.log('here is data getpokemon',data)
        const promises = data.results.map(async (pokemon) => {
        return await GetPokemensData(pokemon.url)
      })   
       
      //variable manage all promise with commands promisses all
      //promises
      const newresults = await Promise.all(promises) 
      setpokemons(newresults)
      setloading(false)
      setTotalPage(Math.ceil(data.count / itensTopage))
      
    }catch (error) {
       console.log('fetching is give error!!', error)
    }
  }
  
  //this case i make first this function to connect another part code updating pokemon

  const loadingFavoritepokemons = () => {
   const saveFavorites = JSON.parse(window.localStorage.getItem(favoriteKey)) || []
     setfavorites(saveFavorites)
  }

  const updatingFavoritePokemon = (name) => {
     const updateFavo = [...favorites]
     const favoritepokeIndex = favorites.indexOf(name)
     if(favoritepokeIndex >= 0){
       updateFavo.splice(favoritepokeIndex,1)
     }else{
       updateFavo.push(name)
     }
     window.localStorage.setItem(favoriteKey, JSON.stringify(updateFavo))
     setfavorites(updateFavo)
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
   loadingFavoritepokemons()
  },[])
  
  return (
    <FavoritesProvides value={{
      favoritepokemons:favorites, updatingpokemons:updatingFavoritePokemon
    }} >
    <div className="App">
     <Navbar/>
     <SearchBar onSearch={onSearchHandling} />
     {notfound ? ( <div className='not-found'>nothing found here!</div>) : 
      
      <Pokedex
      pokemons = {pokemons}
      loading ={loading}
      page ={page}
      setPage ={setPage}
       TotalPage = {TotalPage}
      />
      
     }
    </div>
 
    </FavoritesProvides>
 );
}

export default App;
