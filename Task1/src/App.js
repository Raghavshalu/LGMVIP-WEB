import React,{useEffect, useState} from 'react'
import Form from './Component/Form'
import Header from './Component/Header'
import ToDoList from './Component/ToDoList';
const App = () => {
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  const[editTodo,setEditTodo]=useState(null);
  return (
    <div className='App'>
          <Header/>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
            <ToDoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
    </div>
  )
}

export default App