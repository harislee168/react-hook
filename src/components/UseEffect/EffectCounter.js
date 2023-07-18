import React, {useState, useEffect} from 'react'



const EffectCounter = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('use effect')
    document.title = `You clicked ${count} times`
  }, [count])

  const countHandler = () => {
    setCount(prevCount => {return prevCount+1})
  }

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <input type='text' name='name' value={name} onChange={nameHandler}></input>
      <button onClick={countHandler}>You clicked {count} times</button>
    </div>
  )
}

export default EffectCounter
