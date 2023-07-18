import React from 'react'

const CallbackTitle = () => {
  console.log('Callback title')
  return (
    <h2>Callback Title</h2>
  )
}

export default React.memo(CallbackTitle)
