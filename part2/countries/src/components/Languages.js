import React from 'react'

const Languages = ({ languages }) => {

    const langList = () => languages.map(language => {
        return <li key={language.iso639_2}>{language.name}</li>
    })

    return (
        <ul>
            {langList()}
        </ul>
    )
}

export default Languages