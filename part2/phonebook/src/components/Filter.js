import React from 'react'

const Filter = ({ newSearch, handleSearch }) => {

  return (
    <>
      <input value={newSearch}
        onChange={handleSearch} />
    </>
  )
}

export default Filter