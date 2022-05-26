// Base
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Redux
import { useDispatch } from 'react-redux'
import { addUsuarioAsync } from '../store/actions/actionsUser'

// Hook
import useForm from '../hooks/useForm'

// Material UI
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
function SimpleDialog(props) {
  const dispatch = useDispatch()
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const [formValue, handleInputChange, reset] = useForm({
    id: '',
    name: '',
    lastname: '',
    email: '',
    age: '',
    country: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUsuarioAsync(formValue))
    reset()
    handleClose()
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const { id, name, lastname, email, age, country } = formValue

  return (
    <Dialog onClose={handleClose} open={open}>
      <header className="flex items-center justify-between p-4 border border-b-primary">
        <DialogTitle style={{ padding: 0 }}>
          Nuevo Usuario
        </DialogTitle>

        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </header>

      <DialogContent style={{width: "100%", maxWidth:"600px", padding: '16px'}}>
        <form onSubmit={handleSubmit}>
          <label className='block my-2'>Id usuario</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='text'
            name='id'
            value={id}
            placeholder='id'
            onChange={handleInputChange}
          />

          <label className='block my-2'>Nombre del usuario</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='text'
            name='name'
            value={name}
            placeholder='Nombre del usuario'
            onChange={handleInputChange}
          />

          <label className='block my-2'>Apellido del usuario</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='text'
            name='lastname'
            value={lastname}
            placeholder='Apellido del usuario'
            onChange={handleInputChange}
          />

          <label className='block my-2'>Correo electrónico</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='email'
            name='email'
            value={email}
            placeholder='Correo electrónico'
            onChange={handleInputChange}
          />


          <label className='block my-2'>Edad del usuario</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='number'
            name='age'
            value={age}
            placeholder='Edad del usuario'
            onChange={handleInputChange}
          />

          <label className='block my-2'>País del usuario</label>
          <input
            className='
              block w-full px-3 py-3
              bg-white border shadow-sm border-slate-300
              placeholder-slate-400 focus:outline-none
              focus:border-primary focus:ring-primary
              rounded-md sm:text-sm focus:ring-1
            '
            type='text'
            name='country'
            value={country}
            placeholder='País del usuario'
            onChange={handleInputChange}
          />

          <button
            type='submit'
            variant='contained'
            className='
              w-full h-11 mt-4
              text-center text-sm font-normal text-white  uppercase
              bg-primary rounded-md
            '
          >
            Crear Usuario
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
}

export default function DialogCrearUser() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value) => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<AddIcon  />}
        color="secondary"
      >
        Crear Usuario
      </Button>

      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}
