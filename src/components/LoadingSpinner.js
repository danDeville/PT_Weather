// Base
import React from 'react'

// Material UI
import { CircularProgress } from '@mui/material'

const LoadingSpinner = () => {
  return (
    <div className="w-full h-full">
      <CircularProgress />
    </div>
  )
}

export default LoadingSpinner