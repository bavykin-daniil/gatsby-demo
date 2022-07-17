//general
import React from "react"
//styles
import styles from "./styles.module.scss"
import { graphql } from "gatsby"

const Post = props => {
  console.log(props)
  return <section></section>
}

export default Post

const query = graphql`
  query GetPost($eq: String = "") {
    markdownRemark(frontmatter: { url: { eq: $eq } }) {
      frontmatter {
        description
        pagetitle
        preview_image
        title
        url
        dateofcreate
      }
    }
  }
`
