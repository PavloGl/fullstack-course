import React from 'react'
import Languages from './Languages'
import Weather from './Weather'

const CountryInfo = ({ country }) => {

  const [countryInfo,] = country

  return (
    <>
      <h1>{countryInfo.name}</h1>
      <div>capital {countryInfo.capital}</div>
      <div>population {countryInfo.population}</div>
      <h3>Languages</h3>
      <Languages
        languages={countryInfo.languages} />
      <img style={imgStyle} src={countryInfo.flag} alt="flag" />
      <Weather country={countryInfo.name} />
    </>
  )
}

const imgStyle = {
  width: 100,
  height: 100
}

export default CountryInfo