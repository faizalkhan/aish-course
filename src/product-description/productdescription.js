import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Product from "../json/product.json";

export const ProductDescription = () => {


    debugger;
    const params = useParams();

    const {id} = params;

    const [description, setDescription] = useState([]);

    console.log(window.location, "location", params);


    console.log(Product);

    useEffect(() => {

        console.log("useEffect");

         let result = Product.filter(product => product.id === +id);
         console.log(typeof id);
         console.log(result);

         setDescription(result);

    },[id]);



    return (
        <>
        
       <h2>Product Description </h2>
       <div style ={{backgroundColor: "white", color:"#000", border:"solid 1px red"}}>
        {description.map((item, index) => {
          return <div key={item.id}>
            <p>  <img src={item.img} alt="" style={{ width: "250px", height : "250px" }} /> </p>
            <p>  {item.description} </p>
            
            </div>
        })} 
        </div>
         
        
        </>
    )
}