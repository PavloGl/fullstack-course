import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import ShowResult from './components/ShowResult'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Search
        search={search}
        handleSearch={handleSearch} />
      <ShowResult search={search} countries={countries} />
    </div>
  );
}

export default App
