import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Signup from '../signup'
import View from '../view'

const App = () => (
  <div>
    <main>
      <Route path={/^(?!.*login)(?!.*signup).*$/} component={View} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </main>
  </div>
)

export default App
