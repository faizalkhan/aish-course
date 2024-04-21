import logo from './logo.svg';
import './App.css';
import Clickcounter from './clickcounter';
import Mouseovercounter from './mouseovercounter';

function App() {
  console.log(Mouseovercounter.add(1,2))
  return (

    <div className="App">
<Clickcounter name = {"click Counter"}/>
<Mouseovercounter name = {"Mouse over Counter"} />
</div>
  );
}

export default App;
