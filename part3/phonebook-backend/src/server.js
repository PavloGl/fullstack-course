const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const notes = require('./persons.json')

const RANDOM_RANGE = 999999999

const countPersons = () => notes.persons.reduce(a => a + 1, 0)
const isNameInContacts = (name) => notes.persons.find(n => n.name === name)

app.use(bodyParser.json())

morgan.token('contact', function getContact(req, res) {
  if (req.body.name && req.body.number)
    return JSON.stringify({ name: req.body.name, number: req.body.number })
})

const loggerFormat = ':method :url :status :res[content-length] - :response-time ms :contact'
app.use(morgan(loggerFormat))

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

app.post('/api/persons', (req, res) => {
  let note = req.body

  if (!note.name || !note.number) res.status(400).end()
  if (isNameInContacts(note.name)) {
    res.status(400).json({ error: 'name must be unique' })
    return
  }

  note.id = Math.floor(Math.random() * RANDOM_RANGE)
  notes.persons = notes.persons.concat(note)
  res.json(notes)
})

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${countPersons()} people \n${new Date()}`)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})