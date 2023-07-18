import React from 'react'

const CallbackButton = (props) => {
  console.log(`Callback title ${props.children}`)
  return (
    <div>
      <button onClick={props.handler}>{props.children}</button>
    </div>
  )
}

export default React.memo(CallbackButton)
