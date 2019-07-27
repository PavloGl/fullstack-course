const express = require('express')
const app = express()

const notes = require('./persons.json')

const countPersons = () => notes.persons.reduce(a => a + 1, 0)

app.get('/api/persons', (req, res) => {
  res.json(notes)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  note = notes.persons.filter(n => n.id === id)
  if (note.length === 1) res.json(note)
  res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  note = notes.persons.filter(n => n.id === id)
  if (note.length === 0) res.status(404).end()
  notes.persons = notes.persons.filter(n => n.id !== id)
  res.status(200).end()
})

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${countPersons()} people \n${new Date()}`)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})