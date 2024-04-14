import { createContext, useState } from "react";
import App from "../App";



export const themeContext = createContext();

export const Header = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleBtn, setToggleBtn] = useState(false);

    return (

        <>

         <themeContext.Provider value = {toggleBtn}>

         <button type='button' onClick={()=> setToggleBtn(!toggleBtn)}> {toggleBtn ? " Dark Mode" : " Light Mode"}</button>

          <App />

         </themeContext.Provider>
        
        
        </>
    )

    
}