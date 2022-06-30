import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ToDoList =({todos,setTodos,setEditTodo}) => {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }
const handleComplete=(todo)=>{
    setTodos(
        todos.map((item)=>{
            if(item.id===todo.id){
                return{...item,completed:!item.completed};
            }
            return item;
        })
    );
};
const handleEdit=({id})=>{
    const findTodo=todos.find((todo)=>todo.id===id);
    setEditTodo(findTodo);
};
  return (
    <div className='todoapp-todolistbox'>
        <ul>
        {
            todos.map((todo)=>(
                <li className="todo-list" key={todo.id}>
                    <input 
                    type="text"
                    value={todo.title}
                    className={'list ${todo.completed?"complete":""}'}
                    onChange={(event)=>event.preventDefault()}/>
                <div className="iconsWrap">
                <span onClick={()=>handleComplete()} className="complete">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span >
                <span onClick={()=>handleEdit(todo)} className="edit">
                    <FontAwesomeIcon icon={faPen} />
                </span>
                <span onClick={()=>handleDelete(todo)} className="delete">
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
                </li>
            ))
        }</ul>
    </div>
  )
};

export default ToDoList