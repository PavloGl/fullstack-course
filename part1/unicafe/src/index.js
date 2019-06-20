import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackHeader = () => <h1>give feedback</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticHeader = () => <h1>statistics</h1>

const ShowBasic = (props) => <tr><td>{props.text} {props.good}</td></tr>

const sum = (items) => items.reduce((a, b) => (a + b), 0)

const ShowTotal = ({ items }) => <tr><td>all {sum(items)} </td></tr>

const ShowAverage = ({ items }) => <tr><td>average {sum(items) / items.length} </td></tr>

const ShowPositivePercentage = ({ items }) => {
  if (items[0] === 0)
    return <tr><td>positive 0%</td></tr>
  return <tr><td>positive {items[0] / sum(items)}% </td></tr>
}

const Statistics = ({ items }) => {
  const [good, neutral, bad] = items
  if (sum(items) === 0)
    return (
      <>
        <StatisticHeader />
        <div>No feedback given</div>
      </>
    )

  return (
    <>
      <StatisticHeader />
      <table>
        <tbody>
          <ShowBasic text={"good"} good={good} />
          <ShowBasic text={"neutral"} good={neutral} />
          <ShowBasic text={"bad"} good={bad} />
          <ShowTotal items={[good, neutral, bad]} />
          <ShowAverage items={[good, neutral, bad]} />
          <ShowPositivePercentage items={[good, neutral, bad]} />
        </tbody>
      </table>
    </>
  )
}

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
      <Statistics items={[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)