import React, { useState } from 'react'
import '../App.css'

function SearchBar(props) {
  const [value, setValue] = useState('')

  function submitHandler(e) {
    e.preventDefault()
  }

  return (
    <div className="searchbar-compenent">
      <div className="searchbar-wrapper">
        <form onSubmit={submitHandler}>
          <div className="input-wrapper">
            <input
              type="text"
              className="input-form textInput"
              placeholder="search for recipe ..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input type="submit" className="input-searchbar submit" value=">" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
