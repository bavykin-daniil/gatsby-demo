//general
import React from "react"
import cn from "classnames"
import { Link } from "gatsby"
//components
import PostItem from "./PostItem/PostItem"
//styles
import * as styles from "./styles.module.scss"

const ListOfPosts = ({ data, pagers }, props) => {
  const posts = data
  return (
    <section className={styles.posts}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My posts</h2>

        <ul className={styles.list}>
          {posts.map(post => (
            <li className={styles.item} key={post.id}>
              <PostItem post={post.frontmatter} />
            </li>
          ))}
        </ul>

        <div
          className={cn(styles.pagination, {
            [styles.all]: pagers.previousPagePath && pagers.nextPagePath,
            [styles.prev]: !pagers.nextPagePath,
          })}
        >
          {pagers.previousPagePath && (
            <Link className={styles.link} to={pagers.previousPagePath}>
              Previous
            </Link>
          )}
          {pagers.nextPagePath && (
            <Link className={styles.link} to={pagers.nextPagePath}>
              Next
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default ListOfPosts
