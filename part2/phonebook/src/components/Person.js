import React from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Person = ({ person: { name, number }, removeContacts }) =>
  <li>{name} {number}
    <Button text='delete'
      handleClick={() => removeContacts(name)}
    />
  </li>

export default Person