import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { Toaster } from 'sonner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // evita alguns erros
  <React.StrictMode>
    <App />
    <Toaster richColors />
  </React.StrictMode>,
)
