import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThroughProvider } from 'react-through'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './index.css'

library.add(fas, far)

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter basename={process.env.PUBLIC_URL} history={history}>
      <ThroughProvider>
        <App />
      </ThroughProvider>
    </ConnectedRouter>
  </Provider>,
  target
)

registerServiceWorker();
