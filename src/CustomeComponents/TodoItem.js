import React from 'react'

export const TodoItem = (props) => {
  return (
    <>
    <div key={props.sr}>
      <h4>{props.todoo.title}</h4>
      <p>{props.todoo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todoo)}}>Delete</button>
    </div>
    
    </>
   

  )
}
