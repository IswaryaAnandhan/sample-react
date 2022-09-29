
import './App.css';
import Sample from './sample.js';
import About from './about';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Counter from './counter';
import Openbox from './openbox';
import Number from './number';
import Click from './click';

function App() {
  return (
    <div className="App">
 <Sample></Sample>
 <hr></hr>
 <About></About>
 <hr></hr>
 <Counter></Counter>
 <hr></hr>
 <Openbox></Openbox>
 <hr></hr>
 <Number></Number>
 <hr></hr>
 <Click></Click>
    </div>
  );
}

export default App;
