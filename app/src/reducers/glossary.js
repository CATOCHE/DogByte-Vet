import { SET_GLOSSARY } from '../constants'

export const glossary = (state = [], action) => {
  switch (action.type) {
    case SET_GLOSSARY:
      return action.payload
    default:
      return state
  }
}
