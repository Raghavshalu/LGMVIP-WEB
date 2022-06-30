import React, {useEffect}from 'react'
//import { uuid } from 'uuidv4'
import { v4 as uuidv4 } from 'uuid';
const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    const updateTodo=(title,id,completed)=>{
        const newTodo=todos.map((todo)=>
            todo.id===id?{title,id,completed}:todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    },[setInput,editTodo]);
    const onInputChange=(event)=>{
        setInput(event.target.value);
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo){
        setTodos([...todos,{id:uuidv4(),title:input,completed:false}])
        setInput("");}
        else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }
    }
  return (
    <div className='todoapp-box'>
        <form onSubmit={onFormSubmit} className="todoapp-inputarea">
            <input type="text" 
            placeholder="Enter a Todo..." 
            className="todoapp-inputtask"
            value={input}
            required
            onChange={onInputChange}
            />
            <button className='todoapp-addtask' type="submit"><span>{editTodo?"Update":"Add Task"}</span></button>
        </form>

    </div>
  )
}

export default Form