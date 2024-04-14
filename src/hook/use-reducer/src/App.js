import logo from './logo.svg';
import './App.css';
import { Calculation } from './basic/reducer';
import { CrudApp } from './crud/crud';

function App() {
  return (
    <div className="App">
      <Calculation />
      <br />   <br />   <br />
      <CrudApp />
    </div>
  );
}

export default App;
