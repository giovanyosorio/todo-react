import React from 'react'
import "../styles/TodoSearch.css"


 function TodoSearch({
  searchValue,setSearchValue
 }) {

  return (
    <div>
      <input className="TodoSearch" type="text" placeholder='Todos '
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}/>
    </div>
  )
}

export {
    TodoSearch
}