import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { themeContext } from './Header/header';

function App() {

  const toggleValue = useContext(themeContext);

  console.log(toggleValue);

  return (
    <div className="App">
    

     {toggleValue}

      <div style={toggleValue ? {width:'100px', height:'100px', border:'1px solid #000', margin:'5px', backgroundColor:'#fff', color:'#000'} : 
      {width:'100px', height:'100px', border:'1px solid #000', margin:'5px',backgroundColor:'#000', color:'#fff'}}>Header</div>
      
      
    </div>
  );
}

export default App;
