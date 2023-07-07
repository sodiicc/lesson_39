import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './userReducer'
import form from './formReducer'

// const persistedState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {}
const rootReducer = combineReducers({
  user, form
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

// sagaMiddleware.run(rootSaga)

export default store
