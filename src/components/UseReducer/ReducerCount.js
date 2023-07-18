import React, {useReducer} from 'react'

const ReducerCount = () => {

  const initialState = 0
  const reducer = (currentState, action) => {
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
  const [newState, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => dispatch('add')}>Add</button>
      <button onClick={() => dispatch('reduce')}>Reduce</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <div>Count is {newState}</div>
    </div>
  )
}

export default ReducerCount
