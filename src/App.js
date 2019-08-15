import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import AppRouter from './AppRouter'
import './styles/legal.css'

function App() {
  return (
    <div>
      <Header />
      <div className="main flex">
        <NavBar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
