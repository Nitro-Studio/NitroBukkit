import {
  A,
  B,
  C
} from './types.js'

const initialState = {
  status: {
    A: 'a',
    B: 'B',
    C: 'C'
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case A:
      return {
        ...state,
        status: {
          ...state.status,
          A: action.payload
        }
      }
    case B:
      return {
        ...state,
        status: {
          ...state.status,
          B: action.payload
        }
      }
    case C:
      return {
        ...state,
        status: {
          ...state.status,
          C: action.payload
        }
      }
    default:
      return state
  }
}
