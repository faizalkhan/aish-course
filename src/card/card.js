function Card(props) {

    return (
        <div className="card" >
    
         <img src={props.picture} alt="No image Found" style={{ width: "100px"}}/>
    
          <h4>{props.name}</h4>
        </div>
      );
}

export default Card
