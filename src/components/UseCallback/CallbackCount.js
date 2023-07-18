import React from 'react'

const CallbackCount = (props) => {
  console.log(`Callback title ${props.name}`)
  return (
    <div>
      {props.name} - {props.value}
    </div>
  )
}

export default React.memo(CallbackCount)
