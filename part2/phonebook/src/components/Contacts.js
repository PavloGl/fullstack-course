import React from 'react'
import Person from './Person'

const listStyle = {
  listStyle: 'none',
  padding: 0
}

const sum = (el) => el.reduce((a) => a + 1, 0)

const Contacts = ({ contacts, removeContacts }) => {

  const personList = () => contacts.map(person =>
    <Person
      key={person.id}
      person={person}
      id={person.id}
      removeContacts={removeContacts}
    />
  )

  if (sum(contacts) === 0) {
    return <h5>There is no such contact</h5>
  }

  return (
    <ul style={listStyle}>
      {personList()}
    </ul>
  )
}

export default Contacts