const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
    const { createNodeField } = boundActionCreators
    if(node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent)
        createFilePath({node, getNode, basePath: 'pages'})
        createNodeField({
            node,
            name: 'slug',
            value: node.frontmatter.path,
        })
    }
}

exports.createPages = ({graphql, boundActionCreators}) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(
            `    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              recipe
              photo
            }
            fields {
              slug
            }
          }
        }
      }
    }
            `
        ).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                console.log(createPage({
                    path: `${node.fields.slug}`,
                    component: path.resolve('./src/components/templatesMD/Recipe.js'),
                    context: {
                        id: node.id,
                    },
                }))
            })
            resolve()
        })
    })
}
