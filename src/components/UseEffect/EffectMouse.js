import React, {useState, useEffect} from 'react'

const EffectMouse = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('log mouse position')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('use effect triggered')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('return use effect')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      Mouse X - {x} and Y - {y}
    </div>
  )
}

export default EffectMouse
