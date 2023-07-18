import React, {useState, useEffect} from 'react'
import useDocumentTitle from './useDocumentTitle'

const DocTitleTwo = () => {
  const [count, setCount] = useState(0)

  useDocumentTitle(count)

  const addCountHandler = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={addCountHandler}>Add Count {count}</button>
    </div>
  )
}

export default DocTitleTwo
