import '@testing-library/jest-dom'
import { reducerLogin } from '../../../store/reducers/reducerLogin'
import { typesLogin } from '../../../store/types/typesLogin'

describe('Pruebas sobre reducerLogin', () => {
  test('Debe realizar el proceso de login', () => {
    const initialState = {}
    const action = {
      type: typesLogin.login,
      payload: {
        user: 'dandeville',
        pass: '0m9n8b7v6'
      }
    }

    const state = reducerLogin(initialState, action)
    expect(state).toEqual({
      user: 'dandeville',
      pass: '0m9n8b7v6'
    })
  })

  test('Debe retornar el estado por defecto', () => {
    const state = reducerLogin({logged: false}, {})
    expect(state).toEqual({logged: false})
  })

  test('Autenticar usuario a partir de credenciales', () => {
    const action = {
      type:typesLogin.login,
      payload: {
        user: 'Daniel',
        pass: '98564'
      }
    }

    const state = reducerLogin({logged: false}, action)
    expect(state).not.toEqual({
      logged: true,
      user: 'Daniel',
      pass: '98564'
    })
  })

  test('Debe realizar el proceso de registro', () => {
    const initialState = {}
    const action = {
      type: typesLogin.registro,
      payload: {
        email:'me@dandeville.com',
        contraseña:'1z2x3c45b',
        nombre:'Daniel'
      }
    }

    const state = reducerLogin(initialState, action)
    expect(state).toEqual({
      email:'me@dandeville.com',
      contraseña:'1z2x3c45b',
      nombre:'Daniel'
    })
  })

  test('Debe realizar el proceso de logout', () => {
    const initialState = {
      user: 'dandeville',
      pass: '0m9n8b7v6'
    }

    const action = {
      type: typesLogin.logout
    }

    const state = reducerLogin(initialState, action)
    expect(state).toEqual({})
  })
})