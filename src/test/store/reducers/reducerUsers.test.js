import '@testing-library/jest-dom'
import { reducerUsers } from '../../../store/reducers/reducerUsers'
import { typesUser } from '../../../store/types/typesUser'

describe('Pruebas sobre reducerUsers', () => {
  test('Debe realizar el proceso de crear usuario', () => {
    const initialState = {
      users: []
    }

    const action = {
      type: typesUser.add,
      payload: {
        id: 1,
        nombre: 'Juan',
        ciudad: 'Bogotá',
        edad: 23,
      }
    }

    const state = reducerUsers(initialState, action)
    expect(state).toEqual({
      users: [
        {
          id: 1,
          nombre: 'Juan',
          ciudad: 'Bogotá',
          edad: 23,
        }
      ]
    })
  })

  test('Debe realizar el proceso de listar usuarios', () => {
    const initialState = {
      users: []
    }

    const action = {
      type: typesUser.list,
      payload: [
        {
          id: 1,
          nombre: 'Juan',
          ciudad: 'Bogotá',
          edad: 23,
        },
        {
          id: 2,
          nombre: 'Mateo',
          ciudad: 'Medellin',
          edad: 28,
        },
      ]
    }

    const state = reducerUsers(initialState, action)
    expect(state).toEqual({
      users: [
        {
          id: 1,
          nombre: 'Juan',
          ciudad: 'Bogotá',
          edad: 23,
        },
        {
          id: 2,
          nombre: 'Mateo',
          ciudad: 'Medellin',
          edad: 28,
        },
      ]
    })
  })


  test('Debe realizar el proceso de eliminar usuario', () => {
    const initialState = {
      users: [
        {
          id: 1,
          nombre: 'Juan',
          ciudad: 'Bogotá',
          edad: 23,
        },
        {
          id: 2,
          nombre: 'Mateo',
          ciudad: 'Medellin',
          edad: 28,
        },
      ]
    }

    const action = {
      type: typesUser.delete,
      payload: 1
    }

    const state = reducerUsers(initialState, action)
    expect(state).toEqual({
      users: [
        {
          id: 2,
          nombre: 'Mateo',
          ciudad: 'Medellin',
          edad: 28,
        },
      ]
    })
  })
})