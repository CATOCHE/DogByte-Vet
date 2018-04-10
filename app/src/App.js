import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Pet from './pages/pets/show'
import Pets from './pages/pets'
import Glossary from './pages/glossary'
// import BIO from './pages/BIO'
//import Categories from './pages/categories'

//import NewResource from './pages/resources/new-resource'

//import AddCategory from './pages/categories/addCategory'
//import Search from './pages/search'

//import EditResource from './pages/resources/edit'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pets" component={Pets} />
            <Route exact path="/pets/:id" component={Pet} />
            <Route exact path="/glossary" component={Glossary} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

/*
<Route exact path="/pet/bio" component={BIO} />

<Route
  exact
  path="/resources/new"
  render={props => <NewResource {...props} />}
/>
<Route exact path="/categories" component={Categories} />
<Route exact path="/categories/new" component={AddCategory} />
<Route path="/categories/:id" component={Category} />
<Route path="/search" component={Search} />
<Route path="/resources/:id/edit" component={EditResource} />
*/
