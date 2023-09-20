import React from 'react'
import "../styles/TodoList.css"
 function TodoList({children}) {
  return (
    <div>
      <ul className='TodoList'>
        {children}
      </ul>
    </div>
  )
}
export {
    TodoList
}