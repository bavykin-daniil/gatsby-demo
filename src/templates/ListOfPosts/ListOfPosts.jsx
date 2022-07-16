//general
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//components
import PostItem from "./PostItem/PostItem"
//styles
import * as styles from "./styles.module.scss"

const ListOfPosts = () => {
  const query = useStaticQuery(graphql`
    query GetPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            description
            pagetitle
            preview_image
            title
            url
          }
          id
        }
      }
    }
  `)

  const posts = query.allMarkdownRemark.nodes

  return (
    <section className={styles.posts}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My posts</h2>

        <ul className={styles.list}>
          {posts.map(post => (
            <li className={styles.item}>
              <PostItem post={post.frontmatter} key={post.id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ListOfPosts
