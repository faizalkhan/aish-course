
import { useNavigate } from "react-router-dom";
import jsonResponse  from "../json/product.json";
import Product from "../product-list/productlist";
import { Hoc } from "../hoc/src/BestSeller";
import Card from "../card/card";



export const Productlist = () => {


    const navigate = useNavigate();

     const handleSelected = (id)  => {


      console.log(id);

        navigate(`./product-description/${id}`) 

     }

     const BestSellerComponent = Hoc(Card)


     return (
      <>
        <div> Product List </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: "500px" }}>
          {jsonResponse.map((item, index) => (
            item.bestSeller ? (
              <BestSellerComponent
                key={index}
                id={item.id}
                picture={item.img}
                name={item.name}
                selectedId={handleSelected}
                
             style={{width : "200px"}}
              />
            ) : (
              <Product
                key={index}
                id={item.id}
                name={item.name}
                picture={item.img}
                selectedId={handleSelected}
              />
            )
          ))}
        </div>
      </>
    );
}
     
      
    


