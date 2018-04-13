import { SET_PEOPLE, GET_PERSON } from '../constants'

export const people = (state = [], action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return action.payload
    default:
      return state
  }
}

export const person = (state = {}, action) => {
  switch (action.type) {
    case GET_PERSON:
      console.log('GET_PERSON REDUCER state is: ', action.payload)
      return action.payload
    default:
      return state
  }
}
