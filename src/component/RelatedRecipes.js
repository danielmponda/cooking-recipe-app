import React from 'react'

function Related({ props }) {
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
      <div className="img-label">
        {props.recipe.image ? (
          <img className="recipe-img" alt="pic" src={props.recipe.image} />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  )
}

export default Related
