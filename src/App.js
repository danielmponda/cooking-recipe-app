import React, { useEffect, useState } from 'react'
import SearchBar from './compenent/SearchBar'
import Header from './compenent/Header'
import Recipes from './compenent/Recipes'
import './App.css'

function App() {
  const APP_ID = 'dffecd49'
  const APP_KEY = '06bd1a0e0b7da0e3bb098a6f14a3f394'

  const [recipes, setRecipes] = useState([])

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

  return (
    <div className="container">
      <Header />

      {/* <img class="logo" src={logo} alt="" /> */}
      <SearchBar />
      <Recipes reciper={recipes} />
    </div>
  )
}

export default App
