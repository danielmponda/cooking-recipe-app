import React from 'react'

function Recipe({ props }) {
  // console.log(props.recipe)
  return (
    <div className="recipe">
      <div className="recipe-info">
        <p className="lable">{props.recipe.label}</p>
        <p className="calories">
          Calories : {props.recipe.calories.toFixed(2)}
        </p>
        <p className="deit"> {props.recipe.healthLabels.join(' | ')}</p>

        {/* {props.recipe.dietLabels
          ? `<p className="deit"> Deit : ${props.recipe.dietLabels}</p>`
          : null} */}
      </div>
      <img className="img-label" src={props.recipe.image} alt="" />
    </div>
  )
}

export default Recipe
