import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import Projects from './pages/projects'

function App() {

  return (
    <>
      <div className='relative min-h-screen w-full z-50'>
        <Navbar />
        <Routes>
          <Route index element= {<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
