import React from 'react'
import Recipe from './Recipe'
import { Link } from 'react-router-dom'

function Recipes({ reciper }) {
  console.log(reciper)
  return (
    <div className="recipe-wrapper" id="recipe-wrapper">
      {reciper.map((recipe, index) => (
        <Link key={index} to={`/recipeview/${recipe.recipe.label}`}>
          <Recipe key={index} props={recipe} />
        </Link>
      ))}
    </div>
  )
}

export default Recipes
