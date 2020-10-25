import React, { useEffect } from 'react'
import Recipes from './Recipes'

function RecipeView({ id, recipes }) {
  useEffect(() => {
    // console.log(id)
    // console.log(recipes)
  })

  let todosArray = []

  todosArray = recipes.filter((e) => e.recipe.label === id)

  const related = recipes.filter((e) => e.recipe.label !== id)

  console.log(todosArray)

  const todosArrayFilter = todosArray.filter((reps, index) => {
    console.log(index)
    if (index == 0) {
      return true
    }
  })
  console.log(todosArrayFilter)
  const view = 'ralated'
  return (
    <div className="recipeview-page">
      <div className="recipeview-compenent"></div>

      {todosArrayFilter.map((element, index) => (
        <div key={index} className="item-wrapper">
          <div className="item-sec-a">
            <div className="view-img">
              <img
                className="img-label-view"
                alt="pic"
                src={element.recipe.image}
              />
            </div>

            <div className="recipe-view">
              <div className="recipe-info">
                <h4>{element.recipe.label}</h4>
                <p className="calories">
                  Calories : {element.recipe.calories.toFixed(2)}
                </p>
                <p className="deit">
                  {' '}
                  {element.recipe.healthLabels.join(' | ')}
                </p>
              </div>
            </div>
          </div>
          <div className="item-sec-b">
            <span className="ingredient-title">
              {element.recipe.ingredientLines.length} Ingredient
            </span>
            <div className="recipe-view-ingr">
              <ul>
                {element.recipe.ingredientLines.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {related ? <div className="relatedtitle">also try </div> : null}

      <Recipes reciper={related} view={view} />
    </div>
  )
}

export default RecipeView
