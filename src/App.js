import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [start, setStart] = useState(1);
  const [count, setCount] = useState(1);
  
  function handleIncrement(){
    setStart(start+1)
  }
  
  function handleDecrement(){
    setStart(start-1)
  }
  
  function handleCountIncrement(){
    setCount(count+1)
  }
  
  function handleCountDecrement(){
    setCount(count-1)
  }
  
  const date = new Date('July 23 2024');
  return (
   <div>
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>Start: {start}</span>
      <button onClick={handleIncrement}>+</button> 
    </div>
    <div>
      <button onClick={handleCountDecrement}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleCountIncrement}>+</button>
    </div>
    
    <p>Date is {date.getDate()+count}</p>
   </div>
  );
}

export default App;
