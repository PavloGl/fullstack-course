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

const CurrentAnecdoteHeader = () => <h1>Anecdote of the day</h1>

const MostVotesAnecdoteHeader = () => <h1>Anecdote with most votes</h1>

const MostVotedAnecdote = ({anecdotes, votes}) => <div>{obtainMostVotedAnecdote(anecdotes,votes)}</div>

const obtainMostVotedAnecdote = (anecdotes, votes) => {
  return anecdotes[votes.findIndex(x => x === Math.max(...votes))]
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
        <CurrentAnecdoteHeader />

        {props.anecdotes[selected]}

        <VoteInfo counter={votes[selected]} />

        <Button handleClick={() => {
          setVotes(incrementVotes(selected, votes))}
          } text="vote"/>

        <Button handleClick={() => {
          setSelected(getRandomInt(props.anecdotes.length))}
          } text="next anecdote"/>

        <MostVotesAnecdoteHeader />

        <MostVotedAnecdote anecdotes={props.anecdotes} votes={votes}/>
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