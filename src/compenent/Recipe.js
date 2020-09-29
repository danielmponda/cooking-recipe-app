import React from 'react'

function Recipe({ props }) {
  // console.log(props.recipe)
  return (
    <div className="recipe">
      <div>
        {' '}
        <h6>{props.recipe.label}</h6>
      </div>

      <img className="img-label" src={props.recipe.image} alt="" />
    </div>
  )
}

export default Recipe
