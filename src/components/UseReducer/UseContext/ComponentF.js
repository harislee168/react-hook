import React, {useContext} from 'react'
import { CounterContext } from '../../../App'

const ComponentF = () => {
  const countContext= useContext(CounterContext)

  return (
    <div>
      <button onClick={() => countContext.countDispatch('add')}>addF</button>
      <button onClick={() => countContext.countDispatch('reduce')}>reduceF</button>
      <button onClick={() => countContext.countDispatch('reset')}>resetF</button>
    </div>
  )
}

export default ComponentF
