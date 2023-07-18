import React, {useState, useMemo} from 'react'

const UseMemoCounter = () => {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const addCounterOne = () => {
    setCounterOne(prevCounter => {return prevCounter + 1})
  }

  const addCounterTwo = () => {
    setCounterTwo(prevCounter => {return prevCounter + 1})
  }

  const isEven = useMemo (() => {
    let i = 0
    while (i < 200000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={addCounterOne}>Count: {counterOne}</button>
        <span>{isEven? 'Even':'Odd'}</span>
      </div>
      <div>
        <button onClick={addCounterTwo}>Count: {counterTwo}</button>
      </div>
    </div>
  )
}

export default UseMemoCounter
