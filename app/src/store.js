import { createStore, combineReducers, applyMiddleware } from 'redux'
import { pets } from './reducers/pets'

//
// import { resource, resources, currentResource } from './reducers/resources'
// import { categories, category, addCategoryForm } from './reducers/categories'
//
// import appData from './reducers/app-data'
// import drawer from './reducers/drawer'
//
// import searchCriteria from './reducers/search'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    pets
    // appData,
    // category,
    // categories,
    // drawer,
    // currentResource,
    // addCategoryForm,
    // searchCriteria
  }),

  applyMiddleware(thunk)
)

export default store