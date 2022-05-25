// Base
import React, { useState } from "react"

// Components
import ListUser from "./ListUser"

// Material UI
import { IconButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"

// Material UI Icon
import CloseIcon from "@mui/icons-material/Close"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

const DrawerUser = (props) => {
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
        <ListUser />
      </Drawer>
    </>
  )
}

export default DrawerUser