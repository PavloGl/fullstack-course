import React from 'react'

const Stats = ({parts}) => {
  return (
    <ul>
      <li>
        total of {parts.reduce((a, b) =>
           a + b.exercises, 0)} exercises
      </li>
    </ul>
  )
}

export default Stats