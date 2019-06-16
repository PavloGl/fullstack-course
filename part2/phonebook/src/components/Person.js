import React from 'react'

const Person = ({ person: {name, number} }) =>
    <li>{name} {number}</li>

export default Person