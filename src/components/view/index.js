import React from 'react'
import Hubs from '../hubs'
import Navbar from '../navbar'

const View = props => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <Hubs />
    </main>
  </div>
)

export default View
