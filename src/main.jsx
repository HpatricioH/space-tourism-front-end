import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { NavBarModal } from './Components/NavBarModal/NavBarModal'
import { Provider } from 'react-redux'
import store from './store/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBarModal />
      <App />
    </BrowserRouter>
  </Provider>
)
