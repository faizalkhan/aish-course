
import { useNavigate } from "react-router-dom";
import jsonResponse  from "../json/product.json";
import Product from "../product-list/productlist";



export const Productlist = () => {


    const navigate = useNavigate();

     const handleSelected = (id)  => {


      console.log(id);

        navigate(`./product-description/${id}`) 

     }




      return (
       <>
       <div> Product List </div>
      <div style={{display:'flex', flexWrap:'wrap', width : "500px"}}>
         {jsonResponse.map((item, index) => {
          return <Product key={index} id={item.id} name={item.name} picture={item.img} selectedId = {handleSelected}/>;
        })} 

</div>

            </>)
}
     
      
    


