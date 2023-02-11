import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Project from './Project'

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/about" element={<About/>} />
         <Route exact path="/project" element={<Project/>} />
      </Routes>
    </Router>
  )
}

export default App

