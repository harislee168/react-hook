import React, {useState} from 'react'

const StateCounter = () => {
  const [count, setCount] = useState(0)

  const countHandler = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={countHandler}>Count {count} times</button>
    </div>
  )
}

export default StateCounter
