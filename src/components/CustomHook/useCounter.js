import {useState} from 'react'

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount)

  const countHandler = (val) => {
    if (val === 0){
      setCount(initialCount)
    }
    else {
      setCount(prevCount => {return prevCount + val})
    }
  }

  return [count, countHandler]
}

export default useCounter
