import React from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Country = ({ country, kid, setDetailInfo }) => {

  return (
    <li>
      {country.name}
      <Button
        text='show'
        handleClick={() => setDetailInfo(kid)} />
    </li>
  )
}

export default Country