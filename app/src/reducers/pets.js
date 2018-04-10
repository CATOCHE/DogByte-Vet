import {
  SET_PETS,
  GET_PET
  // CHG_CURRENT_RESOURCE,
  // CLEAR_CURRENT_RESOURCE,
  // CONFIRM_DELETE_RESOURCE
} from '../constants'
//import { merge, not } from 'ramda'

/*
A reducer named "resources" would be responsible
for managing the list of resources.
*/

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
    // case CHG_CURRENT_RESOURCE:
    //   console.dir(merge(state, action.payload))
    //   return merge(state, action.payload)
    // case CONFIRM_DELETE_RESOURCE:
    //   console.log('Confirming Delete')
    //   return merge(state, { confirmDelete: not(state.confirmDelete) })
    default:
      return state
  }
}

// export const currentResource = (state = {}, action) => {
//   switch (action.type) {
//     case CLEAR_CURRENT_RESOURCE:
//       return {}
//     default:
//       return state
//   }
// }
