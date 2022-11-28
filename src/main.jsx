import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Main from './pages/main'
import Nav from './pages/navbar'
import Content from './pages/content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Content />
    <Main />
  </React.StrictMode>
)
