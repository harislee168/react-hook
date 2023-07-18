import React, {useContext} from 'react'
import { CounterContext } from '../../../App'

const ComponentD = () => {
  const countContext = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => countContext.countDispatch('add')}>addD</button>
      <button onClick={() => countContext.countDispatch('reduce')}>reduceD</button>
      <button onClick={() => countContext.countDispatch('reset')}>resetD</button>
    </div>
  )
}

export default ComponentD
