//general
import React from "react"
import { graphql } from "gatsby"
//components
import Layout from "../../components/Layout/Layout"
//styles
import * as styles from "./styles.module.scss"

const Post = ({ data }) => {
  const html = data.markdownRemark.html
  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <section className={styles.post}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{post.pagetitle}</h2>

          <div
            className={styles.mainInfo}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query GetPost($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      frontmatter {
        pagetitle
        preview_image
        dateofcreate
      }
      html
    }
  }
`
