import {
  GOOGLE_LOGIN,
  GOOGLE_LOGOUT,
  TEST
} from './types.js'

const initialState = {
  status: {
    A: 'a',
    B: 'B',
    C: 'C'
  },
  google: {
    login: false,
    data: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        ...state,
        google: {
          ...state.google,
          login: action.payload.login,
          data: action.payload.data
        }
      }
    case GOOGLE_LOGOUT:
      return {
        ...state,
        google: {
          ...state.google,
          login: action.payload.login,
          data: action.payload.data
        }
      }
    case TEST:
      return {
        ...state,
        status: {
          ...state.status,
          A: action.payload
        }
      }
    default:
      return state
  }
}
