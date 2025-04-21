import React from 'react'

const Post = (props) => {

  return (
    <div>
        <p>{props.author}</p>
        <p>{props.message}</p>
    </div>
  )
}

export default Post;