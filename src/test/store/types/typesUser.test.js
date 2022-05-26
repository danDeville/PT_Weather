import '@testing-library/jest-dom'
import { typesUser } from '../../../store/types/typesUser'

describe('Verificar types', () => {
  test('Comparar typesUser', () => {
    expect(typesUser).toEqual({
      add: 'AddUser',
      list: 'ListUser',
      edit: 'EditUser',
      delete: 'DeleteUser',
      detail: 'DetailUser',
    })
  })
})