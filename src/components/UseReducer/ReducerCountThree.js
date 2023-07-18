import React, {useReducer} from 'react'

const ReducerCountThree = () => {

  const initialState = {
    counter: 0
  }

  const reducer = (currentState, action) => {
    switch(action.type) {
      case 'add':
        return {...currentState, counter: currentState.counter + action.value}
      case 'reduce':
          return {...currentState, counter: currentState.counter - action.value}
      case 'reset':
        return {...currentState, counter: initialState.counter}
      default:
        return currentState
    }
  }

  const [newStateOne, dispatchOne] = useReducer(reducer, initialState)
  const [newStateTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
      <div>Counter 1: {newStateOne.counter}</div>
      <div>
        <button onClick={() => dispatchOne({type:'add', value: 1})}>add</button>
        <button onClick={() => dispatchOne({type:'reduce', value: 1})}>reduce</button>
        <button onClick={() => dispatchOne({type:'reset'})}>reset</button>
      </div>

      <div>Counter 2: {newStateTwo.counter}</div>
      <div>
        <button onClick={() => dispatchTwo({type:'add', value: 1})}>add</button>
        <button onClick={() => dispatchTwo({type:'reduce', value: 1})}>reduce</button>
        <button onClick={() => dispatchTwo({type:'reset'})}>reset</button>
      </div>
    </div>
  )
}

export default ReducerCountThree
