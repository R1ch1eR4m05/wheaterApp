import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import CardWeather from './components/CardWeather'
import Loader from './components/Loader'

function App() {
  const [count, setCount] = useState(0)


      const [coords, setCoords] = useState()
      const [weather, setWeather] = useState()
      const [isLoading, setIsLoading] = useState(true)
      const [isCelsius, setIsCelsius] = useState(true)
      const [temp, setTemp] = useState()

      useEffect(() => {

        const success = pos => {
          const lat = pos.coords.latitude
          const lon = pos.coords.longitude
          setCoords({lat, lon})
        }
        navigator.geolocation.getCurrentPosition(success)

      }, [])

      useEffect(() => {
        if (coords !== undefined) {
          const API_KEY = 'bea12794a649315f46193d9177e76128'
          const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
          
          axios.get(URL)
            .then(res => {
              setWeather(res.data)
              setIsLoading(false)
              const celsius = res.data.main.temp - 273.15  
              const fahren = celsius * 1.8 + 32 

              setTemp({celsius, fahren})
              
            })
            .catch(err => console.log(err))
        }
      }, [coords])
      
      const change = () => setIsCelsius(!isCelsius)



    return (
    <div className="App">
      {
        isLoading ? 
          <Loader />
        :
          <CardWeather 
              weather={weather} 
              temp={temp} 
              isCelsius={isCelsius} 
              change={change}
          />
      }
      
    </div>
  )
}

export default App
