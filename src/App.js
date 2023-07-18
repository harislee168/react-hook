import logo from './logo.svg';
import './App.css';
import React, {useReducer} from 'react'
import StateCounter from './components/UseState/StateCounter';
import StateObject from './components/UseState/StateObject';
import StateArray from './components/UseState/StateArray';
import EffectCounter from './components/UseEffect/EffectCounter';
import EffectMouse from './components/UseEffect/EffectMouse';
import MouseContainer from './components/UseEffect/MouseContainer';
import IntervalHookCounter from './components/UseEffect/IntervalHookCounter';
import DataFetching from './components/UseEffect/DataFetching';
// import ComponentF from './components/UseContext/ComponentF';
import ReducerCount from './components/UseReducer/ReducerCount';
import ReducerCountTwo from './components/UseReducer/ReducerCountTwo';
import ReducerCountThree from './components/UseReducer/ReducerCountThree';
import ComponentA from './components/UseReducer/UseContext/ComponentA';
import ComponentD from './components/UseReducer/UseContext/ComponentD';
import ComponentF from './components/UseReducer/UseContext/ComponentF';
import ReducerDataFetching from './components/UseReducer/ReducerDataFetching';
import CallbackParent from './components/UseCallback/CallbackParent';
import UseMemoCounter from './components/UseMemo/UseMemoCounter';
import FocusInput from './components/UseRef/FocusInput';
import RefCounter from './components/UseRef/RefCounter';
import DocTitleOne from './components/CustomHook/DocTitleOne';
import DocTitleTwo from './components/CustomHook/DocTitleTwo';
import CounterOne from './components/CustomHook/CounterOne';
import CounterTwo from './components/CustomHook/CounterTwo';
import UserForm from './components/CustomHook/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CounterContext = React.createContext()

const initialState = 0
const reducer = (currentState, action) =>{
  console.log('hello reducer')
  switch(action) {
    case 'add':
      return currentState + 1
    case 'reduce':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      return currentState
  }
}

function App() {
  const [newState, dispatch] = useReducer(reducer, initialState)
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
      {/* <ReducerCountThree /> */}
      {/* <div>
        <div>Count: {newState}</div>
        <CounterContext.Provider value={{countState: newState, countDispatch: dispatch}}>
          <ComponentA />
          <ComponentD />
          <ComponentF />
        </CounterContext.Provider>
      </div> */}
      {/* <ReducerDataFetching /> */}
      {/* <CallbackParent /> */}
      {/* <UseMemoCounter /> */}
      {/* <FocusInput /> */}
      {/* <RefCounter /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
  );
}

export default App;
