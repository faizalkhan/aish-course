import React from 'react';

function Todo(props) {
    console.log("child render");
  return (
    
    <div>

<h2>My Todos</h2>
      {props.list?.map((todo, index) => {
        return <p key={index}>{todo}</p>;
        })}
      <button onClick={props.addTodo}>Add Todo</button>
    </div>
  )
}


export default React.memo(Todo);