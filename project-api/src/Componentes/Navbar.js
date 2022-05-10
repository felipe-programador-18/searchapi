import React from 'react'

const Navbar = () => {
    // one way interesting to passed if img to page!!!
    const ManagerImg ="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
     <nav>
         <div>
            <img 
             className='navbar-img'
             alt='pokeapi-log' 
             src={ManagerImg} /> 
         </div>
         <div>

         </div>
     </nav>
)
}

export default Navbar