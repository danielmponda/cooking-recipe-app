import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Home from './component/HomePage'
import RecipeView from './component/RecipeViewPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  const APP_ID = 'dffecd49'
  const APP_KEY = '06bd1a0e0b7da0e3bb098a6f14a3f394'

  const [recipes, setRecipes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(10)

  const [search, setSearch] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [search])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=24`
    )
    const data = await response.json()
    setRecipes(data.hits)
  }

  return (
    <div className="container">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                recipes={recipes}
                search={search}
                setSearch={setSearch}
                recipesPerPage={recipesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route exact path="/recipeview" component={RecipeView} />
          <Route
            exact
            path="/recipeview/:id"
            render={({ match }) => (
              <RecipeView id={match.params.id} recipes={recipes} />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
