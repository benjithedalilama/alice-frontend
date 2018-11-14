import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import SignUp from '../signup'

const App = () => (
  <div>
    <header>
    </header>

    <main>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </main>
  </div>
)

export default App
