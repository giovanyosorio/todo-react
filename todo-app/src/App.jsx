
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoButton } from './componentes/TodoButton';
import React from 'react';

const defaultTodos = [
  { text: "api de flags", completed: true },
  { text: "api de books", completed: true },
  { text: "api de shopífy", completed: false },
  { text: "api de platzi", completed: false },
  { text: "react", completed: false },
  { text: "NODEjs", completed: false }
]



function App() {

  const [todos, SetTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState("")
  const completedTodos = todos.filter((item) => !!item.completed).length
  const total = todos.length
  console.log("total"+total);
  console.log("completedTodos"+completedTodos);
  const searchedTodos = todos.filter((item) => { 
    const todoText=item.text.toLowerCase()
    const searchText=searchValue.toLocaleLowerCase()
    return todoText.includes(searchText) 
  })

  const completeTodo=(text)=>{
    const newTodos=[...todos]
    const todoIndex= newTodos.findIndex(
      (todo)=>todo.text==text
    )
    newTodos[todoIndex].completed=true
    console.log("haz completado"+todos.length)
    SetTodos(newTodos)
  }
  const deleteTodo=(text)=>{
    const newTodos=[...todos]
    const todoIndex= newTodos.findIndex(
      (todo)=>todo.text==text
    )
    newTodos.splice(todoIndex,1)
    SetTodos(newTodos)
    console.log(newTodos)
  }
  
  console.log(searchedTodos);



  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={total} />
      <TodoSearch searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) =>
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed} 
            onComplete={()=>completeTodo(todo.text)}  
            onDelete={()=>deleteTodo(todo.text)}
          />
            
        )}

      </TodoList>

      <TodoButton />
    </React.Fragment>
  );
}


export default App;