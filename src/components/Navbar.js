// Base
import React from 'react'

// Component
import DrawerUser from './DrawerUser'

const Navbar = () => {
  return (
    <header className="w-full h-20 bg-background border-2 border-b-primary">
      <nav
        className="
          relative
          flex items-center justify-between
          w-full max-w-7xl mx-auto h-full px-4
        "
      >
        <h3 className="text-xl font-semibold italic text-primary">
          Weather Report
        </h3>

        <DrawerUser />
      </nav>
    </header>
  )
}

export default Navbar
