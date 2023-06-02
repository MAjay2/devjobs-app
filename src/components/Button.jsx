import React from 'react'



function Button({ onClick, name,searchStyle, loadmoreStyle}) {
  return (
    <div>
        <button onClick={onClick} className={name === "Search" ? searchStyle:name==="Load More"? loadmoreStyle :null}>
            {name}
        </button>
    </div>
  )
}

export default Button;