import logo from './logo.svg';
import './App.css';
import React from 'react'
import StateCounter from './components/UseState/StateCounter';
import StateObject from './components/UseState/StateObject';
import StateArray from './components/UseState/StateArray';
import EffectCounter from './components/UseEffect/EffectCounter';
import EffectMouse from './components/UseEffect/EffectMouse';
import MouseContainer from './components/UseEffect/MouseContainer';
import IntervalHookCounter from './components/UseEffect/IntervalHookCounter';
import DataFetching from './components/UseEffect/DataFetching';
import ComponentF from './components/UseContext/ComponentF';
import ReducerCount from './components/UseReducer/ReducerCount';
import ReducerCountTwo from './components/UseReducer/ReducerCountTwo';
import ReducerCountThree from './components/UseReducer/ReducerCountThree';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

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
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value='Bruce'>
        <ChannelContext.Provider value='Clark'>
          <ComponentF />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerCount /> */}
      <ReducerCountThree />
    </div>
  );
}

export default App;
