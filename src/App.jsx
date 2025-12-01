"use client"

import { useState, useContext } from "react"
import { Routes, Route } from "react-router-dom"
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
import CommitteePage from "./pages/CommitteePage"
import FullGalleryPage from "./pages/FullGalleryPage"
import { ThemeContext } from "./context/ThemeContext"
import "./App.css"

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Countdown />
      <Events />
      <PreviousSponsors />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

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
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
          : "linear-gradient(135deg, #e0f2fe 0%, #f0e7ff 50%, #e0f2fe 100%)",
        color: isDark ? "#3b82f6" : "#0c1117",
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/committees" element={<CommitteePage />} />
        <Route path="/gallery" element={<FullGalleryPage />} />
      </Routes>
    </div>
  )
}

export default App
