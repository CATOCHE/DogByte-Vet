import { createStore, combineReducers, applyMiddleware } from 'redux'
import { pet, pets, currentPet } from './reducers/pets'
import { person, people } from './reducers/owners'
import { glossary } from './reducers/glossary'

//
// import { resource, resources, currentResource } from './reducers/resources'
// import { categories, category, addCategoryForm } from './reducers/categories'
//
// import appData from './reducers/app-data'
import drawer from './reducers/drawer'
//
// import searchCriteria from './reducers/search'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    pet,
    pets,
    people,
    person,
    // appData,
    // category,
    // categories,
    glossary,
    drawer,
    currentPet
    // addCategoryForm,
    // searchCriteria
  }),

  applyMiddleware(thunk)
)

export default store
