import React from 'react'
import { Routes, useLocation, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  // const location = useLocation();

  return (
    <>
      <div className='relative min-h-screen w-full z-50'>
        <Navbar />
        <Routes>
          <Route index element={<div>Home Page</div>} />
          <Route path="about" element={<div>About Page</div>} />
          <Route path="contact" element={<div>Contact Page</div>} />
          <Route path="service" element={<div>Service Page</div>} />
          <Route path="projects" element={<div>Projects Page</div>} />
          <Route path="contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
