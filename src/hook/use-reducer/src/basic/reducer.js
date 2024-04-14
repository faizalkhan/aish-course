import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {

debugger;
     switch (action.type) {
        case "add":    
            return  state + 1;
        
        case "subtract":
        return state - 1;

        case "reset":
        return 0;

        default :
          throw new Error("Unexcepted action");
        
     }

}


export const Calculation = () => {


    const [count, dispatch] = useReducer(reducer, initialState)


    return (

          <>

          <h2>{count}</h2>

          <button onClick={ () => dispatch({type : "add"})}> Add </button>

          <button onClick={ () => dispatch({type : "subtract"})}> Sub</button>


          <button onClick={ () => dispatch({type : "reset"})}> Reset</button>
          
          </>


    )


}