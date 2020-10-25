import React from 'react'
import Recipe from './Recipe'
import Related from './RelatedRecipes'
import { Link } from 'react-router-dom'

function Recipes({ reciper, view }) {
  console.log(view)

  const related = reciper.filter((reps, index) => {
    if (index < 4) {
      return true
    }
  })

  console.log(related)

  if (view === 'search') {
    return (
      <div className="recipe-wrapper" id="recipe-wrapper">
        {reciper.map((recipe, index) => (
          <Link key={index} to={`/recipeview/${recipe.recipe.label}`}>
            <Recipe key={index} props={recipe} />
          </Link>
        ))}
      </div>
    )
  } else {
    return (
      <div className="recipe-wrapper" id="recipe-wrapper">
        {related.map((recipe, index) => (
          <Link key={index} to={`/recipeview/${recipe.recipe.label}`}>
            <Related key={index} props={recipe} />
          </Link>
        ))}
      </div>
    )
  }
}

export default Recipes
