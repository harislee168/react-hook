import React, {useState, useCallback} from 'react'
import CallbackCount from './CallbackCount'
import CallbackTitle from './CallbackTitle'
import CallbackButton from './CallbackButton'

const CallbackParent = () => {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAgeHandler = useCallback(() => {
    setAge(prevAge => {return prevAge + 1})
  }, [age])

  const incrementSalaryHandler = useCallback(() => {
    setSalary(prevSalary => {return prevSalary + 1000})
  }, [salary])

  return (
    <div>
      <CallbackTitle />
      <CallbackCount name='Age' value={age}/>
      <CallbackButton handler={incrementAgeHandler}>Increase age</CallbackButton>
      <CallbackCount name='Salary' value={salary}/>
      <CallbackButton handler={incrementSalaryHandler}>Increase salary</CallbackButton>
    </div>
  )
}

export default CallbackParent
