import React from 'react'
import "../styles/TodoCounter.css"
  function TodoCounter({completed,total}) {
  return (
    total==completed ?
      <h1 className='TodoCounter'>Felicidades Completaste los todos </h1>
      :
      <h1 className='TodoCounter'>Haz completado {completed} de {total} Todos </h1>

  )
}
export{
    TodoCounter
}