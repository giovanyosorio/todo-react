import React from 'react'
import "../styles/TodoButton.css"
function TodoButton() {
  return (
    <div>
      <button className='CreateTodoButton'      onClick={(e)=>{
        console.log(e.target)}}>+</button>
    </div>
  )
}
export{
    TodoButton
}