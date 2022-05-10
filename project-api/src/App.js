import React,{useState} from 'react'
import './App.css'
import { SearchPokemon, GetPokemons, GetPokemensData } from './apipokemon/api'; 
import Navbar from './Componentes/Navbar'
import SearchBar from './Componentes/SearchBar';

function App() {
  //flag (page,totalpage, loading, favorites,pokemons and notfound)
  const [page, setPage] = useState(0)
  const [TotalPage, setTotalPage] = useState(0)
  const [loading, setloading]= useState(false)
  const [notfound, setfound]= useState(false)
  const [pokemons, setpokemons] = useState([])
  
  //this working with context!!
  const [favorites, setfavorites] = useState([])
  
  
  return (
    <div className="App">
     <Navbar/>
     <SearchBar/>
    </div>
  );
}

export default App;
