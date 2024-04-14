import React, { useContext } from 'react'
import { UserContext } from '../hook/useContext';

function ComponentE() {
    debugger;
  const user = useContext(UserContext)


  return <div> User is {user} </div>
}

export default ComponentE;