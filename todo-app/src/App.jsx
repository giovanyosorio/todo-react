
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoButton } from './componentes/TodoButton';
import React from 'react';

const defaultTodos = [
  { text: "api de flags", completed: true },
  {  text: "api de books", completed: true  }, 
    {  text: "api de shopífy", completed: false  },
    {  text: "api de platzi", completed: false  },
    {  text: "react", completed: false  }
]



function App() {

  const [todos,SetTodos]=React.useState(defaultTodos)
  console.log("los usuarios buscan todos de "+ todos);
  
  const [searchValue, setSearchValue]=React.useState("")
  console.log("los usuarios buscan todos de "+ searchValue);
    
  const completedTodos=todos.filter((item)=>!!item.completed).length
  const total=todos.length
  
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={total}/>
      <TodoSearch searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <TodoList>
      {defaultTodos.map((todo)=>
         <TodoItem key={todo.text}
         text={todo.text}
         completed={todo.completed}/>
      )}
  
      </TodoList>

      <TodoButton />
    </React.Fragment>
  );
}


export default App;