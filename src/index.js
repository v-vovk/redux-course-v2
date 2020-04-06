import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
