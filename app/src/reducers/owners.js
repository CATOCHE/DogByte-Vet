import {
  SET_PEOPLE,
  GET_PERSON
  // CHG_CURRENT_RESOURCE,
  // CLEAR_CURRENT_RESOURCE,
  // CONFIRM_DELETE_RESOURCE
} from '../constants'
//import { merge, not } from 'ramda'

/*
A reducer named "resources" would be responsible
for managing the list of resources.
*/

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
