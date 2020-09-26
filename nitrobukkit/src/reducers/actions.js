import {
  GOOGLE_LOGIN,
  GOOGLE_LOGOUT
} from './types.js'

export const googleLogin = (data) => {
  return async (dispatch) => {
    console.log(data)
    dispatch({
      type: GOOGLE_LOGIN,
      payload: {
        login: true,
        data: data
      }
    })
  }
}

export const googleLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: GOOGLE_LOGOUT,
      payload: {
        login: false,
        data: null
      }
    })
  }
}