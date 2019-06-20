import React from 'react'
import Country from './Country'
import CountryInfo from './CountryInfo'

const ShowResult = ({ search, countries, detailInfo, setDetailInfo }) => {

  const searchResult = () =>
    countries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )


  const sum = (result) => result.reduce((a) => a + 1, 0)

  const checkInfo = () => {
    if (detailInfo === '') return

    return <CountryInfo country={countries.filter(a => a.alpha3Code === detailInfo)} />
  }

  const showResult = () => {
    const result = searchResult()
    const count = sum(result)

    if (count > 10)
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )

    if (count === 1) {
      return (
        <CountryInfo
          country={result} />
      )
    }

    if (count === 0) {
      return (
        <div>There is no such country</div>
      )
    }

    return (
      <>
        <ul>
          {result.map((res) =>
            <Country
              key={res.alpha3Code}
              country={res}
              setDetailInfo={setDetailInfo}
              kid={res.alpha3Code}
            />
          )}
        </ul>
        {checkInfo()}
      </>
    )
  }

  return (
    showResult()
  )
}


export default ShowResult