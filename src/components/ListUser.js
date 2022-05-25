// Base
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listUsuariosAsync } from '../store/actions/actionsUser'


const ListUser = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(store => store.userStore)

  useEffect(() => {
    dispatch(listUsuariosAsync())
  }, [dispatch])

  return (
    <div>
      {
        users.length === 0
          ? (<h1>No hay usuarios</h1>)
          : (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {users.map((user, index) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} />
                    </ListItemAvatar>

                    <ListItemText
                      primary={`${user.name} ${user.lastname} - ${user.age} Años`}
                      secondary={
                        <span className="uppercase">
                          <Typography
                            sx={{ display: 'inline', textTransform: 'lowercase' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {user.email}
                          </Typography>
                          <br />
                          {user.country}
                        </span>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          )
      }
    </div>
  )
}

export default ListUser