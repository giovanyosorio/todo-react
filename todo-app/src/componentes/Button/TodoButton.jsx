import React from 'react'
//import "../styles/TodoButton.css"
import "../../styles/TodoButton.css"
function TodoButton(props) {
  
  return (
    <div>
      
      <button className='CreateTodoButton'      
      //onClick={onCreate}
      >+</button>
    </div>
  )
}
export{
    TodoButton
}