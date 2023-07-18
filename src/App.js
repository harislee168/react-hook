import logo from './logo.svg';
import './App.css';
import StateCounter from './components/UseState/StateCounter';
import StateObject from './components/UseState/StateObject';
import StateArray from './components/UseState/StateArray';
import EffectCounter from './components/UseEffect/EffectCounter';

function App() {
  return (
    <div className="App">
      {/* <StateCounter /> */}
      {/* <StateObject /> */}
      {/* <StateArray /> */}
      <EffectCounter />
    </div>
  );
}

export default App;
