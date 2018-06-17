import React from 'react'

const Recipe = (recipe) => {

    const { markdownRemark } = recipe.data
    const {frontmatter} = markdownRemark
    return <div>
        <h6>{frontmatter.date}</h6>
        <h1>{frontmatter.title}</h1>
        <img src={frontmatter.photo}/>
        <div>
            <h1>Recipe:</h1> <br/>
            <p>{frontmatter.recipe}</p>
        </div>
    </div>
}


export const pageQuery = graphql`
    query RecipeQuery ($id: String!) {
  markdownRemark(id: { eq: $id })  {
    id
    frontmatter {
      title
      path
      date
      photo
      recipe
    }
  }
}
`

export default Recipe;
