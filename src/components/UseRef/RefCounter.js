import React, {useState, useEffect, useRef} from 'react'

const RefCounter = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => {return prevCount + 1})
    }, 1000);

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  const stopTimerHandler = () => {
    clearInterval(intervalRef.current)
  }

  return (
    <div>
      <div>Count = {count}</div>
      <div><button onClick={stopTimerHandler}>Stop timer</button></div>
    </div>
  )
}

export default RefCounter
