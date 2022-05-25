// Base
import React from 'react'

// Components
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-background">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto h-full p-4">
        {children}
      </div>
    </div>
  )
}

export default Layout
