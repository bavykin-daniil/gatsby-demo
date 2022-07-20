//general
import React from "react"
import { Link } from "gatsby"
//styles
import * as styles from "./styles.module.scss"

const PostItem = ({ post }) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.image}
        src={post.preview_image}
        alt={`This is ${post.title}`}
      />

      <div className={styles.body}>
        <div className={styles.textContent}>
          <span className={styles.title}>{post.pagetitle}</span>
          <span className={styles.description}>{post.description}</span>
        </div>

        <div className={styles.linkContainer}>
          <Link className={styles.link} to={`/${post.url}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostItem
