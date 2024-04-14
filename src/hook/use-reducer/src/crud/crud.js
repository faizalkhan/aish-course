import { useReducer, useState } from "react";

const initialState = {
  items: [],
  editItem : null
};

const reducer = (state, action) => {
    debugger;
  switch (action.type) {

    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id != action.payload),
      };

    case "UPDATE_ITEM":
      return {
        ...state,
        items : state.items.map((item) => item.id === action.payload.id ? { ...item, ...action.payload.updatedItem } : item),
        editItem: null,
      };


      case "SET_EDIT_ITEM":
        return {
          ...state,
          items : action.payload
        };



      default:

      return state;
  }
};


export const CrudApp = () => {


       const [state, dispatch] = useReducer(reducer, initialState);

       const [inputValue, setInputValue] = useState('');


      const addItem = ()=>{
        

        if(inputValue.trim() !== "")
        {

            dispatch( {type : 'ADD_ITEM', payload : { id : Date.now(), name : inputValue } })

            setInputValue("");

        }

      }


      const deleteItem = (id)=>{        

         dispatch( {type : 'REMOVE_ITEM', payload : id })         
    

      }

      const updateItem = (id, updatedItem)=>{        

        dispatch( {type : 'UPDATE_ITEM', payload : { id, updatedItem} })         
   

     }

     const editItem = item =>{        

        dispatch( {type : 'SET_EDIT_ITEM', payload : item})   
        setInputValue(item.name); 
   

     }

       return(
 
        <>
        
        <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Enter item name"
      />
<br />
<br />


{state && state.editItem ? (
        <button onClick={updateItem}>Update Item</button>
      ) : (
        <button onClick={addItem}>Add Item</button>
      )}

   
    

      { state.items && state?.items.map((item) => (

     

         <div key={item.id}>

          <li> {item.name}  {item.id} </li> 
          
          <button onClick = {() => deleteItem(item.id)}> Deleted </button>

          {/* <button onClick = {() => updateItem(item.id, {name : 'Updated Item'})}>Updated </button> */}

          <button onClick={() => editItem(item)}>Edit</button>

          </div>
        

    )) }
      

        </>


       )



}