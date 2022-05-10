import React from 'react'

// this case is different about how use context api!!
//i am passed it two parameters inside out code, means that workings with both's
 const FavoriteContext = React.createContext({
   favoritepokemons: [],
   updatingpokemons: (id) => null
})

export const FavoritesProvides = FavoriteContext.Provider
export default  FavoriteContext

