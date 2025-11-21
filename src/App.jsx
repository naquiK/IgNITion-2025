"use client"

import { useState, useContext } from "react"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Countdown from "./components/Countdown"
import Events from "./components/Events"
import Sponsors from "./components/Sponsors"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import PreviousSponsors from "./components/PreviousSponsors"
import Footer from "./components/Footer"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const { isDark } = useContext(ThemeContext)

  const handleLoaderComplete = () => {
    setShowLoader(false)
  }

  if (showLoader) {
    return <Loader onLoadComplete={handleLoaderComplete} />
  }

  return (
    <div
      className="min-h-screen transition-all duration-300"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #0d0221 0%, #1a0a3e 40%, #0d0221 100%)"
          : "linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 40%, #f5f7fa 100%)",
        color: isDark ? "#00d9ff" : "#333333",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Countdown />
      <Events />
      {/* <Sponsors /> */}
      <PreviousSponsors />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
