
//create one functions to manager all date api
//theoritical this code have manager api
export const SearchPokemon = async (pokemon) =>{
    try { 
       let url = ` https://pokeapi.co/api/v2/pokemon/${pokemon}`
       const response = await fetch(url)
       return await response.json()
                
    } catch (error) {
       console.log('error in code', error)
    }
}

//create function to get pokemon and boundaries search field to max 50!!
export const GetPokemons = async (limit=50, offset=0) => {
   try{
       let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
       const response = await fetch(url)
       return await response.json()
   } catch(error){
       console.log('error inside search !!')
   }
}

//this caught date of pokemon all
export const GetPokemensData = async (url) => {
    try {
       const response = await fetch(url)
       return await response.json()   
    } catch (error) {
       console.log('error in get all date pokemon', error) 
    }
}