import './product.css'

function Product(props) {
    console.log("card", props);
    
    
    
        return (
            <div className="product" onClick={() => props.selectedId(props.id)}>
        
     
            <img src={props.picture} alt="No image Found"  style={{width : "200px"}}/>
            
       
        
              <p style={{width: "100%"}}>{props.name}</p>
            </div>
          );
    }
    
  export default Product
    