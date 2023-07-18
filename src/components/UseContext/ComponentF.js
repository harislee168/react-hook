import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../../App'

const ComponentF = () => {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      user is {user} and channel is {channel}
    </div>
  )
}

export default ComponentF
