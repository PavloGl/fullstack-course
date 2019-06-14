import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const VoteInfo = ({counter}) => {
  return <div>has {counter} votes</div>
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const incrementVotes = (pos, arr) => {
  const result = [...arr]
  ++result[pos]
  return result
}

const prepareArray = (length) =>  new Array(length).fill(0)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(prepareArray(props.anecdotes.length))

  return (
    <>
      <div>
        {props.anecdotes[selected]}

        <VoteInfo counter={votes[selected]} />

        <Button handleClick={() => {
          setVotes(incrementVotes(selected, votes))}
          } text="vote"/>

        <Button handleClick={() => {
          setSelected(getRandomInt(props.anecdotes.length))}
          } text="next anecdote"/>
        </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)