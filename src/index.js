import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from './CustomeComponents/Profile';
import reportWebVitals from './reportWebVitals';
import ExpenseEntryItem from './CustomeComponents/ExpenseEntryItem'




const item = { 
   id: 1, 
   name : "Grape Juice", 
   amount : 40.45, 
   spendDate: new Date("2020-10-10"), 
   category: "Food" ,
   num1:"non num",
   num2:20
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

     <App />
  {/* <Profile /> 
  <ExpenseEntryItem item={item}/>  */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
