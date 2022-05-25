// Redux
import thunk from "redux-thunk"
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from "redux"

// Reducers
import { reducerLogin } from "./reducers/reducerLogin"
import { reducerUsers } from "./reducers/reducerUsers"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
  login: reducerLogin,
  userStore: reducerUsers
})

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
