import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {
  // const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idButton, setIdButton] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
    .then(response => {
      console.log(response)
      setPost(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [idButton])

  const idHandler = (e) => {
    setId(e.target.value)
  }

  const buttonClickHandler = () => {
    setIdButton(id)
  }

  return (
    <div>
      <div>
        <label>ID input: </label>
        <input type='text' value={id} onChange={idHandler}></input>
        <button onClick={buttonClickHandler}>Submit</button>
      </div>
      <div>
        {post.title}
      </div>
      {/* <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul> */}
    </div>
  )
}

export default DataFetching
