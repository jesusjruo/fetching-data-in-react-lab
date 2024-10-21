import React from 'react';

const Search = ({ handleSearch }) => {
    return (
          <>
               <div className='container'>
                    <h2>Search</h2>
                    <form onSubmit={handleSearch}>
                         <label htmlFor="name">Starship Name:</label>
                         <input name="name"/>
                         <button>Search</button>
                    </form>
               </div>
          </>
    )
}

export default Search