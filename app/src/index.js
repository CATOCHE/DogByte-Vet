import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
//
import store from './store'
import { Provider } from 'react-redux'
import { getPets, getPet } from './action-creators/pets'
import { getPeople, getPerson } from './action-creators/owners'
import { getGlossary } from './action-creators/glossary'
// import { getCategories } from './action-creators/categories'
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import purple from 'material-ui/colors/purple'
import red from 'material-ui/colors/red'

const customTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(getPets)
store.dispatch(getPet)
store.dispatch(getPerson)
store.dispatch(getPeople)
store.dispatch(getGlossary)
