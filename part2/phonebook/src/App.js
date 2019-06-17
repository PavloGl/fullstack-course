import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8)
    return v.toString(16)
  })
}

const App = () => {
  const [persons, setPersons] = useState([
    // {
    //   name: 'Arto Hellas',
    //   number: 32133213,
    //   id: '4eefb801-47aa-4c8a-bc8c-dc59699933ee'
    // },
    // {
    //   name: 'Artor Hellars',
    //   number: 123345,
    //   id: '4rrfb801-47aa-4c8a-bc8c-dc59699933rr'
    // },
    // {
    //   name: 'Parov Stelar',
    //   number: 78987987,
    //   id: 'ae845077-3417-4429-bb2b-c7d74037b7cd'
    // },
    // {
    //   name: 'Dante Alighieri',
    //   number: 66666666,
    //   id: '00d1a544-2806-4157-91b1-8920aac10771'
    // }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

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
      <Filter newSearch={newSearch} handleSearch={handleSearch} />
      <h2>Add new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Contacts contacts={searchToShow} />
    </div>
  )
}

export default App