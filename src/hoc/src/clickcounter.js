import React, { useState } from 'react';
import withCounter from './withCounter';

const Clickcounter = (props) => {

     console.log(props)
  return (
  
    <div> 
     <button type='button'
      onClick={props.increament}> 
      {props.name}
      </button> 
     </div>
  )
}

export default withCounter(Clickcounter)
      