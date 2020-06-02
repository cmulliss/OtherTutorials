import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './components/App'
// import App from './components/AppAsyncAwait.js'
import App from './components/AppAsyncAwaitSearch.js'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// hot loading so style changes don't refresh
if (module.hot) {
  module.hot.accept()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
