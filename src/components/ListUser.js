// Base
import React, { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsuarioAsync, listUsuariosAsync } from '../store/actions/actionsUser'

// Material UI
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DialogEditarUser from './DialogEditUser'

const ListUser = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(store => store.userStore)

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  let [modal, setModal] = useState(false)
  let [datos, setDatos] = useState([])

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    dispatch(listUsuariosAsync())
  }, [dispatch])

  const editar = (user) => {
    setDatos(user)
    setModal(true)
  }

  const handleDelete = () => {
    dispatch(deleteUsuarioAsync())
    handleCloseModal()
  }

  return (
    <div>
      {
        users.length === 0
        ? (<h1>No hay usuarios</h1>)
        : (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {users.map(us => (
              <div key={us.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={`${us.name} ${us.lastname} - ${us.age} Años`}
                    secondary={
                      <span className="uppercase">
                        <Typography
                          sx={{ display: 'inline', textTransform: 'lowercase' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {us.email}
                        </Typography>
                        <br />
                        {us.country}
                      </span>
                    }
                  />
                  {/* <div>
                    <IconButton
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClickMenu}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      elevation={1}
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleCloseMenu}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => editar(us)}>Editar Usuario</MenuItem>
                      <MenuItem onClick={handleOpenModal}>Eliminar Usuario</MenuItem>
                    </Menu>
                  </div> */}
                  <button onClick={() => dispatch(deleteUsuarioAsync(us.id))}>
                    Eliminar
                  </button>
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
          </List>
        )
      }
      {
        modal === true
        ? <DialogEditarUser datos={datos} setModal={setModal} />
        : ''
      }
    </div>
  )
}

export default ListUser