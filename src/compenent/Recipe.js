import React from 'react'

function Recipe({ props }) {
  // console.log(props.recipe)
  return (
    <div className="recipe">
      <img className="img-label" src={props.recipe.image} alt="" />
      <h6>{props.recipe.label}</h6>
    </div>
  )
}

export default Recipe
