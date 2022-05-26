// Base
import React, { useState } from "react"

// Redux
import { useDispatch } from "react-redux"
import { logoutAsync } from "../store/actions/actiosLogin"

// Components
import ListUser from "./ListUser"

// Material UI
import { IconButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"

// Material UI Icon
import CloseIcon from "@mui/icons-material/Close"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

const DrawerUser = () => {
  const dispatch = useDispatch()
  const [showDrawer, setShowDrawer] = useState(false)
  const handleCloseDrawer = () => setShowDrawer(false)
  const handleOpenDrawer = () => setShowDrawer(true)

  return (
    <>
      <IconButton size="large" onClick={handleOpenDrawer} >
        <PersonOutlineIcon sx={{ fontSize: 30 }} color="primary"/>
      </IconButton>

      <Drawer
        anchor="right"
        visible="temporary"
        open={showDrawer}
        onClose={handleCloseDrawer}
      >
      <div className="relative h-full">
        <section
          className="
            flex items-center justify-between
            p-4 mb-3
            bg-gray-200
          "
        >
          <h3 className="text-lg">
            Lista de usuarios
          </h3>
          <IconButton onClick={handleCloseDrawer}>
            <CloseIcon />
          </IconButton>
        </section>

        <aside className="w-[320] md:w-[420px] md:w-[420px]">
          <ListUser />
        </aside>

        <button
          onClick={() => dispatch(logoutAsync())}
          className="
            absolute bottom-4 left-4
            w-[calc(100%-32px)] h-10
            bg-primary rounded-sm
            text-white font-medium
            "
          >
          Cerrar sesión
        </button>
      </div>
      </Drawer>
    </>
  )
}

export default DrawerUser