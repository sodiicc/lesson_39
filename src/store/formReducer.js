const userInitialState = { name: 'Default', role: 'Default' }

const user = function (state = userInitialState, action) {
  switch (action.type) {
    case 'SET_FORM_EMAIL':
      return { ...state, name: action.payload }
    // case 'SET_ROLE':
    //   return { ...state, role: action.payload }
    // case 'SET_TOKEN':
    //   return { ...state, ...action.payload }
    // case 'REMOVE_TOKEN':
    //   return { ...state, token: '', refreshToken: '' }
    default:
      return state
  }
}

export default user