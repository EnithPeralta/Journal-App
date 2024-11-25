import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
