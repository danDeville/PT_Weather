import '@testing-library/jest-dom'
import { typesLogin } from '../../../store/types/typesLogin'

describe('Verificar types', () => {
  test('Comparar typesLogin', () => {
    expect(typesLogin).toEqual({
      login: 'Login',
      logout: 'Logout',
      registro: 'Registro'
    })
  })
})