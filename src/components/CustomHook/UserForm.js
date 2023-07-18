import React, {useState} from 'react'
import useInput from './useInput'

function UserForm() {

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name: </label>
          <input type='text' {...bindFirstName}></input>
        </div>
        <div>
          <label>Last name: </label>
          <input type='text' {...bindLastName}></input>
        </div>
        <div><button type='submit'>Submit</button></div>
      </form>
    </div>
  )
}

export default UserForm
