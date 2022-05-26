// Base
import React, { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { editUsuarioAsync } from '../store/actions/actionsUser'

// Hook
import useForm from '../hooks/useForm'

// Material UI
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'


export default function DialogEditarUser({datos, setModal}) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  const [formValue, handleInputChange, reset] = useForm({
    id: datos.id,
    name: datos.name,
    lastname: datos.lastname,
    email: datos.email,
    age: datos.age,
    country: datos.country
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editUsuarioAsync(id, formValue))
    reset()
    handleClose()
    window.location.reload(true)
  }

  const { id, name, lastname, email, age, country } = formValue

  return (
    <Dialog onClose={handleClose} open={open}>
      <header className="flex items-center justify-between p-4 border border-b-primary">
        <DialogTitle style={{ padding: 0 }}>
          Editar Usuario
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
              text-center text-sm font-normal text-white uppercase
              bg-primary rounded-md
            '
          >
            Editar Usuario
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}