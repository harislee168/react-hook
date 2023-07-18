import React, {useState} from 'react'

const StateCounter = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const countHandler = (n) => {
    setCount(prevCount => {
      if (n === 0) {
        return prevCount * initialCount
      }
      else {
        return prevCount + n
      }
    })
  }

  return (
    <div>
      <div>Count {count} times </div>
      <button onClick={() => countHandler(1)}>Add</button>
      <button onClick={() => countHandler(-1)}>Minus</button>
      <button onClick={() => countHandler(initialCount)}>Reset</button>
    </div>
  )
}

export default StateCounter
