import React, { useState } from 'react';

import withCounter from './withCounter';

const Mouseovercounter = (props) => {

  


  return (
    <div>




     <button type='button' onMouseOver={props.increament}>

     {props.name}

     </button>

    </div>

    
  )
}

Mouseovercounter.add = function (a, b) { return a + b} 

export default withCounter(Mouseovercounter)
