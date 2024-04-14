import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { FirstHook } from './usefetch/usefetch';

function App() {

  

  const [data] = FirstHook("https://jsonplaceholder.typicode.com/todos");


  console.log(data)
  return (

    <div className="App">
     
   {data && data.map((item, index) => {
    return <p key={item.id}>{item.title}</p>;
   })}
    

    </div>


  );
}

export default App;
