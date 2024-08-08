import React from 'react'
import "./App.css"
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


const App = () => {


  return (
    <div>
      <Navbar />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />


    </div>
  )
}

export default App
