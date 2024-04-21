import { useState } from "react";

const withCounter = (OriginalComponent) => {


  console.log(OriginalComponent)

  debugger;
    const  NewComponent = (props) => {

    // perform some logic on original component

       const [count, setCount]  = useState(0);

        const increament = () => {
          setCount(count + 1)
        }

        return (
<>
     {count}
        
        <OriginalComponent increament ={increament} {...props}></OriginalComponent>
</>

        )

    }

    NewComponent.add = OriginalComponent.add;

    return NewComponent

}

export default withCounter


//with counter is a function accept component as argument and
// returns a new Component (new component can be functional or class based component)
