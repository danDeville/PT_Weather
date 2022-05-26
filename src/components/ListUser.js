// Base
import React, { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsuarioAsync, listUsuariosAsync } from '../store/actions/actionsUser'

// Material UI
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import DialogEditarUser from './DialogEditUser'

const ListUser = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(store => store.userStore)

  const [openModal, setOpenModal] = useState(false)
  let [modal, setModal] = useState(false)
  let [datos, setDatos] = useState([])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    dispatch(listUsuariosAsync())
  }, [dispatch])

  const editar = (user) => {
    setDatos(user)
    setModal(true)
  }

  return (
    <div>
      {
        users.length === 0
        ? (
            <div
              className="
                flex items-center justify-center
                w-full h-[calc(100vh-120px)]
              "
            >
              <h4 className="text-lg font-medium">
                No hay usuarios
              </h4>
            </div>
          )
        : (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {users.map(us => (
              <div key={us.id}>
                <ListItem alignItems="flex-center">
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
                  <section className="flex flex-col gap-3">
                    <button
                      className="w-full p-1 bg-yellow-500 text-white text-sm rounded-sm"
                      onClick={() => editar(us)}>
                      Editar
                    </button>
                    <button
                      className="w-full p-1 bg-red-700 text-white text-sm rounded-sm"
                      onClick={() => dispatch(deleteUsuarioAsync(us.id))}>
                      Eliminar
                    </button>
                  </section>
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