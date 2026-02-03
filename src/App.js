import logo from './logo.svg';
import './App.css';
import  Header from './CustomeComponents/Header';
import { Todos } from './CustomeComponents/Todos';
import { Footer } from './CustomeComponents/Footer';
import { useState } from 'react';

function App() {
const onDelete=(todo)=>{
console.log("I am on delete of todo",todo )

setTodos(todos.filter((e)=>{
 return e!==todo;

}))

};

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
   <Todos todos={todos} onDelete={onDelete}></Todos>
   <Footer></Footer>
   </>
  );
}

export default App;
