import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (currentState, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something is wrong',
        post: {}
      }
  }
}

const ReducerDataFetching = () => {
  const [newState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(response => {
      dispatch({type: 'FETCH_SUCCESS', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR'})
    })
  }, [])

  return (
    <div>
        {newState.loading? 'Loading': newState.post.title}
        {newState.error? newState.error: null}
    </div>
  )
}

export default ReducerDataFetching
