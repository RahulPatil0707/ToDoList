import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <>
    <div className='container'>
        <h3 className='text-center my-3'>ToDos List</h3>
        {props.todos.length===0?"No Todos to display":
        props.todos.map((todo)=>{
            return  <TodoItem todoo={todo} key={todo.sr} onDelete={props.onDelete}></TodoItem>

        })
        }
    
    </div>
    </>
  )
}
