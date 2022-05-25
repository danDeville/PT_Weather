import { Fab } from '@mui/material'
import React, { useEffect, useState, useCallback } from 'react'
import CardWeather from '../components/CardWeather'
import LoadingSpinner from '../components/LoadingSpinner'
import AddIcon from '@mui/icons-material/Add'
import DialogCrearUser from '../components/DialogCrearUser'

const Home = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  const setLocalStorage = value => {
    try {
      setCity(value)
      window.localStorage.setItem('city', JSON.stringify(value))
    }
    catch (error) {
      console.error(error)
    }
  }
  const handleChange = (e) => {
    setLocalStorage(e.target.value)
  }

  const getLocation = async () => {
    try {
      setLoading(true)
      const BUSCADOR = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZGFuZGV2aWxsZSIsImEiOiJjbDNpd3Q0N3gxaDZ5M2JwZzNyd2xhcnpsIn0.jqksRZQ4YK-oZaX_qa96nQ`
      const response = await fetch(BUSCADOR)
      const data = await response.json()
      const latitude = data?.features[0]?.center[1]
      const longitude = data?.features[0]?.center[0]
      if (data.features.length > 0) {
        const URL_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&language=es&appid=a2e0be32ce7c139b60a705049d2723f0`
        const URL_FORECAST = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=current&appid=a2e0be32ce7c139b60a705049d2723f0`
        const response_weather = await fetch(URL_API)
        const data_weather = await response_weather.json()
        const response_forecast = await fetch(URL_FORECAST)
        const data_forecast = await response_forecast.json()
        setWeatherData({
          weather: data_weather,
          forecast: data_forecast
        })
      }
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getLocation()
  }, [city])

  useEffect(() => {
    const city = JSON.parse(window.localStorage.getItem('city'))
    if (city !== '') {
      setCity(city)
      getLocation()
    }
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center gap-4 w-full">
        <input
          name="search"
          className="
            w-5/6 h-9
            px-3 rounded-md
            text-primary
            bg-background outline-0
            border border-primary
          "
          placeholder="Buscar ciudad....."
          value={city}
          onChange={handleChange}
        />

        <div className="text-right w-1/6">
          <DialogCrearUser />
        </div>
      </section>

      <section>
        {loading ? (<LoadingSpinner />) : (
          <>
            {weatherData ? (
              <CardWeather
                weather={weatherData.weather}
                forecast={weatherData.forecast}
                city={city}
              />
            ) : (
              <h1>Sin datos</h1>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default Home