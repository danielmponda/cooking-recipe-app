import React from 'react'
import Recipe from './Recipe'

function Recipes({ reciper }) {
  console.log(reciper)
  return (
    <div className="recipe-wrapper">
      {reciper.map((recipe, index) => (
        <Recipe key={index} props={recipe} />
      ))}
    </div>
  )
}

export default Recipes
