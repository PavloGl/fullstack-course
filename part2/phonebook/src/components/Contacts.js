import React from 'react'
import Person from './Person'

const listStyle = {
  listStyle: 'none',
  padding: 0
}

const Contacts = ({ contacts }) => {

  const personList = () => contacts.map(person =>
    <Person
      key={person.id}
      person={person}
    />
  )

  return (
    <ul style={listStyle}>
      {personList(contacts)}
    </ul>
  )
}

export default Contacts