import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Work from './components/work/Work'

function App() {
  const[darkMode, setDarkMode] = useState(false);

useEffect(()=>{
  document.querySelector('body').setAttribute('data-theme',darkMode ? 'dark' : 'light');

},[darkMode])

  console.log(darkMode)
  return (
  <div className={darkMode ? "app dark" : "app"}>
   <Header darkMode={darkMode} setDarkMode={setDarkMode} />
   <main className="main">

   <Home/>
   <About/>
   <Skills/>
   <Services/>
   <Qualification/>
   <Work/>
   <Contact/>
   
   </main>
 
   <Footer/>
   <ScrollUp/>
   
  </div>
  )
}

export default App
