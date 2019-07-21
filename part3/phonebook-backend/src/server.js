const express = require('express')
const app = express()

const notes = require('./persons.json')

const countPersons = () => notes.persons.reduce(a => a + 1, 0)

app.get('/api/persons', (req, res) => {
  res.json(notes)
})

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${countPersons()} people \n${new Date()}`)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})