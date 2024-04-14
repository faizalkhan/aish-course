

function Card(props) {
console.log(props);



    return (
        <div className="card" >
    
         <img src={props.picture} alt="No image Found" />
    
          <h4>{props.name}</h4>
        </div>
      );
}

export default Card
