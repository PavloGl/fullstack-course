import React, { useState } from 'react'
import Contacts from './components/Contacts'

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8)
    return v.toString(16)
  })
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: 32133213,
      id: '4eefb801-47aa-4c8a-bc8c-dc59699933ee'
    },
    {
      name: 'Artor Hellars',
      number: 123345,
      id: '4rrfb801-47aa-4c8a-bc8c-dc59699933rr'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (validateName() !== undefined) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: uuidv4()
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const searchToShow = newNumber
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const validateName = () => persons.find(p => p.name === newName)


  return (
    <div>
      <h2>Phonebook</h2>
      <input value={newSearch}
        onChange={handleSearch} />
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handlePersonChange} />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts contacts={searchToShow} />
    </div>
  )
}

export default App