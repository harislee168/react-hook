import React, {useReducer} from 'react'

const ReducerCountTwo = () => {

  const initialState = {
    firstCounter: 0,
    secondCounter: 10
  }
  const reducer = (currentState, action) => {
    switch(action.type) {
      case 'add':
        return {...currentState, firstCounter: currentState.firstCounter + action.value}
      case 'reduce':
        return {...currentState, firstCounter: currentState.firstCounter - action.value}
      case 'reset':
        return {...currentState, firstCounter: initialState.firstCounter}
      case 'addTwo':
        return {...currentState, secondCounter: currentState.secondCounter + action.value}
      case 'reduceTwo':
        return {...currentState, secondCounter: currentState.secondCounter - action.value}
      case 'resetTwo':
        return {...currentState, secondCounter: initialState.secondCounter}
      case 'resetAll':
        return initialState
      default:
        return currentState
    }
  }
  const [newState, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        <button onClick={() => dispatch({type: 'add', value:5})}>Add 5</button>
        <button onClick={() => dispatch({type: 'reduce', value: 3})}>Reduce 3</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <div>First Count is {newState.firstCounter}</div>
      </div>
      <div>
        <button onClick={() => dispatch({type: 'addTwo', value:2})}>Add 2</button>
        <button onClick={() => dispatch({type: 'reduceTwo', value: 1})}>Reduce 1</button>
        <button onClick={() => dispatch({type: 'resetTwo'})}>Reset</button>
        <div>Second Count is {newState.secondCounter}</div>
      </div>
      <div><button onClick={() => dispatch({type:'resetAll'})}>Reset all</button></div>
    </div>
  )
}

export default ReducerCountTwo
