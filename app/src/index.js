
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import registerServiceWorker from './registerServiceWorker'

import reducers from './reducers/'

import App from './App'

import './index.css'

const client = axios.create({
  baseURL: 'http://localhost/admin.dev/api/public/',
  responseType: 'json'
})

let store = createStore(
  reducers,
  applyMiddleware(axiosMiddleware(client))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)

registerServiceWorker()
