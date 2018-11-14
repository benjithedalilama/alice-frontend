import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../login'
import Signup from '../signup'
import Hubs from '../hubs'

const App = () => (
  <div>
    <header>
    </header>

    <main>
      <Route path="/hubs" component={Hubs} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </main>
  </div>
)

export default App
