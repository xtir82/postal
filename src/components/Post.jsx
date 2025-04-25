import React from 'react'
import styles from './Post.module.css'

const Post = ({author, message}) => {

  return (
    <li className={styles.post}>
        <p className={styles.author}>{author}</p>
        <p className={styles.message}>{message}</p>
    </li>
  )
}

export default Post;