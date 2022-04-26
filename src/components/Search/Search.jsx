import React from 'react'

const Search = ({searchInput, search, handleSearch}) => {
  return (
    <>
        <div className="search">
          <label htmlFor="searchInput">Busca a tu personaje favorito.</label>
            <input 
            type="text" 
            id={'searchInput'}
            ref={searchInput} 
            placeholder={'Buscar'} 
            value={search} 
            onChange={handleSearch} />
        </div>
    </>
  )
}

export default Search