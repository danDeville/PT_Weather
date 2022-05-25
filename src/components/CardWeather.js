// Base
import React from 'react'

// Material UI
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'

const CardWeather = ({ weather, forecast, city }) => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  let hours = today.getHours()
  let minutes = today.getMinutes()
  let amPm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? '0' + minutes : minutes

  const date = day + '/' + month + '/' + year
  let timeDay = hours + ':' + minutes + ' ' + amPm

  // let url = 'https://openweathermap.org/img/w/'
  // let icon = url +(weather.weather[0].icon || '') + '.png'

  return (
    <div className="flex w-full h-[800px] bg-tertiary rounded-md">
      <aside
        className="
          relative
          w-3/12 h-full rounded-l-md
          bg-[url('https://images.unsplash.com/photo-1544111795-fe8b9def73f6?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954')]
          bg-cover
        "
      >
        <section
          className="
            flex flex-col justify-center items-start
            w-full h-full p-4
            bg-black/70 text-white rounded-l-md
          "
        >
          <h3 className="font-bold capitalize text-3xl text-secondary">
            {city}
          </h3>

          <div className="mt-1 mb-16">
            <span>{date} - </span>
            <span>{timeDay}</span>
          </div>

          <h3 className='text-6xl font-light'>
            {((weather.main.temp || 1) - 273.15).toFixed(1)} °C
          </h3>

          <div className="flex items-center gap-2 mt-4">
            {/* <img src={icon} alt="Weather Icon" width="60" /> */}
            <p className="font-semibold">
              {weather.weather[0].description || 'lorem ipsum'}
            </p>
          </div>

          <hr className="bg-white border-t border-cyan-50 w-full"/>

          <div className="w-full mt-5">
            <p className="mb-2 font-medium">
              Temperatura Máx:
              <span className="ml-1 font-light">
                {((weather.main.temp_max || 1) - 273.15).toFixed(1)} °C
              </span>
            </p>
            <p className="mb-2 font-medium">
              Temperatura Mín:
              <span className="ml-1 font-light">
                {((weather.main.temp_min || 1) - 273.15).toFixed(1)} °C
              </span>
            </p>
            <p className="mb-2 font-medium">
              Sensación Térmica:
              <span className="ml-1 font-light">
                {((weather.main.feels_like || 1) - 273.15).toFixed(1)} °C
              </span>
            </p>
            <p className="font-medium">
              Humedad:
              <span className="ml-1 font-light">
                {(weather.main.humidity || 0)}%
              </span>
            </p>
          </div>
        </section>
      </aside>

      <main className="w-9/12 px-4 py-6">
        <h3 className="mb-4 text-2xl font-medium text-primary">
          Forecast for 8 days
        </h3>

        <section className="grid grid-cols-4 grid-rows-2 gap-3">
          {
            forecast.daily.map((day, index) => (
              <aside
                key={`forecast-daily-${index + 1}`}
                className="
                  w-full h-auto
                  p-3 bg-slate-100
                  rounded-lg shadow-lg shadow-black/40
                "
              >
                <p className="mb-1 font-medium capitalize">
                  {new Date((day.dt || 0) * 1000).toDateString()}
                </p>

                <div className="flex items-center gap-3">
                  <p className="text-xl font-medium">
                    {(day.temp.day || 1).toFixed(1)}°C
                  </p>
                  <img
                    src={'https://openweathermap.org/img/w/' + (day.weather[0].icon || 'lorem ipsum') + '.png'}
                    alt="Weather Icon"
                    width="60"
                  />
                </div>

                <div className="flex items-center justify-between w-full">
                  <p className="text-sm font-medium">
                    Max:
                    <span className="ml-1 font-normal">
                      {(day.temp.min || 1).toFixed(1)} °C
                    </span>
                  </p>

                  <p className="text-sm font-medium">
                    Min:
                    <span className="ml-1 font-normal">
                      {(day.temp.max || 1).toFixed(1)} °C
                    </span>
                  </p>
                </div>

                <p className="mt-1 text-sm font-medium">
                  Humedad:
                  <span className="ml-1 font-normal">
                    {(day.humidity || 1)} %
                  </span>
                </p>
              </aside>
            ))
          }
        </section>

        <div className='mt-4 flex flex-row gap-4'>
          <section className="w-1/2">
            <h3 className="mb-4 text-2xl font-medium text-primary">
              Forecast for the next 48 hours
            </h3>
            <List
              className="
                card-container
                w-full h-full max-h-[316px]
                overflow-y-auto
                bg-slate-100 rounded-lg
              "
            >
              {
                forecast.hourly.map((hour, index) => (
                  <>
                    <ListItem key={`forescast-hourly-${index + 1}`}>
                      <div
                        className='
                          flex flex-col
                          justify-center items-start
                          w-2/5
                        '
                      >
                        <img
                          src={'https://openweathermap.org/img/w/' + (hour.weather[0].icon || 'lorem ipsum') + '.png'}
                          alt="Weather Icon"
                          width="60"
                        />
                        <ListItemText
                          primary={new Date((hour.dt || 1)* 1000).toLocaleTimeString()}
                          secondary={hour.weather[0].description || 'lorem ipsum'}
                        />
                      </div>

                      <div className="w-4/5 text-sm pl-4">
                        <p className="mb-2 font-medium">
                          Temperatura:
                          <span className="ml-1 font-normal">
                            {(hour.temp || 1).toFixed(1)} °C
                          </span>
                        </p>

                        <p className="mb-2 font-medium">
                          Sensación Térmica:
                          <span className="ml-1 font-normal">
                          {(hour.feels_like || 1).toFixed(1)} °C
                          </span>
                        </p>

                        <p className="mb-2 font-medium">
                          Humedad:
                          <span className="ml-1 font-normal">
                            {(hour.humidity || 1)}%
                          </span>
                        </p>
                      </div>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                ))
              }
            </List>
          </section>

          <section className="w-1/2">
            <h3 className="mb-4 text-2xl font-medium text-primary">
              Minute by minute monitoring
            </h3>
            <TableContainer
              component={Paper}
              style={{backgroundColor: '#f1f5f9', borderRadius: '8px'}}
              className="
                card-container
                w-full h-full max-h-[316px]
                overflow-y-auto
              "
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell align="right">Hora</TableCell>
                    <TableCell align="right">Precipitación</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {
                    forecast.minutely.map((min, index) => (
                      <TableRow key={`forecats-minutely-${index + 1}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {new Date((min.dt || 1) * 1000).toDateString()}
                        </TableCell>
                        <TableCell align="right">{new Date((min.dt || 1) * 1000).toLocaleTimeString()}</TableCell>
                        <TableCell align="right">{((min.precipitation || 1) * 100).toFixed(2)} %</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </section>
        </div>
      </main>
    </div>
  )
}


export default CardWeather