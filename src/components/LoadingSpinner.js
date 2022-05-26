// Base
import React from 'react'

// Material UI
import { CircularProgress } from '@mui/material'

const LoadingSpinner = () => {
  return (
    <div
      className="
        flex justify-center items-center
        w-screen max-w-7xl h-[calc(100vh-165px)]
      "
    >
      <CircularProgress />
    </div>
  )
}

export default LoadingSpinner