const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const posts = await graphql(`
    {
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

  paginate({
    createPage,
    items: posts.data.allMarkdownRemark.nodes,
    itemsPerPage: 6,
    pathPrefix: "/",
    component: path.resolve(`./src/templates/index.js`),
  })

  posts.data.allMarkdownRemark.nodes.forEach(post => {
    const { url } = post.frontmatter
    actions.createPage({
      path: `/${url}`,
      component: path.resolve(`./src/templates/Post/Post.jsx`),
      context: url,
    })
  })
}
