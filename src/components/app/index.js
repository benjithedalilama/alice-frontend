import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from '../login'
import Signup from '../signup'
import View from '../view'

const App = () => (
  <div>
    <main>
      <Switch>
        <Route path='/hubs' component={View} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </main>
  </div>
)

export default App
