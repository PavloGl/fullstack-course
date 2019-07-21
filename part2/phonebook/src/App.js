import React, { useState, useEffect } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import contactService from './services/contact'

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8)
    return v.toString(16)
  })
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    contactService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (newName.trim(' ').length === 0) return
    if (newNumber.trim(' ').length === 0) return
    if (validateName() !== undefined) {
      updateContact(event)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: uuidv4()
    }

    contactService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
      .catch(err => {
        console.error('Error on adding contact')
      })
  }

  const removeContacts = (event) => {
    const message = `Are you sure that u want delete ${event} contact?`
    const deleteContact = window.confirm(message)

    if (deleteContact) {
      const [contact] = getContactId(event)
      const { id } = contact

      contactService
        .remove(id)
        .then(response => {
          setPersons(persons
            .filter(person => person.name !== event)
          )
        })
        .catch(err => {
          console.error('Error on removing contact')
        })

      setNewName('')
      setNewNumber('')
      return
    }
  }

  const updateContact = () => {
    const message = `${newName} is already added to phonebook,
      replace the old number with a new one?`
    const updateNumber = window.confirm(message)

    if (updateNumber) {
      const [contact] = getContactId(newName)
      const { id } = contact

      const personObject = {
        name: newName,
        number: newNumber,
        id
      }

      contactService
        .update(personObject)
        .then(response => {
          setPersons(persons
            .map(person => person.name === response.name ? response : person))
        })
        .catch(err => {
          console.error('Error on updating contact')
        })

      setNewName('')
      setNewNumber('')
      return
    }
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

  const getContactId = (name) => {
    return persons
      .filter(person => person.name === name)
  }

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
      <Contacts
        contacts={searchToShow}
        removeContacts={removeContacts}
      />
    </div>
  )
}

export default App