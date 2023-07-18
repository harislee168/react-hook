import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      Count: {count}
    </div>
  )
}

export default IntervalHookCounter
