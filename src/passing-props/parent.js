import React, { useState } from 'react';
import { ChildComponent } from './child';


export function ParentComponent() {

     const [dataFromChild, setDataFromChild] = useState('');
     
     const handleDataFromChild = (data) => {

        console.log('Data received from child:', data);

        setDataFromChild(data)
     }

    return (

        <div>

            <h2> parent Component </h2>

            <p>Data from Child: {dataFromChild}</p>


            <ChildComponent name="raja" age ="12"  sendDataToParent={handleDataFromChild}  ></ChildComponent>

   
            

        </div>
    )

}