import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
       {props.part} {props.exercise}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      { parts.map(item => <Part part={item.name} exercise={item.exercises} /> )}
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <>
      <p>Number of exercises {parts.reduce((a,b) => { return a + b.exercises }, 0)}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))