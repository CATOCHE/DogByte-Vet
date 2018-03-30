// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Category from './pages/categories/show'
//import Home from './pages/home'
//import Resource from './pages/resources/show'
import Pets from './pages/pets'
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
            <Route exact path="/pets" component={Pets} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

/*
<Route exact path="/" component={Home} />

<Route
  exact
  path="/resources/new"
  render={props => <NewResource {...props} />}
/>
<Route exact path="/resources/:id" component={Resource} />
<Route exact path="/categories" component={Categories} />
<Route exact path="/categories/new" component={AddCategory} />
<Route path="/categories/:id" component={Category} />
<Route path="/search" component={Search} />
<Route path="/resources/:id/edit" component={EditResource} />
*/
