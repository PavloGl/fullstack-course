import React, { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const key = process.env.REACT_APP_API_KEY

const Weather = ({ country }) => {

    const url = `http://api.apixu.com/v1/current.json?key=${key}&q=${country}`

    const [weather, setWeather] = useState({
        current: {
            temp_c: '',
            wind_kph: '',
            wind_dir: '',
            localtime: '',
            condition: {
                icon: ''
            }
        },
        location: {
            localtime: ''
        }
    })

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setWeather(response.data)
            })
    }, [url])

    return (
        <>
            <h1>Weather in {country}</h1>
            <p>temperature: {weather.current.temp_c}&#8451;</p>
            <img src={weather.current.condition.icon} alt='weather_ico' style={imgStyle}/>
            <p>wind: {weather.current.wind_kph} direction {weather.current.wind_dir}</p>
            <p>Local time: {weather.location.localtime}</p>
        </>
    )
}

const imgStyle = {
    width: 100,
    height: 100
  }

export default Weather

