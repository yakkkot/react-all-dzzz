import './App.css';

import {Users} from "./Components/index";
import {Comments} from "./Components/index";

function App() {
  return (
    <div className="App">
        <Users/>
        <hr className='my-6'/>
        <Comments/>
    </div>
  );
}

export default App;
