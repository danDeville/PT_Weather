// Base
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

// Redux
import { Provider } from 'react-redux'
import { store } from './store/index'

// Components
import AppRouter from './router/AppRouter'

// Styles
import './index.css'

// Material Ui
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes/Material'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
)