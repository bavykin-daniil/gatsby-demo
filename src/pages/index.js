//general
import React from "react"
//templates
import ListOfPosts from "../templates/ListOfPosts/ListOfPosts"
//components
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ListOfPosts />
  </Layout>
)

export default IndexPage
