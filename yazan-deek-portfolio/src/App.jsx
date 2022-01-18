import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import React, { useState } from "react"


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (

    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpe={setMenuOpen} />
      <div className="sections">

        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />

      </div>


    </div>


  )
}

export default App
