import React, { useState } from 'react'
import * as Icons from 'react-icons/fa'
import '../App.css'

function Search({ search, setSearch }) {
  const [quary, setQuary] = useState('')

  function submitHandler(e) {
    e.preventDefault()
    if (!quary) {
      console.log('no value')
    } else {
      setSearch(quary)
      setQuary('')
    }
  }

  return (
    <div className="searchbar-compenent">
      <div className="search-wrapper">
        <div className="searchbar-wrapper">
          <form onSubmit={submitHandler}>
            <div className="input-wrapper">
              <input
                type="text"
                className="input-form textInput"
                placeholder="search for recipe ..."
                value={quary}
                onChange={(e) => setQuary(e.target.value)}
              />
              <button type="submit" className="input-searchbar submit">
                {' '}
                <Icons.FaSearch />{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
