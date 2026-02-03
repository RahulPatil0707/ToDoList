import logo from './logo.svg';
import './App.css';
import  Header from './CustomeComponents/Header';
import { Todos } from './CustomeComponents/Todos';
import { Footer } from './CustomeComponents/Footer';
import { useState } from 'react';
import { AddToDo } from './CustomeComponents/AddToDo';

function App() {
const onDelete=(todo)=>{
console.log("I am on delete of todo",todo )

setTodos(todos.filter((e)=>{
 return e!==todo;

}))
};

const addtodo=(title, desc)=>
{
  console.log("i am adding todo" ,title, desc)
  let sr=todos[todos.length-1].sr+1;
  const mytodo={
      sr:sr,
      title:title,
      desc:desc

  }
}

const [todos, setTodos] = useState(() =>[
    {
      sr:1,
      title:"Job 1",
      desc:"Job 1 need to do"
    },
     {
      sr:2,
      title:"Job 2",
      desc:"Job 2 need to do"
    },

     {
      sr:3,
      title:"Job 3",
      desc:"Job 3 need to do"
    }


  ] );

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
