import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import SignUp from '../signup'
import Hubs from '../hubs'

const App = () => (
  <div>
    <header>
    </header>

    <main>
      <Route path="/hubs" component={Hubs} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </main>
  </div>
)

export default App
