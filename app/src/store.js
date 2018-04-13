import { createStore, combineReducers, applyMiddleware } from 'redux'
import { pet, pets, currentPet } from './reducers/pets'
import { person, people } from './reducers/owners'
import { glossary } from './reducers/glossary'
import drawer from './reducers/drawer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    pet,
    pets,
    people,
    person,
    glossary,
    drawer,
    currentPet
  }),

  applyMiddleware(thunk)
)

export default store
