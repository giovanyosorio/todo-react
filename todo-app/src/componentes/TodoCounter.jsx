import React from 'react'
import "../styles/TodoCounter.css"
  function TodoCounter({completed,total}) {
  return (
   
      <h1 >Haz completado {completed} de {total} Todos </h1>

  )
}
export{
    TodoCounter
}