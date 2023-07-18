import React, {useState, useEffect} from 'react'
import EffectMouse from './EffectMouse'

const MouseContainer = () => {

  const [display, setDisplay] = useState(true)
  const buttonHandler = () => {
    setDisplay(!display)
  }
  return (
    <div>
      <button onClick={(buttonHandler)}>Toggle display</button>
      {display && <EffectMouse />}
    </div>
  )
}

export default MouseContainer
