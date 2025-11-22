"use client"

import { useState, useContext } from "react"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Countdown from "./components/Countdown"
import Events from "./components/Events"
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
          ? // Dark theme with blue/slate gradient
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
          : // Gaming light theme with vibrant cyan/purple neon aesthetic
            "linear-gradient(135deg, #e0f2fe 0%, #f0e7ff 50%, #e0f2fe 100%)",
        color: isDark ? "#3b82f6" : "#0c1117",
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
