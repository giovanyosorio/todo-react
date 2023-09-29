import React from 'react'
import "../styles/TodoButton.css"
function TodoButton(props) {
  const {className, onClick} = props
  return (
    <div>
      
      <button className='CreateTodoButton'      
      onClick={onCreate}
      >+</button>
    </div>
  )
}
export{
    TodoButton
}