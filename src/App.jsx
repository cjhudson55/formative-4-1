import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Links from './Links'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Header />
      <Links />
    </HashRouter>
  )
}

export default App
