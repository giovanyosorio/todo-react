
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
    {  text: "api de platzi", completed: false  }
]



function App() {


  const [searchValue, setSearchValue]=React.useState("")
  console.log("los usuarios buscan todos de "+ searchValue);
  
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

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