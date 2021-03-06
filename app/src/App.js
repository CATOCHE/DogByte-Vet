import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Pet from './pages/pets/show'
import Pets from './pages/pets'
import Glossary from './pages/glossary'
import BioShow from './pages/bio/show'
import VaccShow from './pages/vacc/show'
import LabShow from './pages/lab/show'
import HistShow from './pages/hist/show'
import RabShow from './pages/rab/show'

import NewPet from './pages/pets/new-pet'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pets" component={Pets} />
            <Route
              exact
              path="/pets/new"
              render={props => <NewPet {...props} />}
            />
            <Route exact path="/pets/:id" component={Pet} />
            <Route exact path="/glossary" component={Glossary} />
            <Route exact path="/bio/show/:id" component={BioShow} />
            <Route exact path="/vacc/show/:id" component={VaccShow} />
            <Route exact path="/lab/show/:id" component={LabShow} />
            <Route exact path="/hist/show/:id" component={HistShow} />
            <Route exact path="/rab/show/:id" component={RabShow} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
