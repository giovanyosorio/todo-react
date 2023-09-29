
import { TodoCounter } from './componentes/Counter/TodoCounter';
import { TodoSearch } from './componentes/Search/TodoSearch';
import { TodoList } from './componentes/List/TodoList';
import { TodoItem } from './componentes/Item/TodoItem';
import { TodoButton } from './componentes/Button/TodoButton';
import React from 'react';
/*
const defaultTodos = [
  { text: "api de flags", completed: true },
  { text: "api de books", completed: true },
  { text: "api de shopífy", completed: false },
  { text: "api de platzi", completed: false },
  { text: "react", completed: false },
  { text: "NODEjs", completed: false }
]



localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos))

localStorage.remoteItem("TODOS_V1")
*/
  function useLocalStorage(itemName,initialValue){


    const localStorageItem=localStorage.getItem(itemName)
    let parsedItem
    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue))
      parsedItem=initialValue
    }else{
      parsedItem=JSON.parse(localStorageItem)
    }
      //local storage
  const [item,setItem]=React.useState(parsedItem)

  const saveItem=(newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem))
    setItem(newItem)
    }
    return [item,saveItem]
  }

function App() {

 

  const [todos, saveTodos] = useLocalStorage("TODOS_V1",[])
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
    saveTodos(newTodos)
  }
  const deleteTodo=(text)=>{
    const newTodos=[...todos]
    const todoIndex= newTodos.findIndex(
      (todo)=>todo.text==text
    )
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
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

      <TodoButton
        onCreateTodo={(text) => {
          const newTodos = [...todos]
          newTodos.push({ text, completed: false })
          saveTodos(newTodos)
        }}
      
      />
    </React.Fragment>
  );
}


export default App;