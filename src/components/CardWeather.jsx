import React from 'react'

const CardWeather = ({weather, temp, isCelsius, change }) => {


  return (
    <div className='card'>
       <h2>{weather?.name}</h2>
       <h3>{weather?.sys.country}</h3>
        <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather condition" />
        <h3>{weather?.weather[0].description}</h3>
        <h3>Temperature: {isCelsius ? temp?.celsius : temp?.fahren } { isCelsius ? '°C':'°F' }</h3>
      <button className='btnTemp' onClick={change}>Change {isCelsius ? 'to Fahrenheit': 'to Celsius'}</button>
    </div>
  )
}

export default CardWeather