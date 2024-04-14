import React from 'react'
import ComponentE from './ComponentE';
import { UseRefHook } from './useref';



export const UserContext = React.createContext();


export const UserContexted = () => {

   
    return(
        <>
        
     
          <UserContext.Provider value={'Raja'}> 
          <ComponentE />

          <UseRefHook />
          </UserContext.Provider> 


           
        </>
    )

}