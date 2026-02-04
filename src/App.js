import logo from './logo.svg';
import './App.css';
import  Header from './CustomeComponents/Header';
import { Todos } from './CustomeComponents/Todos';
import { Footer } from './CustomeComponents/Footer';
import { useState } from 'react';
import { AddToDo } from './CustomeComponents/AddToDo';

function App() {

  let initToDo;
  if(localStorage.getItem("todos")===null)
  {
    initToDo=[];
  }
  else{
    initToDo=JSON.parse(localStorage.getItem("todos"));
  }
const onDelete=(todo)=>{
setTodos(todos.filter((e)=>{
 return e!==todo;

}))
  localStorage.setItem("todos",JSON.stringify(todos));
};

const addtodo=(title, desc)=>
{
 
  let sr;
  if(todos.length==0)
  {
    sr=0;
  }
  else{
    sr=todos[todos.length-1].sr+1;
  }
  
  
  const mytodo={
      sr:sr,
      title:title,
      desc:desc

  }
  setTodos([...todos, mytodo]);
   console.log("i am adding todo" ,mytodo)
   localStorage.setItem("todos",JSON.stringify(todos));
}

const [todos, setTodos] = useState(initToDo);

  return (
    <>
   <Header title="My Todo List" searchBar={false}></Header>
   <AddToDo addtodo={addtodo}></AddToDo>
   <Todos todos={todos} onDelete={onDelete}></Todos>
   <Footer></Footer>
   </>
  );
}

export default App;
