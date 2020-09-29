import React, { useEffect, useState } from 'react'
import SearchBar from './compenent/SearchBar'
import Header from './compenent/Header'
import Recipes from './compenent/Recipes'
import Pagination from './compenent/Pagination'

import './App.css'

function App() {
  const APP_ID = 'dffecd49'
  const APP_KEY = '06bd1a0e0b7da0e3bb098a6f14a3f394'

  const [recipes, setRecipes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(10)

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`
    )
    const data = await response.json()
    setRecipes(data.hits)
  }

  // Get current poss
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  // Change page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container">
      <Header />
      <SearchBar />
      <Recipes reciper={currentRecipe} />
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App
