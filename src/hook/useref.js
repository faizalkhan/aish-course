import  {useRef, useContext} from "react";


import { UserContext } from '../hook/useContext';


export const UseRefHook = () =>
{

   const user = useContext(UserContext);

   const inputText = useRef(null);

   

   function handleFunc() {
   inputText.current.value = "learning useref..."
inputText.current.focus();
inputText.current.style.color = "red"
   }

   console.log("useref", user);
    return <>

     <p>  from use ref  {user} </p>

    <input type="text" ref={inputText} />

    <button type='button' onClick={handleFunc}>Submit</button>


   


    </>
}