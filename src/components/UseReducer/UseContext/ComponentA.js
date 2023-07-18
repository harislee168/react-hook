import React, {useContext} from 'react'
import { CounterContext } from '../../../App'

const ComponentA = () => {
  const countContext = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => countContext.countDispatch('add')}>addA</button>
      <button onClick={() => countContext.countDispatch('reduce')}>reduceA</button>
      <button onClick={() => countContext.countDispatch('reset')}>resetA</button>
    </div>
  )
}

export default ComponentA
