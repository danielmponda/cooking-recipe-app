import React from 'react'
import Search from './Search'
import Recipes from './Recipes'
import Pagination from './Pagination'

function Home({
  currentPage,
  recipesPerPage,
  search,
  setSearch,
  recipes,
  setCurrentPage,
}) {
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  // Change Page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }
  const view = 'search'
  return (
    <div className="home-page">
      <Search search={search} setSearch={setSearch} />
      <Recipes reciper={currentRecipe} view={view} />
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home
