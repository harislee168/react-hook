import React, { useState } from "react"


const StateObject = () => {
  const [name, setName] = useState({firstName: '', lastName: ''})

  const changeNameHandler = (e) => {
    const fieldName = e.target.name
    setName({...name, [fieldName]: e.target.value})
  }

  return (
    <div>
      <form>
        <div>
          <label>First Name: </label>
          <input type='text' name='firstName' value={name.firstName} onChange={changeNameHandler}></input>
        </div>
        <div>
          <label>Last Name: </label>
          <input type='text' name='lastName' value={name.lastName} onChange={changeNameHandler}></input>
        </div>
        <div>My first name is {name.firstName}</div>
        <div>My last name is {name.lastName}</div>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default StateObject
