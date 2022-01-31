import React, {useState, useEffect} from 'react'

const UserData = (props) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    (async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await result.json()
      setComments(data)
    })()
  }, [])

  return (
    <div>
      {comments.map(comment => {
        const {name, body, id} = comment
        return (
          <div key={id}>
            <p style={{fontWeight: 'bold'}}>{name}</p>
            <p> {body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default  UserData