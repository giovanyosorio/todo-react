import React from 'react'

import "../styles/TodoSearch.css"
 function TodoSearch() {
  return (
    <div>
      <input className="TodoSearch" type="text" placeholder='Todos '
      
      onChange={(event)=>{
        console.log(event.target);
        console.log(event);
        console.log(event.target.value);
      }}/>
    </div>
  )
}

export {
    TodoSearch
}