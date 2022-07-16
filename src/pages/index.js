//general
import React from "react"
//components
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import ListOfPosts from "../components/ListOfPosts/ListOfPosts"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ListOfPosts />
  </Layout>
)

export default IndexPage
