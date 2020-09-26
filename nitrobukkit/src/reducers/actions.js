import {
  A,
  B,
  C
} from './types.js'

export const a = (a) => {
  return (dispatch) => {
    dispatch({
      type: A,
      payload: a
    })
  }
}

export const b = (b) => {
  return (dispatch) => {
    dispatch({
      type: B,
      payload: b
    })
  }
}

export const c = (c) => {
  return (dispatch) => {
    dispatch({
      type: C,
      payload: c
    })
  }
}