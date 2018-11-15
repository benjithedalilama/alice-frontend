import React from 'react'
import HubList from '../hublist'
import Navbar from '../navbar'

const View = props => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <HubList />
    </main>
  </div>
)

export default View
