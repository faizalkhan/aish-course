// import { useMemo, useState } from "react";

// export const UseMemo = () => {

//     const [number, setNumber] = useState(0);

//     const [counter, setCounter] = useState(0);


//     const squareOfNumber = useMemo(()=> {


//         return handleSquareNumber(number)

//         }, [number])


//     function handleSquareNumber(number) {


//         console.log("handleSquareNumber function is calling")

//        return number * number
        
//     }

//     return(
//         <>

      
//        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />

//          <p>Square Number: {squareOfNumber}</p>

//          <button type='button' onClick={()=> setCounter(counter + 1)}> Counter</button>

//         </>
//     )

// }



import { useMemo, useState } from "react";

export const UseMemo = () => {

    const [counterOne, setCounterOne] = useState(0);


    const [counterTwo, setCounterTwo] = useState(0);


    const  incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const  incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {

        let i = 0;

        while (i < 2000000000) i++;

        return counterOne % 2 === 0
    }, [counterOne])

   

    return(
        <>

            <button type='button' onClick={incrementOne}> Counter {counterOne} </button>

            <button type='button' onClick={incrementTwo}> Counter {counterTwo} </button>
                 
         
            {/* {console.log(isEven())} */}

            {isEven ? 'Even' : 'Odd'}
      
    

        </>
    )

}
