import React from 'react'
//import "../styles/TodoButton.css"
import "../../styles/TodoButton.css"
function TodoButton(props) {
/*   const { onCreateTodo } = props; */
  return (
    <div>
      
      <button className='CreateTodoButton'     
   
     /*  onClick={onCreateTodo} */
      >+</button>
    </div>
  )
}
export{
    TodoButton
}