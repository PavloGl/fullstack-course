import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackHeader = () => <h1>give feedback</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticHeader = () => <h1>statistics</h1>

const ShowResult = (props) => <div>{props.text} {props.good}</div>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <FeedbackHeader />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <StatisticHeader />
      <ShowResult text={"good"} good={good} />
      <ShowResult text={"neutral"} good={neutral} />
      <ShowResult text={"bad"} good={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)