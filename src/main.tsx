import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import App from './App.tsx'
import store from './store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
