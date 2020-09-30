import React from 'react'

function Pagination({ recipesPerPage, totalRecipes, paginate, currentPage }) {
  const pageNumers = []

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumers.push(i)
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
