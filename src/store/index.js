import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
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
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

// sagaMiddleware.run(rootSaga)

export default store
