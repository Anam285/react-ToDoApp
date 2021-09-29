import {useState} from "react"
import './App.css';
import Form from './Form'
import TodoList from './TodoList'

const App=()=>{
  const [todos , setTodos]=useState([])


  const handleToggle=(id)=>{
    let newTodos = [...todos]
    newTodos[id].complete  = !newTodos[id].complete
    setTodos(newTodos)


  }
  const handleDelete=(id)=>{
    let newTodos = [...todos]
    newTodos.splice(id, 1)
    setTodos(newTodos)


  }

  const handleForm=(userInput)=>{
    if(userInput === "")return 
    setTodos([...todos,
    {
      value: userInput,
      complete:false
    }])
    console.log(todos)
  }
  
  return(
    <div className="App">
    <h1 >Todo List</h1>
    <Form handleForm={handleForm} />
    <TodoList todos={todos} toggle={handleToggle} delete={handleDelete}/>
    
    </div>
  )
}

export default App;
