export function ChildComponent( props) {
const sendData = () => {
    const data = 'Data from Child Data from Child';
  
    props.sendDataToParent(data);
  }

 console.log(props);

    return <>
    <h3>Child Component</h3>

    <p> {props.age} </p>
    <p>  {props.name} </p> 

    <button onClick={sendData}>Send Data to Parent</button>
    </>
}
