//general
import React from "react"
//components
import Layout from "../components/Layout/Layout"
import ListOfPosts from "../components/ListOfPosts/ListOfPosts"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <ListOfPosts data={data.allMarkdownRemark.nodes} pagers={pageContext} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___dateofcreate], order: DESC }
      skip: $skip
      limit: $limit
    ) {
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
`
