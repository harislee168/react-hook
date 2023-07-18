import React, {useState} from 'react'
import useCounter from './useCounter'

const CounterTwo = () => {
  const [count, countHandler] = useCounter(10)

  return (
    <div>
      <div>Count {count}</div>
      <div>
        <button onClick={() => {countHandler(1)}}>Add</button>
        <button onClick={() => {countHandler(-1)}}>Reduce</button>
        <button onClick={() => {countHandler(0)}}>Rest</button>
      </div>
    </div>
  )
}

export default CounterTwo
