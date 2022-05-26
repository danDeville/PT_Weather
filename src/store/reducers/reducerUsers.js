import { typesUser } from '../types/typesUser'

const initialState = {
  users: [],
}

export const reducerUsers = (state =initialState, action) => {
  switch (action.type) {
    case typesUser.add:
      return {
        users: [action.payload]
      }

    case typesUser.list:
      return {
        users: [...action.payload]
      }

    case typesUser.edit:
      return {
        ...state
      }

    case typesUser.delete:
      return {
        users: state.users.filter(user => user.id !== action.payload)
      }

    default:
      return state
  }
}