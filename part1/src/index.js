import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackHeader = () => <h1>give feedback</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticHeader = () => <h1>statistics</h1>

const ShowBasic = (props) => <div>{props.text} {props.good}</div>

const sum = (items) => items.reduce((a, b) => (a + b), 0)

const ShowTotal = ({items}) => <div>all {sum(items)} </div>

const ShowAverage = ({items}) => <div>average {sum(items) / items.length} </div>

const ShowPositivePercentage = ({items}) => {
  if(items[0] === 0)
    return <div>positive 0%</div>
  return <div>positive {items[0]/sum(items)}% </div>
}

const Statistics = ({items}) => {
  const [good, neutral, bad] = items
  if(sum(items) ===0)
    return (
      <>
        <StatisticHeader />
        <div>No feedback given</div>
      </>
    )

  return (
    <>
      <StatisticHeader />
      <ShowBasic text={"good"} good={good} />
      <ShowBasic text={"neutral"} good={neutral} />
      <ShowBasic text={"bad"} good={bad} />
      <ShowTotal items={[good, neutral, bad]} />
      <ShowAverage items={[good, neutral, bad]} />
      <ShowPositivePercentage items={[good, neutral, bad]} />
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
      <Statistics items={[good, neutral, bad]}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)