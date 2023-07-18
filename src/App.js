import logo from './logo.svg';
import './App.css';
import StateCounter from './components/UseState/StateCounter';
import StateObject from './components/UseState/StateObject';
import StateArray from './components/UseState/StateArray';
import EffectCounter from './components/UseEffect/EffectCounter';
import EffectMouse from './components/UseEffect/EffectMouse';
import MouseContainer from './components/UseEffect/MouseContainer';
import IntervalHookCounter from './components/UseEffect/IntervalHookCounter';
import DataFetching from './components/UseEffect/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <StateCounter /> */}
      {/* <StateObject /> */}
      {/* <StateArray /> */}
      {/* <EffectCounter /> */}
      {/* <EffectMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
