import React from "react"
import Link from 'gatsby-link'

const Recipes = (recipes) => {
    console.log(recipes)
    const edges = recipes.data.allMarkdownRemark.edges
    return <div>
        <h3>Check out our delicous recipes!</h3>
        <ul>
            {edges.map( recipe  => (
                <li key={recipe.path}>
                    <Link to={recipe.node.frontmatter.path}>{recipe.node.frontmatter.title}</Link>
                </li>
            ))}
        </ul>
    </div>
}


export const pageQuery = graphql`
    query AllRecipesQuery  {
   allMarkdownRemark {
    edges{
      node {
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`

export default Recipes
