import React from 'react'
const Pagination =(props) => {
    // this way am get all state with props
    const{page,TotalPage, onLeftClick, onRightClick } = props
    
    return(<div>
        <button onClick={onLeftClick} >⬅</button>
        <div>{page}: {TotalPage}</div>
        <button onClick={onRightClick}> ➡</button>
    </div>)

}

export default Pagination