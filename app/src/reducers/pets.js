import {
  SET_PETS,
  GET_PET,
  CHG_CURRENT_PET,
  CLEAR_CURRENT_PET
} from '../constants'
import { merge } from 'ramda'

export const pets = (state = [], action) => {
  switch (action.type) {
    case SET_PETS:
      return action.payload
    default:
      return state
  }
}

export const pet = (state = {}, action) => {
  switch (action.type) {
    case GET_PET:
      return action.payload
    default:
      return state
  }
}

export const currentPet = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_PET:
      return merge(state, action.payload)
    case CLEAR_CURRENT_PET:
      return {}
    default:
      return state
  }
}
