

import { useCallback, useState } from "react";
import Todo from './todo';

// export default function usecallback() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export const Usecallback = () =>{

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment =() => {

        setCount((c) => c + 1)
    }

    const addTodo = useCallback(() => {
         setTodos((todos) => [...todos, "addTodo"]);
    },[todos]);


   return(
    <>
    
    
    <Todo list = {todos}  addTodo = {addTodo } />

    <hr />

    <div>

     count  : {count}

     <button onClick={increment}>+</button>
    </div>
    
    </>
   )

}