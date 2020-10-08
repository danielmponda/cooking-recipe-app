import React, { useEffect } from 'react'

function RecipeView({ id, recipes }) {
  useEffect(() => {
    // console.log(id)
    // console.log(recipes)
  })

  let todosArray = []

  todosArray = recipes.filter((e) => e.recipe.label === id)

  return (
    <div className="recipeview-page">
      <div className="recipeview-compenent">
        {todosArray.map((element, index) => (
          <div key={index} className="item-wrapper">
            <div className="item-sec-a">
              <div>
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
              <div className="recipe-view-ingr">
                <h5 className="ingredient-title">
                  {' '}
                  {element.recipe.ingredientLines.length} Ingredient
                </h5>
                <ul>
                  {element.recipe.ingredientLines.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeView
